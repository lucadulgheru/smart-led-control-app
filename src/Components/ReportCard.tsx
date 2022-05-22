import { Card, CardContent, Stack, Typography } from "@mui/material";
import { ReportType } from "../Utils/componentTypes";

const style = {
    card: {
        width: 1200
    }
}

const ReportCard = ({ eventType, userAddress, date }: ReportType) => {
    return (
        <Card
            sx={style.card}
            elevation={2}>
            <CardContent >
                <Stack spacing={2}>
                    <Typography>
                        Type of event: {eventType}
                    </Typography>
                    <Typography>
                        User IP address: {userAddress}
                    </Typography>
                    <Typography>
                        Action issued at: {date}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ReportCard;