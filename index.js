let error = false;

const getById = (id) => document.getElementById(id);

let arr = [-1, -2, -3, -4, -5];

const mapping = {
  X: 0,
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
};

const check = (position) => {
  for (let i = 1; i <= 4; i++) {
    console.log(position, arr[i]);
    if (Number(position) === Number(arr[i])) {
      return true;
    }
  }
  return false;
};

window.submitBtn = (player) => {
  let input = getById(player).value;
  if (input.length !== "") {
    if (player !== "X" && Number(input) === Number(arr[0])) {
      error = true;
      console.log(`Player ${player} caught X`);
      getById("outputValue").innerHTML = `Player ${player} Caught X!`;
    } else if (player === "X") {
      if (check(input)) {
        error = true;
        console.log(`X got caught!`);
        getById("outputValue").innerHTML = `X got caught!`;
      }
    }
    arr[mapping[player]] = Number(input);
    console.log(arr);
    getById(player).value = "";
  }
};
