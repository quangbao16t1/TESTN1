async function getTrueFalseTimes(toTry, wait = 0, { max }) {
  let resultEnd = true;
  for(count = 1; count <= max; count++) {
      const result = await toTry();
      resultEnd =  result;
      await new Promise((resolve) => setTimeout(resolve, wait));
  }
  return resultEnd;
}

function toTry() {
  let d = new Date(); // current time
  return d.getMilliseconds() % 2 == 0; // => true or false
}

getTrueFalseTimes(toTry, (wait = 100), { max: 10 }).then((result) =>
  console.log(result)
);
