const arr = Array.from({ length: 30 }, (_, k) => ({
  visits: Math.round(Math.random() * 100),
  timestamp: String(new Date(`01/${k + 1}/2023`)),
}));

console.log(arr);
