const WebglScreenOrientation =
    {
      //竖屏
      Portrait: 0,
      //横屏
      Landscape: 1,
      //自动
      AutoRotation: 2,
    }

function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function SetOrientation(ScreenOrientation) {
  window.WebglOrientation = ScreenOrientation
  RotScreen()
}
function GetOrientation() {
  return window.WebglOrientation
}
function SetFullScreen(isFull) {
  try {
    if (isFull)
      launchFullscreen(window.document.body)
    else
      document.webkitCancelFullScreen()
  } catch (e) {

  }

}
function GetFullScreen() {
  return document.fullscreenElement == window.document.body
}
function GetOrientation() {
  return window.WebglOrientation
}
function RotScreen() {
  const frameRect = window.gameframe.getBoundingClientRect();
  console.log('RotScreen iframe width =', frameRect.width, 'height =', frameRect.height);
  if (window.WebglOrientation == WebglScreenOrientation.AutoRotation) {
    //window.gameframe.style.height = 'calc(100vh - 3px)';
    //window.gameframe.style.width = 'calc(100vw - 3px)';	

    window.gameframe.style.transform = "";
    window.gameframe.style.transformOrigin = ""
    // window.gameframe.style.height = '100vh';
    // window.gameframe.style.width = '100vw';
    window.gameframe.style.height = window.innerHeight + 'px';
    window.gameframe.style.width = window.innerWidth + 'px';
    console.log('RotScreen code =',1);
    return;
  }
  var orientation = window.orientation;
  //开始时调用
  if (orientation == 180 || orientation == 0 || orientation == -180 || orientation == 360) {
    if (window.WebglOrientation == WebglScreenOrientation.Landscape) {
      //注意竖屏时要把 iframe的宽设置为当前窗口的高度 高设置为当前窗口的宽度

      window.gameframe.style.transformOrigin = "top left"
      window.gameframe.style.transform = "rotate(90deg) translateY(-100vw)"
      // window.gameframe.style.height = '100vw';
      // window.gameframe.style.width = '100vh';
      window.gameframe.style.height = window.innerWidth + 'px';
      window.gameframe.style.width = window.innerHeight + 'px';

      //通过css样式旋转90度
      console.log('RotScreen code =',2);
    }
    else {
      // ── 恢复竖屏 ──
      window.gameframe.style.display = 'none';           // 先彻底藏起来

      // 清干净所有变换
      window.gameframe.style.transform      = 'none';
      window.gameframe.style.transformOrigin = '0 0';
      window.gameframe.style.translate      = 'none';
      window.gameframe.style.rotate         = 'none';
      window.gameframe.style.position       = '';
      window.gameframe.style.top            = '';
      window.gameframe.style.left           = '';

      window.gameframe.style.width  = window.innerWidth  + 'px';
      window.gameframe.style.height = window.innerHeight + 'px';

      window.gameframe.style.display = '';   // 最后再显示回来

      console.log('RotScreen code =',3);
    }
  } else {
    if (window.WebglOrientation == WebglScreenOrientation.Portrait) {
      // ── 恢复竖屏 ──
      window.gameframe.style.display = 'none';           // 先彻底藏起来

      // 清干净所有变换
      window.gameframe.style.transform      = 'none';
      window.gameframe.style.transformOrigin = '0 0';
      window.gameframe.style.translate      = 'none';
      window.gameframe.style.rotate         = 'none';
      window.gameframe.style.position       = '';
      window.gameframe.style.top            = '';
      window.gameframe.style.left           = '';

      window.gameframe.style.width  = window.innerWidth  + 'px';
      window.gameframe.style.height = window.innerHeight + 'px';

      window.gameframe.style.display = '';   // 最后再显示回来
      console.log('RotScreen code =',4);
    }
    else {
      // window.gameframe.style.height = '100vh';
      // window.gameframe.style.width = '100vw';
      window.gameframe.style.height = window.innerHeight + 'px';
      window.gameframe.style.width = window.innerWidth + 'px';
      window.gameframe.style.transform = "";
      window.gameframe.style.transformOrigin = ""
      console.log('RotScreen code =',5);
    }
  }
}
