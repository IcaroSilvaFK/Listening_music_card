export function convertToMinutesString(time: number) {
  var minutes = Math.floor(time / 60000);
  var seconds = ((time % 60000) / 1000).toFixed(0);

  const padNumberMinutes = String(minutes).padStart(2, '0');
  const padNumberSeconds = String(seconds).padStart(2, '0');

  return `${padNumberMinutes}:${padNumberSeconds}`;
}
