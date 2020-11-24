const thirsty = true;
const hungry = false;

if (thirsty && hungry) {
  console.log('Ebéd idő!');
} else if (thirsty || hungry) {
  console.log('Nasizzunk!');
} else {
  console.log('Nincs kaja számodra.');
}