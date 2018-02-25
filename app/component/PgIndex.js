import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Name from './PgName';
import EventCenter from '../util/EventCenter';
import funs from '../util/funs';
var dispatch

class PgIndex extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      name: '博客小记'
		};
	}

  leftAnimation() {
    let objs = [
      {
        aName: 'leftDivAnimation',
        eName: 'leftDiv'
      },
      {
        aName: 'leftMineAnimation',
        eName: 'leftIntroduce',
        position: 'absolute'
      }
    ]
    funs.giveAnimation(objs);
  }

  leftDivAnimationCallback() {
    return new Promise((re, err) => {
      var e = document.getElementById("leftDiv");
      e.addEventListener("animationend", () => {
        re();
      });
    });
  }

  changeName() {
    var action = {
      type: 'name',
      text: 'test'
    }
    dispatch(action);
  }

  componentDidMount() {
    dispatch = this.props.dispatch;
    this.leftAnimation();
    let introduceAnimation = document.getElementById("leftIntroduce");
    let inStyle = introduceAnimation.style;
    inStyle.animationPlayState = 'paused';
    this.leftDivAnimationCallback().then(function() {
      EventCenter.emit('callRightAnimation', 'running');
      inStyle.animationPlayState = 'running';
    });
  }

  componentWillUnmount() {
  }

  render() {
    return(
      <div style={{...styles.bigDiv}}>
        <div id="leftDiv" style={{...styles.leftDiv}}></div>
        <div id="leftIntroduce" style={{...styles.leftIntroduce}}>
          <div style={{...styles.name}}>Leo</div>
          <div id="choosenDiv" style={{...styles.choosenDiv}}>
            <div className="mineDiv" onClick={this.changeName.bind(this)}>
              {this.props.name == 'default' ? this.state.name : this.props.name}
            </div>
            <div className="mineDiv">个人简历</div>
          </div>
        </div>
        <Name divWidth='65%'/>
      </div>
    )
  }
}

var styles = {
  bigDiv: {
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    backgroundColor: 'white'
  },
  leftDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: window.innerHeight,
    width: '35%',
    backgroundColor: '#32353e'
  },
  name: {
    display: 'flex',
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white'
  },
  choosenDiv: {
    display: 'flex',
    marginTop: 5,
    fontSize: 20,
    // color: '#f1bf5e', 橙色
    color: '#67c3f5'
  },
  leftIntroduce: {
    display: 'flex',
    height: '100%',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const mapStateToProps = (state) => ({
  name: state.name
})

export default connect(mapStateToProps)(PgIndex)
