import { Card, CardContent, Stack, Typography } from "@mui/material";
import LEDColorPicker from "./LEDColorPicker";
import LEDSwitches from "./LEDSwitches";

const style = {
    container: {
        height: 300,
        width: 400
    },
    content: {
        padding: 2
    }
}

const LEDCard = ({ ledID }: { ledID: number }) => {
    return (
        <Card
            elevation={10}
            sx={style.container}>
            <CardContent sx={style.content}>
                <Stack spacing={2}>
                    <Typography variant="h5">
                        LED {ledID}
                    </Typography>
                    <LEDColorPicker />
                    <LEDSwitches />
                </Stack>
            </CardContent>
        </Card>
    );
}

export default LEDCard;