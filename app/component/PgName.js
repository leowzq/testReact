import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import EventCenter from '../util/EventCenter';

class PgName extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      name: 'boke'
		};
	}

  canvasIndexPic() {
    var img = new Image();
    img.src = "./app/img/index.jpg";
    let c = document.getElementById("index").getContext("2d");
    c.beginPath();
    c.arc(150, 75, 60, 0, 2*Math.PI);
    c.stroke();
    img.onload=function() {
      var ctx = document.createElement("canvas")
      var context = ctx.getContext("2d");
      var imgs = context.drawImage(img, 90,10, 120, 130)
      var indexImg = c.createPattern(ctx, 'no-repeat');
      c.fillStyle = indexImg;
      c.fill();
    }
  }

  callAnimation(re) {
    let objs = [
      {
        eName: 'indexPic',
        playState: re ? re : 'paused'
      },
      {
        eName: 'introduceDiv',
        playState: re ? re : 'paused'
      }
    ]
    changeAnimationPlayState(objs);
  }

  componentDidMount() {
    console.log("NAME", this.props)
    this.callAnimation();
    EventCenter.on('callRightAnimation', this.callAnimation.bind(this));
  }

  render() {
    return(
      <div style={{...styles.picDiv, width: this.props.divWidth ? this.props.divWidth : '100%'}}>
        <Link to="/leo">
          <img id="indexPic" src="./app/img/index.jpg" style={{...styles.indexPic}}/>
          {/* <canvas id="index" style={{...styles.indexPic}}></canvas> */}
        </Link>
        <div id="introduceDiv" style={{...styles.introduceDiv}}>
          <div style={{fontSize: 22, marginTop: 5, fontWeight: "bold"}}>王子奇</div>
          <div style={{fontSize: 16, marginTop: 5}}>一个正在努力的程序猿</div>
        </div>
      </div>
    )
  }
}

var styles = {
  picDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  indexPic: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    border: '2px solid #2b2b2b',
    padding: 5
  },
  introduceDiv: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

export default connect()(PgName)
