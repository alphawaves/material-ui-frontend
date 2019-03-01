import { withStyles } from "@material-ui/core";
import React from 'react'

const styles = theme => {

}

class Footer extends React.Component {
    render() {
        return (
            <footer>
  <div class="copyright">
    <p>&copy 2013 - Organisation</p>
  </div>
  <div class="social">
    <a href="#" class="support">Contact Us</a>
    <a href="#" class="face">f</a>
    <a href="#" class="tweet">t</a>
    <a href="#" class="linked">in</a>
  </div>
</footer>
        )
    }
}

export default withStyles(styles)(Footer)