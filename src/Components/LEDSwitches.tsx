import { Stack, Switch, IconButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";

const style = {
    container: {
        paddingTop: 3,
        paddingLeft: 7,
        paddingRight: 7
    }
};

const LEDSwitches = () => {

    const [checked, setChecked] = useState(true);

    function handleSwitchToggle(checkedStatus: boolean){
        setChecked(checkedStatus);
        // TODO send axios request to ESP32
        console.log(checkedStatus);
    }

    return (
        <Stack
            direction="row"
            sx={style.container}
            justifyContent="space-between"
        >
            <Switch
                checked={checked}
                onChange={() => { handleSwitchToggle(!checked); }}
            />
            <IconButton color="success" component="span" >
                <CheckIcon />
            </IconButton>
        </Stack>
    );
}

export default LEDSwitches;