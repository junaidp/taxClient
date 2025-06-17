import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 0 },
  section: { marginTop: 20 },
  padded: { padding: 20 },
  centerText: { textAlign: 'center' },
  label: { fontSize: 12, fontWeight: 'bold' },
  labelWrap: { flexDirection: 'column', gap: 7 },
  name: { fontSize: 10 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFCFB6',
    padding: 20,
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
});

const MyPDF = ({ hmrc, filteredItems, netEarning }) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.padded}>
        <Text style={[styles.centerText, { marginBottom: 10, fontWeight: 'bold' }]}>
          Self-employement Quarterly Submission
        </Text>
        <Text style={[styles.centerText, { fontSize: 12 }]}>
          1 April 2025 to 31 June 2025 (Quarter 1)
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.labelWrap}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.name}>
            {hmrc?.inputs?.personalInformation?.identifier}
          </Text>
        </View>
        <View style={styles.labelWrap}>
          <Text style={styles.label}>Your Unique Taxpayer Reference (UTR)</Text>
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

      <View style={styles.section}>
        <Text>Business details</Text>

        <View style={styles.row}>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>Business name</Text>
            <Text style={styles.name}>----</Text>
          </View>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>First line of your business address</Text>
            <Text style={styles.name}>21 Part Street</Text>
            <Text style={styles.name}>Sheffield, Hertfordshire</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>Description of business</Text>
            <Text style={styles.name}>------</Text>
          </View>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>Post Code of your business address</Text>
            <View style={styles.boxesWrap}>
              {'AL13EU'.split('').map((char, ind) => (
                <View style={styles.box} key={ind}>
                  <Text>{char}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      {filteredItems.map((item, ind) => (
        <View key={ind} break>
          <View style={styles.section}>
            <Text>Business type ({item.name})</Text>

            <View style={styles.row}>
              <View style={styles.labelWrap}>
                <Text style={styles.label}>Your total turnover</Text>
                <View style={styles.boxesWrap}>
                  <View style={styles.borderlessBox}>
                    <Text>£</Text>
                  </View>
                  {item.totalIncome.split('').map((num, index) => (
                    <View style={styles.box} key={index}>
                      <Text>{num}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.labelWrap}>
                <Text style={styles.label}>Any other business income</Text>
                <View style={styles.boxesWrap}>
                  <View style={styles.borderlessBox}>
                    <Text>£</Text>
                  </View>
                  {item.totalIncome.split('').map((num, index) => (
                    <View style={styles.box} key={index}>
                      <Text>{num}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.hidden}>
                <Text>Description of business</Text>
                <Text>Murad Ali</Text>
              </View>
              <View style={styles.labelWrap}>
                <Text style={styles.label}>Trading income allowance</Text>
                <View style={styles.boxesWrap}>
                  <View style={styles.borderlessBox}>
                    <Text>£</Text>
                  </View>
                  {item.totalIncome.split('').map((num, index) => (
                    <View style={styles.box} key={index}>
                      <Text>{num}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text>Business expense</Text>
            <View
              style={{
                flexDirection: 'column',
                backgroundColor: '#FFCFB6',
                padding: 20,
                gap: 10,
              }}
            >
              {!item.expenses.filter((exp) => exp.value).length ? (
                <Text>No expenses in this business type</Text>
              ) : (
                item.expenses
                  .filter((exp) => exp.value)
                  .map((valuedExpense, i) => (
                    <View style={styles.labelWrap} key={i}>
                      <Text style={styles.label}>{valuedExpense?.name}</Text>
                      <View style={styles.boxesWrap}>
                        <View style={styles.borderlessBox}>
                          <Text>£</Text>
                        </View>
                        {valuedExpense.value.split('').map((num, index) => (
                          <View style={styles.box} key={index}>
                            <Text>{num}</Text>
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

      <View style={styles.section} break>
        <Text>Net Profit or loss</Text>
        <View style={styles.row}>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>Net Profit</Text>
            <View style={styles.boxesWrap}>
              <View style={styles.borderlessBox}>
                <Text>£</Text>
              </View>
              {netEarning?.split('').map((num, ind) => (
                <View style={styles.box} key={ind}>
                  <Text>{num}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.labelWrap}>
            <Text style={styles.label}>Or, net loss</Text>
            <View style={styles.boxesWrap}>
              <View style={styles.borderlessBox}>
                <Text>£</Text>
              </View>
              {netEarning?.split('').map((num, ind) => (
                <View style={styles.box} key={ind}>
                  <Text>{num}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text>CIS deductions and tax taken off</Text>
        <View style={styles.row}>
          <View style={styles.labelWrap}>
            <Text style={styles.label}>
              Total Construction Industry Scheme (CIS)
            </Text>
            <View style={styles.boxesWrap}>
              <View style={styles.borderlessBox}>
                <Text>£</Text>
              </View>
              {'1111'.split('').map((char, i) => (
                <View style={styles.box} key={i}>
                  <Text>{char}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.labelWrap}>
            <Text style={styles.label}>Other tax taken off trading icome</Text>
            <View style={styles.boxesWrap}>
              <View style={styles.borderlessBox}>
                <Text>£</Text>
              </View>
              {'1111'.split('').map((char, i) => (
                <View style={styles.box} key={i}>
                  <Text>{char}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyPDF;
