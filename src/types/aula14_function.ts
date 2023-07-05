type MapStringsCallback = (item: string) => string;
function mapString(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

const abc = ["a", "b", "c"];
const mapped = mapString(abc, (item) => item.toUpperCase());
console.log(abc);
console.log("convertion upperCase :", mapped);
