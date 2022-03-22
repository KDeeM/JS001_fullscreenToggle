window.addEventListener( "load", init );

function init(){
  detectFullscreenToggle();
}

function detectFullscreenToggle(){
  let button = document.querySelector("#fullscreenToggle");

  if( button === undefined ){
    return false;
  }

  button.addEventListener( "click", toggleDisplayFullscreen );
  return;
}

function toggleDisplayFullscreen( event ){
  // get the element to fullscreen
  let display = document.querySelector( "#fullscreenDisplay" );
  if( display === undefined ){
    return false;
  }

  // check if the element is in fullscreen mode

  // if not in fullscreen make full screen
  if( !display.fullScreenElement ){
    display.requestFullscreen()
    .then(
      () => {
        return true;
      },
      () => {
        return false;
      }
    )
  }

  // if in fullscreen swap back to windowed mode
  if( document.exitFullscreen ){
    document.exitFullscreen()
    .then(
      () => {
        return true;
      },
      () => {
        return false;
      }
    )
  }
}