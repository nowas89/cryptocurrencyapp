import React,{Component} from 'react';
import {connect} from 'react-redux'

import classes from "./OpenCard.css"

class OpenCard extends Component {
    render () {
        return (
            
            <div className={classes.OpenCard}>
            <h1>Cryptocurrency Monitor details</h1>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {

    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {

    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(OpenCard);