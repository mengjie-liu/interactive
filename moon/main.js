$(function () {
  let alpha;
  let beta;
  let gamma;

  function requestDeviceOrientation() {
    if (
      typeof window.DeviceOrientationEvent !== "undefined" &&
      typeof window.DeviceOrientationEvent.requestPermission === "function"
    ) {
      window.DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            window.addEventListener("deviceorientation", (e) => {
              alpha = e.alpha;
              beta = e.beta;
              gamma = e.gamma;
              $(".image").ripples({
                resolution: 250,
                dropRadius: 20,
                perturbance: 0.04,
              });

              // let panglea;
              let anglea = 0;
              setInterval(function () {
                // panglea = anglea;
                // anglea = alpha;
                console.log(anglea);
              }, 1000);

              // let angle = Math.abs(360 - alpha);
              // if (angle >= 2) {
              //   console.log(alpha);
              //   $(".image").ripples("drop", 200, -100, 20, 0.5);
              // }
            });
          }
        })
        .catch(console.error);
    } else {
      console.log("not permitted");
    }
  }

  $(document).click(function () {
    requestDeviceOrientation();
  });

  // $(".image").ripples("drop", 200, 0, 35, 0.5);
});
