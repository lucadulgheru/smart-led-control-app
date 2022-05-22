import { Grid } from "@mui/material";
import { ReactNode } from "react";


const style = {
    container: {
        padding: 5
    }
}

const ReportsContainer = ({ children }: { children: ReactNode[] }) => {
    return (
        <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={style.container}
        >
            {
                children.map((value: ReactNode) => {
                    return (
                        <Grid item >
                            {value}
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};

export default ReportsContainer;