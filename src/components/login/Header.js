import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import './Header.css'

const Header = () => {
    return (
        <div className="loginHeader">
            <Grid columns="equal">
                <Grid.Column width={10}>
                    <img src="./images/img1.jpeg" alt="charitable impact" width="150px" height="80px" />
                </Grid.Column>
                <Grid.Column>
                    <div className="span">
                        <span>Don't have an Account?</span>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="btn">
                        <Button inverted color="blue"><Link to="/" >signup</Link></Button>
                    </div>
                </Grid.Column>
            </Grid>
        </div >
    )
}

export default Header;