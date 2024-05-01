type First<T extends any[]> = T extends [infer U, ...infer _] ? U : never;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

const head1: First<arr1> = "a";
const head2: First<arr2> = 3;

document.getElementById("firstElem1")!.innerText = head1;
document.getElementById("firstElem2")!.innerText = head2.toString();
