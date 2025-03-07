function getRandomCode() {
  const codes = ['1234', '5678', '9012', '3456'];
  return codes[Math.floor(Math.random() * codes.length)];
}
