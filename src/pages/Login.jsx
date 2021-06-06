import { TextField, Typography, Button, Box, Grid } from "@material-ui/core"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Key from '@material-ui/icons/VpnKey';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://i.imgur.com/s4eS1Zz.png)',
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

const Login = () => {
    const [, setEmail] = useState("")
    const [, setPassword] = useState("")
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        history.push('/Dashboard')
    }

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5}>
                <div className={classes.paper}>
                    <img alt="super-hero" src="superhero4.png"></img>
                    <Typography component="h1">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                            startIcon={<Key />}
                        >
                            GO GO GO !
                        </Button>
                        <Typography component="h1" style={{ textAlign: "center" }} >
                            OR
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ background: "#ED1D24"}}
                            color="secondary"
                            className={classes.submit}
                            startIcon={<LockIcon />}
                            onClick={() => history.push('/Register')}
                        >
                            Sign UP
                        </Button>
                        <Box mt={5}>
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

export default Login