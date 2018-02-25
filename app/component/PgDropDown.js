import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import EventCenter from '../util/EventCenter';
import globals from '../util/funs';
var dispatch;

class PgDropDown extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      moveY: 0
		};
	}

  mouseDown() {
    console.log("AAAAA")
  }

  mouseMove() {
    this.setState({
      moveY: this.state.moveY + 2
    })
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return(
      <div style={{...styles.bigDiv}} onMouseMove={this.mouseMove.bind(this)}>
      </div>
    )
  }
}

var styles = {
  bigDiv: {
    WebkitTransform: 'translateY(100)',
    backgroundColor: 'white'
  },
}

export default PgDropDown
