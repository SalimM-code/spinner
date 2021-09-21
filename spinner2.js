let spins = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let x = 0; x < spins.length; x++) {
  if (x === spins.length - 1) {
    setTimeout(() => {
      process.stdout.write(`\r${spins[x]}\n`);
    }, 300 + (x * 200));
  } else {
    setTimeout(() => {
      process.stdout.write(`\r${spins[x]}   `);
    }, 300 + (x * 200));
  }
}
