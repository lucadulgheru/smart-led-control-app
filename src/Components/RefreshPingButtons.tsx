import { Alert, Box, Button, Snackbar, Stack } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useState } from 'react';
import RESTClient from '../Services/restClient';

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

    async function handleRefresh(){
        console.log(await restClient.test());
    }

    function handleClose() {
        setOpen(false);
    }

    // TODO ADD AXIOS CALL HERE
    // IF RESPONSE = 200 -> then show green snack with up and running msg
    // OTHERWISE -> show red snack with failure msg
    function handleOpen() {
        setIsSevere(true);
        setMessage("ESP32 board is up and running");
        setOpen(true);
    }

    return (
        <Box>
            <Stack
                direction="row"
                sx={style.container}
                justifyContent="space-between"
            >
                <Button variant="contained" startIcon={<RefreshIcon />} color="success" onClick={handleRefresh}>Refresh LED List</Button>
                <Button variant="contained" startIcon={<LightbulbIcon />} color="error" onClick={handleOpen}>Ping ESP32 board</Button>

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