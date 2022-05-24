import { Alert, Box, Button, Snackbar, Stack } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useState } from 'react';
import RESTClient from '../Services/restClient';
import { EnumerateResponse, PingResponse } from '../Utils/responseTypes';

const style = {
    container: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    }
};

const RefreshPingButtons = () => {

    const restClient: RESTClient = RESTClient.getInstance();
    const [open, setOpen] = useState(false);
    const [isSevere, setIsSevere] = useState(false);
    const [message, setMessage] = useState("");

    async function handleRefresh() {
        try {
            const response: EnumerateResponse = await restClient.getLEDs();
            console.log(`Enumerated ${response.led_count} LEDs`);
            console.log(`LEDS: ${response.leds[0].status}`);
        } catch (e) {
            console.log("Could not enumerate LEDs");
        }
    }

    async function handlePing() {
        try {
            const response: PingResponse = await restClient.pingBoard();
            setIsSevere(false);
            setMessage(`ESP32 responded with: ${response.message}`);

        } catch (e) {
            setIsSevere(true);
            setMessage("ESP32 board could not be reached");
        }
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <Box>
            <Stack
                direction="row"
                sx={style.container}
                justifyContent="space-between"
            >
                <Button variant="contained" startIcon={<RefreshIcon />} color="success" onClick={handleRefresh}>Refresh LED List</Button>
                <Button variant="contained" startIcon={<LightbulbIcon />} color="error" onClick={handlePing}>Ping ESP32 board</Button>

            </Stack>
            <Box>
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={open}
                    onClose={handleClose}
                    autoHideDuration={3000}
                >
                    <Alert severity={isSevere ? "error" : "success"} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    );
}

export default RefreshPingButtons;