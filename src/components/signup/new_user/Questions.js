import { useDispatch } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import './Questions.css'

const Questions = (props) => {
    const dispatch = useDispatch();
    const clickHandler = () => { dispatch({ type: "decrement" }) };
    const submitHandler = () => { dispatch({ type: "increment" }) };

    const selectHandler = (event) => {
        props.onClickButton(event)
        console.log(event.target.value)
    }

    return (
        <>
            <div className="contentRow" >
                <Grid columns="equal">
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <img src="https://d2zw5visq7ucgf.cloudfront.net/images/causes.png" className="figure-img img-fluid rounded" width="100%" alt="charitableimage" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3 className="col px-3">A couple of quick questions before heading to your account…</h3>
                            <br />
                            <h4>What causes are important to you?</h4>
                            <p>Select causes to see charities and Giving Groups that might interest you. You’ll see them in the<strong>"discovered for you"</strong> section of your account.</p>
                            <h4>Select as many as you like:</h4>
                            <Grid columns="equal">
                                <Grid.Column width={4} >
                                    <button id="bt1" className={props.style.button1 ? "selected" : "unselected"} onClick={selectHandler} name="button1" value={props.style.button1}> Education</button>
                                </Grid.Column>
                                <Grid.Column width={4} >
                                    <button id="bt2" className={props.style.button2 ? "selected" : "unselected"} onClick={selectHandler} name="button2" value={props.style.button2}>Health</button>
                                </Grid.Column>
                                <Grid.Column width={4} >
                                    <button id="bt3" className={props.style.button3 ? "selected" : "unselected"} onClick={selectHandler} name="button3" value={props.style.button3}>Sports</button>
                                </Grid.Column>
                                <Grid.Column width={4} >
                                    <button id="bt4" className={props.style.button4 ? "selected" : "unselected"} onClick={selectHandler} name="button4" value={props.style.button4}>Club</button>
                                </Grid.Column>
                                <Grid.Column width={4} >
                                    <button id="bt5" className={props.style.button5 ? "selected" : "unselected"} onClick={selectHandler} name="button5" value={props.style.button5}>Others</button>
                                </Grid.Column>
                            </Grid>
                            <p>Only you can see causes you care about unless you decide to share them on your personal profile. We don't share your selected causes with charities or anyone else.</p>
                            <Grid columns="equal">
                                <Grid.Column>
                                    <Button className="mainButton1" onClick={clickHandler}>back</Button>
                                </Grid.Column>
                                <Grid.Column>
                                    <Button className="mainButton" onClick={submitHandler}>Continue</Button>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    )

}

export default Questions;