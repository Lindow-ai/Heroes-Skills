import Header from '../components/Header';
import { Typography, Grid, IconButton } from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const Profile = () => {
    return (
        <>
            <Header />
            <Grid item xs='3'>

            </Grid>
            <Grid item xs='6'>
                <Typography gutterBottom align="center" style={{ width: "100%", fontFamily: "BadaBoom BB" }} variant="h4" >
                    Guerrier du dimanche
                </Typography>

                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "100vh" }}
                >
                    <IconButton style={{ top: "75px" }} >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "75px", left: "460px" }} >
                        <ArrowForwardIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "200px", right: "95px" }} >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "200px", left: "365px" }} >
                        <ArrowForwardIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "315px", right: "190px" }} >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "315px", left: "270px" }} >
                        <ArrowForwardIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "425px", right: "285px" }} >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "425px", left: "175px" }} >
                        <ArrowForwardIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "525px", right: "380px" }} >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton style={{ top: "525px", left: "80px" }} >
                        <ArrowForwardIosIcon />
                    </IconButton>
                    <img alt="super-hero" src="superhero4.png" />
                </Grid>
            </Grid>
            <Grid item xs='3'>

            </Grid>
        </>
    )
}

export default Profile