import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Icon, Button, Form , Container} from 'semantic-ui-react';
import './UserName.css';

const UserName = (props) => {

    const dispatch = useDispatch();


    const [errMsg, setErrMsg] = useState({
        firstNameErr: "",
        lastNameErr: ""
    });

    const formValidate = () => {
        if (props.userDetails.firstName.length < 1) {
            setErrMsg({
                ...errMsg,
                firstNameErr: "Pls enter your first name"
            })
        }
        else if (props.userDetails.firstName.length < 2) {
            setErrMsg({
                ...errMsg,
                firstNameErr: "First Name should have minimum 2 characters"
            })
        }
        else if (props.userDetails.firstName.length >= 30) {
            setErrMsg({
                ...errMsg,
                firstNameErr: "First Name cannot have more than 30 characters"
            })
        }
        else {
            setErrMsg({
                ...errMsg,
                firstNameErr: ""
            })
        }
    }

    const formValidate1 = () => {
        if (props.userDetails.lastName.length < 1) {
            setErrMsg({
                ...errMsg,
                lastNameErr: "pls enter your last name"
            })
        }
        else if (props.userDetails.lastName.length >= 30) {
            setErrMsg({
                ...errMsg,
                lastNameErr: "Last Name cannot have more than 30 characters"
            })
        }
        else {
            setErrMsg({
                ...errMsg,
                lastNameErr: ""
            })
        }
    }


    const onSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: "increment" });
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
                                <div className="col" >
                                    <h4>Create the change you want to see in the world</h4>
                                    <p>Tell us about yourself.</p>
                                    <div className="col1">
                                    <Form>
                                        <Form.Field>
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" value={props.userDetails.firstName} name="firstName" onBlur={formValidate} placeholder="Your first name" onChange={props.changeHandler} />
                                            <p className="text-danger">{errMsg.firstNameErr === "" ? null : <Icon name="warning circle"></Icon>}{errMsg.firstNameErr}</p>
                                        </Form.Field>
                                        <Form.Field>
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" value={props.userDetails.lastName} name="lastName" onBlur={formValidate1} placeholder="Your last name" onChange={props.changeHandler} />
                                            <p className="text-danger">{errMsg.lastNameErr === "" ? null : <Icon name="warning circle"></Icon>}{errMsg.lastNameErr}</p>
                                        </Form.Field>
                                        <div className="col2">
                                        <Button className="mainButton" type="submit" disabled={props.userDetails.firstName.length < 2 || !props.userDetails.lastName} onClick={onSubmit} primary>Continue</Button>
                                        </div>
                                    </Form>
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


export default UserName;