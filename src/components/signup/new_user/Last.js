import { useDispatch } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';

const Last = (props) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className="contentRow">
                <Grid columns="equal">
                    <Grid.Column>
                        <img src="https://d2zw5visq7ucgf.cloudfront.net/images/signup.png" className="figure-img img-fluid rounded" width="100%" alt="charitableimage" />
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Create your Impact Account.</h3>
                        <p>By clicking 'Create your Impact Account', you acknowledge that you have read the Privacy Policy, and agree to the Terms & Conditions and Account Agreement.</p>
                        <Grid columns="equal">
                            <Grid.Column>
                                <Button className="mainButton1" type="submit" onClick={() => dispatch({ type: "decrement" })}>Back</Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button className="mainButton" type="submit" >Create your Impact Account</Button>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        </>
    )
}

export default Last;