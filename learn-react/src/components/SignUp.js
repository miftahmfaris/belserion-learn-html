import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import { validationForm } from "../validate";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import AnchorLink from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { axios } from "../helpers";

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function SignUp(props) {
    const classes = useStyles();
    const [image, setImage] = React.useState(null);
    const [type, setType] = React.useState(null);

    const handleImage = event => {
        setType(event.target.files[0]);
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validate={validationForm}
                    onSubmit={values => {
                        let formData = new FormData();

                        for (const key in values) {
                            if (values.hasOwnProperty(key)) {
                                formData.append(key, values[key]);
                                if (key === "image") {
                                    formData.append(key, values.image.file);
                                }
                            }
                        }

                        axios()
                            .post(`/user`, formData)
                            .then(response => {
                                if (response.status === 201) {
                                    props.history.push("/signin");
                                }
                            });
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting
                    }) => (
                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={handleSubmit}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={values.firstName}
                                    />
                                    <p
                                        style={{
                                            color: "red",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        <ErrorMessage name="firstName" />
                                    </p>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={values.lastName}
                                    />
                                    <p
                                        style={{
                                            color: "red",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        <ErrorMessage name="lastName" />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={values.email}
                                    />
                                    <p
                                        style={{
                                            color: "red",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        <ErrorMessage name="email" />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={values.password}
                                    />
                                    <p
                                        style={{
                                            color: "red",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        <ErrorMessage name="password" />
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <input
                                        accept="/*"
                                        id="contained-button-file"
                                        type="file"
                                        style={{ display: "none" }}
                                        onChange={event => {
                                            setFieldValue(
                                                "image",
                                                event.currentTarget.files[0]
                                            );
                                            handleImage(event);
                                        }}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                        >
                                            Upload
                                        </Button>
                                    </label>
                                </Grid>
                                <Grid item xs={6}>
                                    {image && !type.type.includes("image") ? (
                                        <video width="100%" controls>
                                            <source
                                                src={image}
                                                type={image.type}
                                            />
                                            Your browser does not support HTML5
                                            video.
                                        </video>
                                    ) : (
                                        <img
                                            width={image && "100%"}
                                            src={image}
                                            alt=""
                                            id="preview-image"
                                        />
                                    )}
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <AnchorLink href="" variant="body2">
                                        Already have an account?
                                    </AnchorLink>
                                    <Link to="/signin">Sign in</Link>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
        </Container>
    );
}

export default withRouter(SignUp);
