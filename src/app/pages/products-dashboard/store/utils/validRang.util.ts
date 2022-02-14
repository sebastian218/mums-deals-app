export const variantInRange = (x: Array<number>, y: number, z: number) => {
  
  let inRange = [];
  for (var i = 0; i < x.length; i++) {
    if (x[i] < y || x[i] > z) {
      inRange.push(false);
    } else {
      inRange.push(true);
    }

  }
  return inRange.includes(true);
}