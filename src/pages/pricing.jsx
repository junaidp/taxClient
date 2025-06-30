import MyPDF from '../components/common/landlord-pdf';
import Header from '../components/home/header'
import Body from '../components/pricing/body'
import { PDFViewer } from "@react-pdf/renderer";
import { useSelector } from 'react-redux';


const Pricing = ({ setShowLoginDialog, setShowMyProfileDialog }) => {
    const reportingPeriod = JSON.parse(sessionStorage.getItem("reportingPeriod"));
    const { hmrc } = useSelector((state) => state.tax);
    const filteredItems = JSON.parse(sessionStorage.getItem("filteredItems"))
    let totalIncome = 0;
    filteredItems?.forEach((element) => {
        totalIncome += Number(element.totalIncome);
    });

    let totalExpenses = 0;
    filteredItems?.forEach((element) => {
        element?.expenses?.forEach((expense) => {
            totalExpenses += Number(expense.value);
        });
    });

    const netEarning = totalIncome - totalExpenses

    return (
        <div>
            <Header
                setShowLoginDialog={setShowLoginDialog}
                setShowMyProfileDialog={setShowMyProfileDialog}
            />
            <Body />
            {/* <PDFViewer style={{ width: "100%", height: "500px" }}>
                <MyPDF hmrc={hmrc} filteredItems={filteredItems} netEarning={netEarning.toString()} reportingPeriod={reportingPeriod} />
            </PDFViewer> */}
        </div>
    )
}

export default Pricing