const box = document.querySelectorAll(".div");

var flag = "0";
var count=0;
box.forEach((box) => {
  box.addEventListener("click", function clickHandler(e) {
    res = document.querySelector(".result");
    if (res.innerText === "0 win" || res.innerText === "X win" ) {
      return;
    }

    if (e.target.innerText == "") {
      if (flag == "0") {
        e.target.innerHTML = flag;
        flag = "X";
        count++;
      } else {
        e.target.innerHTML = flag;
        flag = "0";
        count++;
      }
      check();
    }
  });
});

function check() {

    res = document.querySelector(".result");

    if (count===9) {
        res.innerText = "draw ho gya bhai";
    }


  a = document.querySelector(".row00").innerText;
  b = document.querySelector(".row01").innerText;
  c = document.querySelector(".row02").innerText;
  d = document.querySelector(".row10").innerText;
  e = document.querySelector(".row11").innerText;
  f = document.querySelector(".row12").innerText;
  g = document.querySelector(".row20").innerText;
  h = document.querySelector(".row21").innerText;
  i = document.querySelector(".row22").innerText;


  if (a == "0" && b == "0" && c == "0") {
    res.innerText = "0 win";
  }
  if (a == "X" && b == "X" && c == "X") {
    res.innerText = "X win";
  }

  if (d == "0" && e == "0" && f == "0") {
    res.innerText = "0 win";
  }
  if (d == "X" && e == "X" && f == "X") {
    res.innerText = "X win";
  }

  if (g == "0" && h == "0" && i == "0") {
    res.innerText = "0 win";
  }
  if (g == "X" && h == "X" && i == "X") {
    res.innerText = "X win";
  }

  if (a == "0" && d == "0" && g == "0") {
    res.innerText = "0 win";
  }
  if (a == "X" && d == "X" && g == "X") {
    res.innerText = "0 win";
  }

  if (b == "0" && e == "0" && h == "0") {
    res.innerText = "0 win";
  }
  if (b == "X" && e == "X" && h == "X") {
    res.innerText = "0 win";
  }

  if (c == "0" && f == "0" && i == "0") {
    res.innerText = "0 win";
  }
  if (c == "X" && f == "X" && i == "X") {
    res.innerText = "0 win";
  }

  if (a == "0" && e == "0" && i == "0") {
    res.innerText = "0 win";
  }
  if (a == "X" && e == "X" && i == "X") {
    res.innerText = "0 win";
  }

  if (c == "0" && e == "0" && g == "0") {
    res.innerText = "0 win";
  }
  if (c == "X" && e == "X" && g == "X") {
    res.innerText = "0 win";
  }
}
