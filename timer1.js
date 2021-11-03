let alarm = process.argv.slice(2)
const timer = () => {
let newAlarm = alarm.filter(x => x > 0 && !Number.isInteger(x)).map(x => x * 1000);
for (const char of newAlarm) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1 * char);
}
}
timer();