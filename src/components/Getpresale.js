import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
// import Countdown from "react-countdown";

const Getpresale = (props) => {
  const { levelname, coinQty, coinPrice, duration } = props;
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [day, setDay] = useState("");
  const [timer, setTimer] = useState({
    days: "",
    hour: "",
    minute: "",
    second: "",
  });

  useEffect(() => {
    countdowntimer();
  }, []);

  function countdowntimer() {
    var day = 20;
    var se = 86400 * duration;
    var x = setInterval(function () {
      let days = Math.floor(se / 86400);
      let hours = Math.floor((se % 86400) / 3600);
      let minutes = Math.floor(((se % 86400) % 3600) / 60);
      let seconds = Math.floor(((se % 86400) % 3600) % 60);

      // console.log({
      //   days: days,
      //   hour: hours,
      //   minute: minutes,
      //   second: seconds,
      // });
      se--;
      if (se == 0) {
        clearInterval(x);
        setTimer({ days: 0, hour: 0, minute: 0, second: 0 });
      } else {
        setTimer({ days: days, hour: hours, minute: minutes, second: seconds });
      }
    }, 1000);
  }

  return (
    <div class="nk-block first-card">
      <div class="card card-bordered  text-secondary  h-100">
        <div class="card-inner">
          <div class="nk-wg7">
            <div class="nk-wg7-stats">
              <div class="nk-wg7-title is-dark text-body">{levelname}</div>
              <div class="number-lg amount text-success">{coinPrice}</div>
            </div>
            <div class="nk-wg7-stats-group">
              <div class="nk-wg7-stats w-50">
                <div class="nk-wg7-title "></div>
                <div class="number-lg text-success coinqty">{coinQty}</div>
              </div>
              <div
                class="nk-wg7-stats w-50  duration"
                style={{ paddingLeft: 110 }}
              >
                <div class="nk-wg7-title text-body ">Duration</div>
                <div class="number text-success ">{duration}</div>
              </div>
            </div>
            <div
            // style={{
            //   height: "4%",
            //   color: "green",
            //   marginTop: 10,
            //   marginBottom: -20,
            // }}
            >
              <ProgressBar
                completed={coinQty}
                maxCompleted={200}
                completedClassName="barCompleted"
                barContainerClassName="container"
                // labelClassName="label"
              />
            </div>
            <div class="number text-dark countdown">
              {timer.days}:{timer.hour}:{timer.minute}:{timer.second}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Getpresale;
