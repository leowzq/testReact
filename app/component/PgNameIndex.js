import React from 'react';
import {Link} from 'react-router-dom';
import EventCenter from '../util/EventCenter';
import funs from '../util/funs';
let canMove = false

class PgNameIndex extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      y: 0,
      yValue: 0,
		};
	}

  getMouseMoveY(e){
    //当前页面scroll高度
    const st = document.documentElement.scrollTop || document.body.scrollTop
    //当前鼠标所在Y轴位置
    const Y = st + e.clientY
    //允许触发拖动事件
    if(canMove) {
      this.setState({
        yValue: Y > this.state.yValue ? Y : 0,
        y: Y > this.state.yValue ? this.state.y + 3 : 0,
      }, () => {
        console.log("getSetState", this.state.yValue, Y, this.state.y)
      })
    } else {
      return
    }
  }

  mouseUpFun() {
    canMove = false
    this.setState({
      y: 0
    })
  }

  mouseDownFun() {
    canMove = true
  }

  componentDidMount() {

  }

  render() {
    return(
      <div style={{backgroundColor: 'black', overflow: 'hidden'}}>
        <div style={{...styles.bigDiv, WebkitTransform: `translateY(${this.state.y}px)`}}
          onMouseMove={this.getMouseMoveY.bind(this)}
          onMouseDown={this.mouseDownFun.bind(this)}
          onMouseUp={this.mouseUpFun.bind(this)}
          >
            {/* <PgDropDown /> */}
            {this.props.match.params.name}
          </div>
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
    backgroundColor: 'white',
    fontSize: 50
  }
}

export default PgNameIndex
