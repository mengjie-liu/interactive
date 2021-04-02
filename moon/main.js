$(function () {
  function requestDeviceOrientation() {
    if (
      typeof window.DeviceOrientationEvent !== "undefined" &&
      typeof window.DeviceOrientationEvent.requestPermission === "function"
    ) {
      window.DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            window.addEventListener("deviceorientation", (e) => {
              let alpha = e.alpha;
              let beta = e.beta;
              let gamma = e.gamma;
              $(".image").ripples({
                resolution: 250,
                dropRadius: 20,
                perturbance: 0.04,
              });

              let anglea;
              setInterval(function () {
                anglea = alpha;
                console.log(alpha);
              }, 500);

              // let angle = Math.abs(360 - alpha);
              // if (angle >= 2) {
              //   console.log(alpha);
              //   $(".image").ripples("drop", 200, 0, 35, 0.5);
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
