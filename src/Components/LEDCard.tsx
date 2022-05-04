import { Card, CardActions, CardContent, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { CirclePicker } from 'react-color';

const style = {
    container: {
        height: 300,
        width: 400
    },
    content: {
        padding: 5
    }
}

const LEDCard = ({ledID}:{ledID: number}) => {

    const [checked, setChecked] = useState(true);

    return (
        <Card
            elevation={10}
            sx={style.container}>
            <CardContent sx={style.content}>
                <Typography variant="h5">
                    LED {ledID}
                </Typography>
                <CirclePicker />
            </CardContent>
            <CardActions>
                <Switch
                    checked={checked}
                    onChange={() => {setChecked(!checked);}}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </CardActions>
        </Card>
    );
}

export default LEDCard;