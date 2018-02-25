const NOW = new Date().getTime();

let giveAnimation = (objs) => {
  objs.forEach((item, index) => {
    console.log("giveAnimation", item.aName, "start!")
    let element
    element = document.getElementById(item.eName);
    if(!element) throw 'Error ElementName ' + item.eName;
    if(!item.aName && !item.animation) {
      console.error('Error Animation:', item);
      throw 'Error Animation';
    }
    let eStyle = element.style;
    eStyle.position = item.position ? item.position : 'relative';
    if(item.animation) {
      eStyle.animation = item.animation;
    }
    eStyle.animationName = item.aName;
    eStyle.animationDuration = item.duration ? item.duration : '1s';
    eStyle.animationTimingFunction = item.timing ? item.timing : 'linear';
    eStyle.animationDelay = item.delay ? item.delay : '0s';
    eStyle.animationIterationCount = item.aCount ? item.aCount : 1;
    eStyle.animationPlayState = item.playState ? item.playState : 'running';
    eStyle.animationDirection = item.direction ? item.direction : 'normal';
  })
};

let changeAnimationPlayState = (objs) => {
  let items
  let indexs
  objs.forEach((item, index) => {
    items = item
    indexs = index
    let element
      //默认选择ID
    element = document.getElementById(item.eName);
    if(!element) throw 'Error ElementName ' + item.eName;
    let eStyle = element.style;
    eStyle.animationPlayState = item.playState ? item.playState : 'running';
  })
};

let mouseDownFun = (e) => {
  canMove = true
}

let getMouseMoveY = (e) => {
  //当前页面scroll高度
  const st = document.documentElement.scrollTop || document.body.scrollTop
  //当前页面scroll高度 + 当前页面Y轴所在位置
  const Y = st + e.clientY
  //允许触发拖动事件
  if(canMove) {
    console.log("AAAA", Y)
  } else {
    return ;
    console.log("EEEE", e)
  }
}

let mouseUpFun = () => {
  canMove = false
}

var funs = {
  giveAnimation: giveAnimation,
  changeAnimationPlayState: changeAnimationPlayState,
}

export default funs;
