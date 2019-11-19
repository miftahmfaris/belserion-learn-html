import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import { validationForm } from "../validate";

function SignUp() {
    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validate={validationForm}
                onSubmit={(values, { setSubmitting }) => {
                    localStorage.setItem("user", JSON.stringify(values));
                    this.props.history.push("/signin");
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontStyle: "italic"
                                    }}
                                >
                                    <ErrorMessage name="firstName" />
                                </p>
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontStyle: "italic"
                                    }}
                                >
                                    <ErrorMessage name="lastName" />
                                </p>
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontStyle: "italic"
                                    }}
                                >
                                    <ErrorMessage name="email" />
                                </p>
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontStyle: "italic"
                                    }}
                                >
                                    <ErrorMessage name="password" />
                                </p>
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Register
                            </button>
                        </fieldset>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default withRouter(SignUp);
