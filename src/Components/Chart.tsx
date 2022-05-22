import { Box, Typography } from "@mui/material";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const style = {
    container: {
        padding: 5
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};

const Chart = ({ title, data }: { title: string, data: any[] }) => {
    return (
        <Box sx={style.container}>
            <Typography>{title}</Typography>
            <Box sx={style.content}>
                <LineChart width={1200} height={400} data={data} >
                    <Line type="monotone" dataKey="triggers" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" />
                    <YAxis />
                </LineChart>
            </Box>
        </Box>
    );
};

export default Chart;