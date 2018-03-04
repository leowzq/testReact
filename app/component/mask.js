import React from 'react';
import {Link} from 'react-router-dom';
import EventCenter from '../util/EventCenter';
import funs from '../util/funs';

class mask extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
		};
	}

  componentDidMount() {
  }

  render() {
    return(
      <div style={{...styles.bigDiv, opacity: this.props.opacity}} />
    )
  }
}

var styles = {
  bigDiv: {
    display: 'flex',
    height: window.innerHeight,
    width: window.innerWidth,
    position: 'absolute',
    zIndex: 99,
    backgroundColor: 'black'
  }
}

export default mask
