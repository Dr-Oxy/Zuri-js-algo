//Temperature converter

function convertFahrToCelsius(tempVal) {
  if (Array.isArray(tempVal)) {
    console.log(
      `${JSON.stringify(tempVal)} is not a valid number but a/an array`
    );
    return `${JSON.stringify(tempVal)} is not a valid number but a/an array`;
  }

  if (typeof tempVal !== "string" && typeof tempVal !== "number") {
    console.log(
      `${JSON.stringify(
        tempVal
      )} is not a valid number but a/an ${typeof tempVal}`
    );

    return `${JSON.stringify(
      tempVal
    )} is not a valid number but a/an ${typeof tempVal}`;
  }

  if (tempVal === "") {
    console.log(
      `${JSON.stringify(
        tempVal
      )} is not a valid number but a/an ${typeof tempVal}`
    );

    return `${JSON.stringify(
      tempVal
    )} is not a valid number but a/an ${typeof tempVal}`;
  }

  const fahr = Number(tempVal);

  if (Number.isNaN(fahr)) {
    return console.log(
      `${JSON.stringify(
        tempVal
      )} is not a valid number but a/an ${typeof tempVal}`
    );
  }

  degCelsius = ((tempVal - 32) * 5) / 9;
  return console.log(degCelsius.toFixed(4));
}

//checkYuGiOh function

function checkYuGiOh(n) {
  const arrayList = [];

  if (isNaN(n)) {
    return console.log(`invalid parameter: ${JSON.stringify(n)}`);
  }

  if (typeof n === "boolean") {
    return console.log(`invalid parameter: ${JSON.stringify(n)}`);
  }

  for (i = 1; i < n; i++) {
    switch (true) {
      case i % 2 === 0 && i % 3 === 0 && i % 5 === 0:
        arrayList.push("yu-gi-oh");
        break;
      case i % 3 === 0 && i % 5 === 0:
        arrayList.push("gi-oh");
        break;
      case i % 2 === 0 && i % 5 === 0:
        arrayList.push("yu-oh");
        break;
      case i % 2 === 0 && i % 3 === 0:
        arrayList.push("yu-gi");
        break;
      case i % 5 === 0:
        arrayList.push("oh");
        break;
      case i % 3 === 0:
        arrayList.push("gi");
        break;
      case i % 2 === 0:
        arrayList.push("yu");
        break;
      default:
        arrayList.push(i);
        break;
    }
  }
  return console.log(arrayList);
}
