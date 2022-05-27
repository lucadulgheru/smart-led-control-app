import { Card, CardContent, Stack, Typography } from "@mui/material";
import { LEDResponse } from "../Utils/responseTypes";
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

const LEDCard = ({ id, status, color }: LEDResponse) => {
    return (
        <Card
            elevation={10}
            sx={style.container}>
            <CardContent sx={style.content}>
                <Stack spacing={2}>
                    <Typography variant="h5">
                        LED {id}
                    </Typography>
                    <LEDColorPicker id={id}/>
                    <LEDSwitches status={status} id={id} />
                </Stack>
            </CardContent>
        </Card>
    );
}

export default LEDCard;