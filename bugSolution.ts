function printCoord(pt: { x?: number; y?: number }) {
  if (pt.x !== undefined) {
    console.log("The coordinate's x value is " + pt.x);
  } else {
    console.log("The coordinate's x value is undefined");
  }
  if (pt.y !== undefined) {
    console.log("The coordinate's y value is " + pt.y);
  } else {
    console.log("The coordinate's y value is undefined");
  }
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3});
printCoord({});