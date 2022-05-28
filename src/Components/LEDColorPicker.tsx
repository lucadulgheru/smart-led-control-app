import Box from "@mui/material/Box";
import { CirclePicker } from "react-color";
import RESTClient from "../Services/restClient";

const style = {
    container: {
        paddingTop: 2,
        display: "flex",
        justifyContent: "center"
    }
};

const LEDColorPicker = ({ id }: { id: number }) => {

    const restClient: RESTClient = RESTClient.getInstance();

    async function changeColor(colorCode: string) {
        await restClient.changeColor(id, colorCode);
    }

    return (
        <Box sx={style.container}>
            <CirclePicker
                onChange={(color) => { changeColor(color.hex.replace("#", "")); }}
            />
        </Box>
    );
}

export default LEDColorPicker;