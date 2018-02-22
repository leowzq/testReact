import React from 'react';
import {Link} from 'react-router-dom';
import EventCenter from '../util/EventCenter';

class PgNameIndex extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
		};
	}

  componentDidMount() {
    
  }

  render() {
    return(
      <div style={{...styles.bigDiv}}>
        {this.props.match.params.name}
      </div>
    )
  }
}

var styles = {
  bigDiv: {
    display: 'flex',
    height: window.innerHeight,
    width: window.innerWidth,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50
  }
}

export default PgNameIndex
