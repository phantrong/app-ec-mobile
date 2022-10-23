import { useEffect, useState } from 'react';

const useCountdown = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const reset = () => {
    setTimeLeft(seconds);
  };

  return {
    count: timeLeft,
    reset,
  };
};

export default useCountdown;
