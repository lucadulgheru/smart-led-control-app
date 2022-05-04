import { Grid } from "@mui/material";
import { ReactNode } from "react";

const style = {
    container: {
        padding: 10
    }
}

const Layout = ({ children }: { children: ReactNode[] }) => {
    return (
        <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
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
}

export default Layout;