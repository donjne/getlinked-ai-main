import { useState, useEffect } from "react";

function Timer() {
  // Calculate the expiry time (7 days ahead)
  const sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

  const [expiryTime, setExpiryTime] = useState(sevenDaysFromNow.getTime());

  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });

  useEffect(() => {
    const countdownTimer = () => {
      const timeInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = expiryTime - currentTime;

        if (remainingTime < 0) {
          clearInterval(timeInterval);
          setCountdownTime({
            countdownDays: 0,
            countdownHours: 0,
            countdownMinutes: 0,
            countdownSeconds: 0,
          });
        } else {
          const totalSeconds = Math.floor((remainingTime / 1000) % 60);
          const totalMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
          const totalHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
          const totalDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

          setCountdownTime({
            countdownDays: totalDays,
            countdownHours: totalHours,
            countdownMinutes: totalMinutes,
            countdownSeconds: totalSeconds,
          });
        }
      }, 1000);
    };

    // Call the function
    countdownTimer();

    return () => clearInterval(countdownTimer);
  }, [expiryTime]);

  return (
    <div className="flex lg:justify-start justify-center items-center mt-10">
      {countdownTime.countdownDays > 0 ||
      countdownTime.countdownHours > 0 ||
      countdownTime.countdownMinutes > 0 ||
      countdownTime.countdownSeconds > 0 ? (
        <div className="font-unica-one mt-10 flex gap-5">
          <h2 className="text-5xl">
            <span>{countdownTime.countdownDays}</span>
            <span className="text-sm">D</span>
          </h2>
          <h2 className="text-5xl">
            <span>{countdownTime.countdownHours}</span>
            <span className="text-sm">H</span>
          </h2>
          <h2 className="text-5xl">
            <span>{countdownTime.countdownMinutes}</span>
            <span className="text-sm">M</span>
          </h2>
          <h2 className="text-5xl">
            <span>{countdownTime.countdownSeconds}</span>
            <span className="text-sm">S</span>
          </h2>
        </div>
      ) : (
        <div className="font-unica-one mt-10 flex flex-col">
          <div className="flex items-center gap-5">
            <h2 className="text-5xl">
              <span>00</span>
              <span className="text-sm">D</span>
            </h2>
            <h2 className="text-5xl">
              <span>00</span>
              <span className="text-sm">H</span>
            </h2>
            <h2 className="text-5xl">
              <span>00</span>
              <span className="text-sm">M</span>
            </h2>
            <h2 className="text-5xl">
              <span>00</span>
              <span className="text-sm">S</span>
            </h2>
          </div>
          <h2 className="md:text-3xl text-2xl mt-2 uppercase text-center">
            Hackathon is over
          </h2>
        </div>
      )}
    </div>
  );
}

export default Timer;
