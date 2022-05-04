import { Button, Box, Stack } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const style = {
    container: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    }
};

const RefreshPingButtons = () => {
    return (
        <Stack
            direction="row"
            sx={style.container}
            justifyContent="space-between"
        >
            <Button variant="contained" startIcon={<RefreshIcon />} color="success">Refresh LED List</Button>
            <Button variant="contained" startIcon={<LightbulbIcon />} color="error">Ping ESP32 board</Button>
        </Stack>
    );
}

export default RefreshPingButtons;