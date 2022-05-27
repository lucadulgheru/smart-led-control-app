import { Stack, Switch } from "@mui/material";
import { LEDStatus } from '../Utils/dataTypes';
import { useEffect, useState } from "react";
import RESTClient from "../Services/restClient";

const style = {
    container: {
        paddingTop: 3,
        paddingLeft: 7,
        paddingRight: 7
    }
};

const LEDSwitches = ({ status, id }: { status: LEDStatus, id: number }) => {

    const [checked, setChecked] = useState(false);
    const restClient: RESTClient = RESTClient.getInstance();

    useEffect(() => {
        setChecked(status.toString() === "ON" ? true : false);
    }, [status]);

    async function handleSwitchToggle(checkedStatus: boolean, ledId: number) {
        setChecked(checkedStatus);
        await restClient.toggleLED(ledId);
    }

    return (
        <Stack
            direction="row"
            sx={style.container}
            justifyContent="space-between"
        >
            <Switch
                checked={checked}
                onChange={() => { handleSwitchToggle(!checked, id); }}
            />
        </Stack>
    );
}

export default LEDSwitches;