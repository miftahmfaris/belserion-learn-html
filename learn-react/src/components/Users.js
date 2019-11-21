import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around"
                }}
            >
                {this.state.data.length > 0 &&
                    this.state.data.map(
                        ({ email, name, phone, website, id }, key) => {
                            return (
                                <Card
                                    style={{
                                        maxWidth: "300px",
                                        margin: "10px"
                                    }}
                                    key={key}
                                >
                                    <CardContent>
                                        <Typography color="textSecondary">
                                            {email}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            component="p"
                                        >
                                            Hello my name is {name}
                                        </Typography>
                                        <br />
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            Phone: {phone}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            Website: {website}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">
                                            <Link to={`/users/${id}`}>
                                                Learn More
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            );
                        }
                    )}
            </div>
        );
    }
}
