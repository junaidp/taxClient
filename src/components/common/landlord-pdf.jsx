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
    labelWrapLongText: { flexDirection: 'column', marginBottom: 10, flex: 1 },
    name: { fontSize: 10 },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#FFCFB6',
        padding: 20,
        marginBottom: 10,
        gap: 10
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
    firstTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
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
                    UK Property Quarterly Submission
                </Text>
                <Text style={[styles.centerText, { fontSize: 12 }]}>
                    {moment(reportingPeriod?.periodStartDate).format('MMMM D, YYYY')} -{' '}
                    {moment(reportingPeriod?.periodEndDate).format('MMMM D, YYYY')} (Quarter 1)
                </Text>
            </View>
            <View style={styles.row}>
                <Text>This return was successfully submitted to the HMRC on july 4,2025. HMRC Submission Reference number 2828828288</Text>
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
            {/* FHL */}
            <View break>
                <View style={styles.section}>
                    <Text style={styles.firstTitle}>Furnished holiday lettings (FHL) in the UK or European Eonomic Area (EEA)</Text>
                    <Text style={styles.sectionTitle}>You need to fill in one page for the UK businesses and separate page for EEA businesses.</Text>
                    <View style={styles.row}>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Income --- the amount of rent and any income for services provided to tenants</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Adjusted profit for the year</Text>
                            <Text style={{ visibility: "hidden", opacity: 0 }}>Ramdom Accomodating text</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Rent paid, repairs, insurance and cost of services provided --- the amount of rent and any income for</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Taxable profit for the year </Text>
                            <Text style={{ visibility: "hidden", opacity: 0 }}>Ramdom Accomodating text</Text>
                            <Text style={{ visibility: "hidden", opacity: 0 }}>Ramdom Accomodating text</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Loan interest and other financial costs</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Loss for the year </Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Legal, management and other professional fees</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Other allowable property expenses </Text>
                            <Text style={{ visibility: "hidden", opacity: 0 }}>Ramdom Accomodating text</Text>

                            {renderBoxesWithCurrency("------")}
                        </View>
                    </View>
                </View>
            </View>

            {/* Property Income */}
            <View style={styles.section} break>
                <Text style={styles.firstTitle}>Property Income</Text>
                <Text style={styles.sectionTitle}>Do not include furnished holiday lettings, Real Estate Investment Trust or Property Authorized Investment Funds dividends / distribution here.</Text>
                <View style={styles.row}>
                    <View style={styles.labelWrap}>
                        <Text style={styles.label}>
                            Total rents and other income from property
                        </Text>
                        {renderBoxesWithCurrency('------')}
                    </View>
                </View>
            </View>

            {/* Property Expenses */}
            <View break>
                <View style={styles.section}>
                    <Text style={styles.firstTitle}>Property Expenses</Text>

                    <View style={styles.row}>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Rent, rates, insurance and ground rents</Text>
                            <Text style={{ visibility: "hidden", opacity: 0 }}>Legal management and other professional fees</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Legal, management and other professional fees</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Property repairs and maintenance</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Costs of services provided, including wages</Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Non residential property finance cost </Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                        <View style={styles.labelWrapLongText}>
                            <Text style={styles.label}>Other allowable property expenses </Text>
                            {renderBoxesWithCurrency("------")}
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default MyPDF;
