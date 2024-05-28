import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default UseTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    time
  );
}
