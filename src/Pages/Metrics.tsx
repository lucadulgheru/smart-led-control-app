import Box from "@mui/material/Box";
import Chart from "../Components/Chart";

// TODO replace this with axios call that will gather data?
const data = [{ date: new Date().toDateString(), triggers: 5 },
{ date: new Date().toDateString(), triggers: 25 },
{ date: new Date().toDateString(), triggers: 5 },
{ date: new Date().toDateString(), triggers: 5 }];

const Metrics = () => {
    return (
        <Box>
            <Chart title={"Motion Sensor Triggers"} data={data} />
            <Chart title={"Switch Triggers"} data={data} />
        </Box>
    );
};

export default Metrics;