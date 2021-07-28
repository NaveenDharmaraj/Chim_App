import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import Header from './Header';

const Login = () => {
    return (
        <>
            <Header />
            <div className="contentRow">
                <Grid columns="equal">
                    <Grid.Column>
                        <img src="./images/img3.jpeg" className="figure-img img-fluid rounded" width="100%" alt="charitableimage" />
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Log in to Charitable Impact</h2>
                        <Form>
                            <Form.Field>
                                <label for="floatingInput">Email address</label>
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            </Form.Field>
                            <Form.Field>
                                <label for="floatingPassword">Password</label>
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            </Form.Field>
                        </Form>
                        <p>Forgot your password?</p>
                        <Button primary>Login</Button>
                    </Grid.Column>
                </Grid>
            </div>
        </>
    )
}

export default Login;