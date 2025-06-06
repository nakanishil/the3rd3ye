$(function () {
    const $overlay = $('<div id="intro-overlay"></div>').css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      color: '#00ffcc',
      fontFamily: '"Share Tech Mono", monospace',
      fontSize: '1.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      zIndex: 9999
    }).appendTo('body');
  
    const $text = $('<div id="boot-text">SYSTEM BOOTING...</div>').appendTo($overlay);
  
    setTimeout(() => {
      $text.text('ACCESS GRANTED');
    }, 1200);
  
    setTimeout(() => {
      $text.fadeOut(600);
    }, 2000);
  
    setTimeout(() => {
      $overlay.fadeOut(800, function () {
        $overlay.remove();
        // 最後にロゴをズーム表示（オプション）
        $('#main-logo').addClass('zoom-in');
      });
    }, 2800);
  });
  