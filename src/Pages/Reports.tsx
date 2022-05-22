import Box from "@mui/material/Box";
import ReportCard from "../Components/ReportCard";
import ReportsContainer from "../Components/ReportsContainer";

const Reports = () => {
    return (
        <Box>
            <ReportsContainer>
                <ReportCard eventType={"Motion sensor trigger"} date={Date()} userAddress={"192.168.0.100"}/>
                <ReportCard eventType={"Switch trigger"} date={Date()} userAddress={"192.168.0.100"}/>
            </ReportsContainer>
        </Box>
    );
};

export default Reports;