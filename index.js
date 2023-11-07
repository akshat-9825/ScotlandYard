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
window.submitBtn = (player) => {
  let input = getById(player).value;
  if (input.length !== "") {
    if (Number(input) === Number(arr[0])) {
      error = true;
      console.log(`Player ${player} caught X`);
      getById("outputValue").innerHTML = `Player ${player} Caught X!`;
    }
    arr[mapping[player]] = Number(input);
    console.log(arr);
    getById(player).value = "";
  }
};
