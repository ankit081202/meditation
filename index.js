$(".btn1").click(function() {
  $('.v').attr('src', "video/rain.mp4");
  $('.a').attr('src', "sounds/rain.mp3");
});
$(".btn2").click(function() {
  $('.v').attr('src', "video/beach.mp4");
  $('.a').attr('src', "sounds/beach.mp3");
});
$(".btn1m").click(function() {
  $(".countdown").html("01:00");
  $(".btn3m").attr('disabled', true);
  $(".btn5m").attr('disabled', true);
  let timeSecond = 60;
  const timeH = document.querySelector(".countdown");

  displayTime(timeSecond);

  const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      clearInterval(countDown);
      $(".btn3m").attr('disabled', false);
      $(".btn5m").attr('disabled', false);
    }
  }, 1000);
  $(".undo").click(function() {
    $(".btn3m").attr('disabled', false);
    $(".btn5m").attr('disabled', false);
    $(".btn1m").attr('disabled', false);
    clearInterval(countDown);
  });


  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
  }

});

$(".btn3m").click(function() {
  $(".countdown").html("03:00");
  $(".btn1m").attr('disabled', true);
  $(".btn5m").attr('disabled', true);
  let timeSecond = 180;
  const timeH = document.querySelector(".countdown");
  $(".undo").click(function() {
    $(".btn3m").attr('disabled', false);
    $(".btn5m").attr('disabled', false);
    $(".btn1m").attr('disabled', false);
    clearInterval(countDown);
  });

  displayTime(timeSecond);

  const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      clearInterval(countDown);
      $(".btn1m").attr('disabled', false);
      $(".btn5m").attr('disabled', false);
    }
  }, 1000);
  $(".undo").click(function() {
    $(".btn3m").attr('disabled', false);
    $(".btn5m").attr('disabled', false);
    $(".btn1m").attr('disabled', false);
    clearInterval(countDown);
  });
  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
  }
});


$(".btn5m").click(function() {
  $(".countdown").html("05:00");
  $(".btn3m").attr('disabled', true);
  $(".btn1m").attr('disabled', true);
  let timeSecond = 300;
  const timeH = document.querySelector(".countdown");

  displayTime(timeSecond);

  const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      clearInterval(countDown);
      $(".btn3m").attr('disabled', false);
      $(".btn5m").attr('disabled', false);
    }
    $(".undo").click(function() {
      $(".btn3m").attr('disabled', false);
      $(".btn5m").attr('disabled', false);
      $(".btn1m").attr('disabled', false);
      clearInterval(countDown);
    });
  }, 1000);


  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
  }
});
