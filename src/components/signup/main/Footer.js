import React, { Fragment } from 'react';
import { Container, Grid, Button ,Input } from 'semantic-ui-react';
import './Footer.css'

const Footer = () => {
  return (
    <Fragment>
      <div className="footerRow">
        <Container>
          <div className="footerPart">
            <Grid columns="equal">
              <Grid.Column width={10}>
                <div>
                  <h3 className="bestNews">Get our best news, stories, and tips for making an impact</h3>
                  <h3 className="subscribe">Subscribe to the newsletter</h3>
                </div>
              </Grid.Column>
              <Grid.Column width={5}>
                  <Input className="inputBox" placeholder="Email Address" />
              </Grid.Column>
              <Grid.Column>
                <Button primary className="subsribeButton" content="Subscribe" />
              </Grid.Column>
            </Grid>
          </div>
          <hr  />
          <div className="myFooter">
            <Grid columns="equal">
              <Grid.Row>
                <Grid.Column>
                  <img src="data:image/png;base64,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" alt="charitable impact" width="75%" height="25%" />
                  <p>Charitable Impact
                    #1250 - 1500 W Georgia St
                    Vancouver, BC V6G 2Z6 Canada</p>
                </Grid.Column>
                <Grid.Column>
                  <h5>About</h5>
                  <ul className="linkName">
                    <li><a href="#">who we are</a></li>
                    <li><a href="#">charitable impact foundation</a></li>
                    <li><a href="#">Fees</a></li>
                    <li><a href="#">careers</a></li>
                    <li><a href="#">press</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </Grid.Column>
                <Grid.Column>
                  <h5>Support</h5>
                  <ul className="linkName">
                    <li><a href="#">Help centre</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Aggrement</a></li>
                  </ul>
                </Grid.Column>
                <Grid.Column>
                  <h5>Solution</h5>
                  <ul className="linkName">
                    <li><a href="#">For charity</a></li>
                    <li><a href="#">For Advisors</a></li>
                  </ul>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <hr />
            <Grid>
              <Grid.Row>
                <p>© Copyright 2020 CHIMP Technology Inc. - All Rights Reserved.</p>
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </div>
    </Fragment>
  )
}

export default Footer;

