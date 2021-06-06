import { TextField, Typography, Button, Box, Grid, IconButton } from "@material-ui/core"
import { useState, forwardRef } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    bow: {
        flexGrow: 1,
    },
    gird: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        backgroundImage: 'url(https://images6.alphacoders.com/416/416955.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.grey[50],
        backgroundSize: 'cover',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Register = () => {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [open, setOpen] = useState(false);
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleConfirm = event => {
        event.preventDefault()
        history.push('/Dashboard')
    }

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5}>
                <div className={classes.paper}>
                    <img alt="super-hero" src="strenght.png"></img>
                    <Typography component="h1">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="user"
                            label="User"
                            name="user"
                            autoComplete="user"
                            onChange={event => setUser(event.target.value)} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            onChange={event => setEmail(event.target.value)} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={event => setPassword(event.target.value)} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ background: "#ED1D24"}}
                            color="secondary"
                            className={classes.submit}
                            startIcon={<LockOpenIcon />}
                        >
                            GO NOW !
                        </Button>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title">{"Creation of the hero"}</DialogTitle>
                            <DialogContent>
                                <IconButton style={{top: "75px"}} >
                                            <ArrowBackIosIcon />
                                        </IconButton>
                                        <IconButton style={{top: "75px", left: "460px" }} >
                                            <ArrowForwardIosIcon/>
                                        </IconButton>
                                <IconButton style={{top: "200px", right: "95px"}} >
                                            <ArrowBackIosIcon />
                                </IconButton>
                                <IconButton style={{top: "200px", left: "365px" }} >
                                            <ArrowForwardIosIcon/>
                                        </IconButton>
                                <IconButton style={{top: "315px", right: "190px"}} >
                                            <ArrowBackIosIcon />
                                </IconButton>
                                <IconButton style={{top: "315px", left: "270px" }} >
                                            <ArrowForwardIosIcon/>
                                        </IconButton>
                                <IconButton style={{top: "425px", right: "285px"}} >
                                            <ArrowBackIosIcon />
                                </IconButton>
                                <IconButton style={{top: "425px", left: "175px" }} >
                                            <ArrowForwardIosIcon/>
                                        </IconButton>
                                <IconButton style={{top: "525px", right: "380px"}} >
                                            <ArrowBackIosIcon />
                                </IconButton>
                                <IconButton style={{top: "525px", left: "80px" }} >
                                            <ArrowForwardIosIcon/>
                                        </IconButton>
                                            <img alt="super-hero" src="superhero4.png" />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}   color="primary" >
                                    Disagree
          </Button>
                                <Button onClick={handleConfirm} color="primary">
                                    Agree
          </Button>
                            </DialogActions>
                        </Dialog>
                        <Box mt={3}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                Copyright © Heroes Skills {new Date().getFullYear()}
                            </Typography>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Register