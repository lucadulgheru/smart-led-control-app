import Box from "@mui/material/Box";
import { CirclePicker, ColorResult } from "react-color";

const style = {
    container: {
        paddingTop: 2,
        display: "flex",
        justifyContent: "center"
    }
};

const LEDColorPicker = () => {

    let color: ColorResult | null = null;

    function setColor(selectedColor: ColorResult){
        color = selectedColor;
        console.log(color);
    }

    return(
        <Box sx={style.container}>
            <CirclePicker 
                onChange={(color) => {setColor(color);}}
            />
        </Box>
    );
}

export default LEDColorPicker;