import { Grid } from "@mui/material";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode[] }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                children.map((value: ReactNode, index: number) => {
                    return (
                        <Grid item xs={6}>
                            ${value}
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}

export default Layout;