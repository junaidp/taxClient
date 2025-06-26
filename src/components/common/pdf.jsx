import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import moment from 'moment';

// Reusable box rendering with £
const renderBoxesWithCurrency = (value = '') => (
  <View style={styles.boxesWrap}>
    <View style={styles.borderlessBox}>
      <Text>£</Text>
    </View>
    {value.split('').map((char, idx) => (
      <View style={styles.box} key={idx}>
        <Text>{char}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  page: { padding: 0, fontSize: 10 },
  section: { marginTop: 20, paddingHorizontal: 20 },
  padded: { padding: 20 },
  centerText: { textAlign: 'center' },
  label: { fontSize: 12, fontWeight: 'bold', marginBottom: 4 },
  labelWrap: { flexDirection: 'column', marginBottom: 10 },
  name: { fontSize: 10 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFCFB6',
    padding: 20,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxesWrap: {
    flexDirection: 'row',
    gap: 4,
    flexWrap: 'wrap',
  },
  borderlessBox: {
    height: 30,
    width: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

const MyPDF = ({ hmrc, filteredItems, netEarning, reportingPeriod }) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      {/* Header */}
      <View style={styles.padded}>
        <Text style={[styles.centerText, { fontSize: 14, fontWeight: 'bold' }]}>
          Self-employment Quarterly Submission
        </Text>
        <Text style={[styles.centerText, { fontSize: 12 }]}>
          {moment(reportingPeriod?.periodStartDate).format('MMMM D, YYYY')} -{' '}
          {moment(reportingPeriod?.periodEndDate).format('MMMM D, YYYY')} (Quarter 1)
        </Text>
      </View>

      {/* Personal Information */}
      <View style={styles.row}>
        <View style={styles.labelWrap}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.name}>
            {hmrc?.inputs?.personalInformation?.identifier}
          </Text>
        </View>
        <View style={styles.labelWrap}>
          <Text style={styles.label}>Unique Taxpayer Reference (UTR)</Text>
          <View style={styles.boxesWrap}>
            {hmrc?.inputs?.personalInformation?.uniqueTaxpayerReference
              .split('')
              .map((num, ind) => (
                <View style={styles.box} key={ind}>
                  <Text>{num}</Text>
                </View>
              ))}
          </View>
        </View>
      </View>

      {/* Business Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Business Details</Text>
        <View style={styles.row}>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>Business name</Text>
            <Text style={styles.name}>----</Text>
          </View>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>Business address</Text>
            <Text style={styles.name}>21 Part Street</Text>
            <Text style={styles.name}>Sheffield, Hertfordshire</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>Business Description</Text>
            <Text style={styles.name}>------</Text>
          </View>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>Postcode</Text>
            <View style={styles.boxesWrap}>
              {'AL13EU'.split('').map((char, i) => (
                <View style={styles.box} key={i}>
                  <Text>{char}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* Business Income & Expenses */}
      {filteredItems?.map((item, ind) => (
        <View key={ind} break>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Business Income ({item.name})</Text>

            <View style={styles.row}>
              <View style={styles.labelWrap}>
                <Text style={styles.label}>Total Turnover</Text>
                {renderBoxesWithCurrency(item.totalIncome)}
              </View>
              <View style={styles.labelWrap}>
                <Text style={styles.label}>Other Income</Text>
                {renderBoxesWithCurrency(item.totalIncome)}
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.hidden}>
                <Text>Placeholder</Text>
              </View>
              <View style={styles.labelWrap}>
                <Text style={styles.label}>Trading Income Allowance</Text>
                {renderBoxesWithCurrency(item.totalIncome)}
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Business Expenses</Text>
            <View style={[styles.row, { flexDirection: 'column', backgroundColor: '#FFCFB6' }]}>
              {!item.expenses.filter((exp) => exp.value).length ? (
                <Text>No expenses in this business type</Text>
              ) : (
                item.expenses
                  .filter((exp) => exp.value)
                  .map((exp, i) => (
                    <View style={styles.labelWrap} key={i}>
                      <Text style={styles.label}>{exp.name}</Text>
                      <View style={styles.boxesWrap}>
                        <View style={styles.borderlessBox}><Text>£</Text></View>
                        {exp.value.split('').map((char, idx) => (
                          <View style={styles.box} key={idx}>
                            <Text>{char}</Text>
                          </View>
                        ))}
                        <Text>.</Text>
                        {exp.formBox?.toString().split('').map((val, idx) => (
                          <View style={styles.box} key={idx}>
                            <Text>{val}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  ))
              )}
            </View>
          </View>
        </View>
      ))}

      {/* Net Earnings */}
      <View style={styles.section} break>
        <Text style={styles.sectionTitle}>Net Profit or Loss</Text>
        <View style={styles.row}>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>
              {Number(netEarning) > 0 ? 'Net Profit' : 'Net Loss'}
            </Text>
            {renderBoxesWithCurrency(netEarning)}
          </View>
        </View>
      </View>

      {/* CIS Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CIS Deductions and Tax</Text>
        <View style={styles.row}>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>
              Construction Industry Scheme (CIS)
            </Text>
            {renderBoxesWithCurrency('1111')}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyPDF;
