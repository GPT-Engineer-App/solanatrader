export const fetchRealTimeData = async () => {
  const response = await fetch("https://api.example.com/real-time-data");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};