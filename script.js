var a = 0;
var b = 0;
var score = 0;

var quiz1 = document.querySelector(".eq1");
var quiz2 = document.querySelector(".eq2");
var btn = document.querySelector("button");

var ans1 = document.querySelectorAll("input")[0];
var ans2 = document.querySelectorAll("input")[1];

let varSets = [
  ["x", "y"],
  ["a", "b"],
  ["m", "n"],
  ["p", "q"],
  ["u", "v"]
];

let currentVars = ["x", "y"];

function get_number() {
    let n = Math.floor(Math.random() * 11) - 5;
    if (n === 0) return get_number();
    return n;
}

function formatTerm(num, variable, first = false) {
    let sign = "";

    if (num > 0 && !first) sign = "+";
    if (num < 0) sign = "-";

    let abs = Math.abs(num);

    if (abs === 1) {
        return sign + variable;
    }

    return sign + abs + variable;
}

function get_equation() {
    a = get_number();
    b = get_number();

    currentVars = varSets[Math.floor(Math.random() * varSets.length)];

    let v1 = currentVars[0];
    let v2 = currentVars[1];

    let c1 = get_number();
    let c2 = get_number();
    let c3 = get_number();
    let c4 = get_number();

    let sol1 = c1 * a + c2 * b;
    let sol2 = c3 * a + c4 * b;

    let eq1 = `${formatTerm(c1, v1, true)} ${formatTerm(c2, v2)} = ${sol1}`;
    let eq2 = `${formatTerm(c3, v1, true)} ${formatTerm(c4, v2)} = ${sol2}`;

    if (eq1 === eq2) {
        get_equation();
        return;
    }

    quiz1.innerText = eq1;
    quiz2.innerText = eq2;
}

get_equation();

btn.addEventListener("click", () => {

    if (
        Number(ans1.value) === a &&
        Number(ans2.value) === b
    ) {
        score++;
        document.querySelector("#result").innerText = "Correct";
    } else {
        if (score > 0) score--;
        document.querySelector("#result").innerText = "Wrong";
    }

    document.querySelector(".box h1").innerText = score;

    setTimeout(() => {
        ans1.value = "";
        ans2.value = "";
        get_equation();
    }, 700);
});
