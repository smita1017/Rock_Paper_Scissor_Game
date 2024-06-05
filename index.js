var computerchoice = Math.random();
var mychoice;
function img1() {
  computerchoice = Math.random();
  mychoice = "rock";
  if (computerchoice > 0 && computerchoice < 0.33) {
    computerchoice = "rock";
    // alert(
    //   `computer choise is ${computerchoice} and your choice is ${mychoice} Game Tie!!`
    // );
    var a = `computer choise is ${computerchoice} and your choice is ${mychoice} Game Tie!!`
    document.querySelector(".output").innerHTML = a;
  } else if (computerchoice > 0.33 && computerchoice < 0.66) {
    computerchoice = "paper";
    // alert(
    //   `compuater choise is ${computerchoice} and your choice is ${mychoice} computer wins!!`
    // );

    var b = `compuater choise is ${computerchoice} and your choice is ${mychoice} computer wins!!`
    document.querySelector(".output").innerHTML = b;

  } else {
    computerchoice = "scissor";
    // alert(
    //   `compuater choise is ${computerchoice} and your choice is ${mychoice} you are win!!`
    // );
    var c = `compuater choise is ${computerchoice} and your choice is ${mychoice} you are wins!!`
    document.querySelector(".output").innerHTML = c;

  }

}

function img2() {
  {
    computerchoice = Math.random();
    mychoice = "paper";
    if (computerchoice > 0 && computerchoice < 0.33) {
      computerchoice = "rock";
      // alert(
      //   `computer choise is ${computerchoice} and your choice is ${mychoice} you win!!`
      // );
      var d = `computer choise is ${computerchoice} and your choice is ${mychoice} you win!!`
      document.querySelector(".output").innerHTML = d;
    } else if (computerchoice > 0.33 && computerchoice < 0.66) {
      computerchoice = "paper";
      // alert(
      //   `compuater choise is ${computerchoice} and your choice is ${mychoice}  match tie!!`
      // );
      var e = `compuater choise is ${computerchoice} and your choice is ${mychoice}  match tie!!`
      document.querySelector(".output").innerHTML = e;
    } else {
      computerchoice = "scissor";
      // alert(
      //   `compuater choise is ${computerchoice} and your choice is ${mychoice} computer wins!!`
      // );
      var f = `compuater choise is ${computerchoice} and your choice is ${mychoice} computer wins!!`
      document.querySelector(".output").innerHTML = f;
    }
  }
  // location.reload(true);
}
function img3() {
  {
    computerchoice = Math.random();
    mychoice = "sessior";
    if (computerchoice > 0 && computerchoice < 0.33) {
      computerchoice = "rock";
      // alert(
      //   `computer choise is ${computerchoice} and your choice is ${mychoice} you loss!!`
      // );
      var g = `computer choise is ${computerchoice} and your choice is ${mychoice} you loss!!`
      document.querySelector(".output").innerHTML = g;
    } else if (computerchoice > 0.33 && computerchoice < 0.66) {
      computerchoice = "paper";
      // alert(
      //   `compuater choise is ${computerchoice} and your choice is ${mychoice} you wins!!`
      // );
      var u = `compuater choise is ${computerchoice} and your choice is ${mychoice} you wins!!`
      document.querySelector(".output").innerHTML = u;
    } else {
      computerchoice = "scissor";
      // alert(
      //   `compuater choise is ${computerchoice} and your choice is ${mychoice} match tie!!`
      // );
      var p = `compuater choise is ${computerchoice} and your choice is ${mychoice} match tie!!`
      document.querySelector(".output").innerHTML = p;
    }
  }
  // location.reload(true);

}
function reload() {
  location.reload(true)
}
