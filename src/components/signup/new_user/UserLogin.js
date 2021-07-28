import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Form, Button, Icon, Input, Container } from "semantic-ui-react";

const UserLogin = (props) => {
    const dispatch = useDispatch();

    const sampleEmail = ["naveen@gmail.com", "dnaveen@gmail.com"];

    const [errMsg, setErrMsg] = useState({
        mailErr: "",
        passwordErr: ""
    });
    const [isShow, setShow] = useState(0);

    const click = () => {
        const reg = /@gmail.com$/gi;

        if (props.userDetails.email.length < 1) {
            setErrMsg({
                ...errMsg,
                mailErr: "Pls enter your gmail"
            })
            props.checkMail(0);
        }
        else {
            if (!reg.test(props.userDetails.email)) {
                setErrMsg({
                    ...errMsg,
                    mailErr: "Pls enter valid gmail"
                })
                props.checkMail(0);
            }
            else {
                if (sampleEmail.includes(props.userDetails.email)) {
                    setErrMsg({
                        ...errMsg,
                        mailErr: "Look this mail is already exist"
                    })
                    props.checkMail(0);
                }
                else {
                    setErrMsg({
                        ...errMsg,
                        mailErr: ""
                    })
                    props.checkMail(1);

                }

            }
        }
    }
    const click1 = () => {
        const regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})")

        if (props.userDetails.password.length < 1) {
            setErrMsg({
                ...errMsg,
                passwordErr: "Pls enter password"
            })
            props.checkPass(0);
        }
        else if (props.userDetails.password.length >= 1) {
            if (!regPass.test(props.userDetails.password)) {
                setErrMsg({
                    ...errMsg,
                    passwordErr: "It is too weak"
                })
                props.checkPass(0);
            }
            else {
                setErrMsg({
                    ...errMsg,
                    passwordErr: ""
                })
                props.checkPass(1);
            }
        }
    }
    const regex1 = /[a-z]/g;
    const case1 = regex1.test(props.userDetails.password);
    const s1 = {
        color: case1 ? "blue" : "black"
    }
    const regex2 = /[A-Z]/g;
    const case2 = regex2.test(props.userDetails.password);
    const s2 = {
        color: case2 ? "blue" : "black"
    }
    const regex3 = /[!@#\$%\^&\*]/g;
    const case3 = regex3.test(props.userDetails.password);
    const s3 = {
        color: case3 ? "blue" : "black"
    }
    const case4 = (props.userDetails.password.length >= 8)
    const s = {
        color: case4 ? "blue" : "black"
    }
    const showpassword = () => {
        if (isShow) {
            setShow(0);
        }
        else {
            setShow(1);
        }
    }

    return (
        <>
            <Container>
                <div className="contentRow">
                    <Grid columns="equal">
                        <Grid.Row>
                            <Grid.Column>
                                <div className="contentImg">
                                    <img src="https://d2zw5visq7ucgf.cloudfront.net/images/signup.png" width="100%" alt="charitableimage" height="380px" />
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="col">
                                    <h4>Create your Impact Account</h4>
                                    <Form>
                                        <Form.Field>
                                            <label className="form-label">E-mail</label>
                                            <Input type="email" className="form-control" name='email' onBlur={click} value={props.userDetails.email} placeholder="Your e-mail" onChange={props.changeHandler} />
                                            <p className="text-danger">{errMsg.mailErr === "" ? null : <Icon name="warning circle"></Icon>}{errMsg.mailErr}</p>
                                        </Form.Field>
                                        <Form.Field>
                                            <label className="form-label">password</label>
                                            <Input type={isShow ? "text" : "password"} className="form-control" name='password' onBlur={click1} value={props.userDetails.password} placeholder="your password" onChange={props.changeHandler} icon={(<Icon name={isShow ? "eye" : "eye slash"} onClick={showpassword} link />)} ></Input>
                                            <p className="text-danger">{errMsg.passwordErr === "" ? null : <Icon name="warning circle"></Icon>}{errMsg.passwordErr}</p>
                                        </Form.Field>
                                    </Form>
                                    <div className="col3" >
                                        <p><span style={s}>{props.userDetails.password.length}/8 characters,</span><br />
                                        <span style={s1}>lowercase letters (a-z),</span><br />
                                        <span style={s2}>uppercase letters (A-Z),</span><br />
                                        <span style={s3}>special characters (e.g. !@#$%^&*)</span></p>
                                    </div>
                                    <div className="col2">
                                        <Grid columns="equal">
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Button className="mainButton1" type="submit" onClick={() => dispatch({ type: "decrement" })}>Back</Button>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Button className="mainButton" type="submit" disabled={!props.valid.valid1 || !props.valid.valid2} onClick={() => dispatch({ type: "increment" })}>Continue</Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default UserLogin;