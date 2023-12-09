const allUseButtons = document.querySelectorAll("section.samples button");
const allInputs = document.querySelectorAll("section.input input");
const output = document.getElementById("output");

const swap1 = document.getElementById("swap1");
const swap2 = document.getElementById("swap2");
const swap3 = document.getElementById("swap3");

/////////////////////////////////////////////////// GLOBAL STUFF ///////////////////////////////////////////////////

function getInput(number, mode) {
    element = allInputs[number - 1];
    if (mode === "eval") {
        return eval(element.value);
    }
    if (mode === "value") {
        return element.value;
    }
    if (mode) {
        throw Error(`mode ${mode} is not expected here`);
    }
    return element;
}
output.publish = (arg) => {
    output.innerHTML = JSON.stringify(arg);
    output.value = JSON.stringify(arg);
};

// swap
function swap(a, b) {
    const first = getInput(a);
    const second = getInput(b);
    const tmp = first.value;
    first.value = second.value;
    second.value = tmp;
}
swap1.addEventListener("click", () => {
    swap(1, 2);
});
swap2.addEventListener("click", () => {
    swap(2, 3);
});
swap3.addEventListener("click", () => {
    swap(3, 4);
});

allUseButtons.forEach((b) => {
    console.log(b);
    b.addEventListener("click", (e) => {
        input1.value = e.target.previousElementSibling.value;
    });
});

/////////////////////////////////////////////////// BUTTONS ///////////////////////////////////////////////////

// button push
const button_push = document.getElementById("button_push");
function push() {
    const i1 = getInput(1, "eval");
    const i2 = getInput(2, "eval");
    i1.push(i2);
    output.publish(i1);
}
button_push.addEventListener("click", push);

// button indexof
const button_indexof = document.getElementById("button_indexof");
function indexof() {
    const i1 = getInput(1, "eval");
    const i2 = getInput(2, "eval");
    output.publish(i1.indexOf(i2));
}
button_indexof.addEventListener("click", indexof);

// button includes
const buttonIncludes = document.getElementById("button_includes");
function includes() {
    console.log("includes");
    output.publish(getInput(1, "eval").includes(getInput(2, "eval")));
}
buttonIncludes.addEventListener("click", includes);

// button reverse
const button_reverse = document.getElementById("button_reverse");
function reverse() {
    output.publish(getInput(1, "eval").reverse());
}
button_reverse.addEventListener("click", reverse);

// button slice
const button_slice = document.getElementById("button_slice");
function slice() {
    output.publish(
        getInput(1, "eval").slice(getInput(2, "eval"), getInput(3, "eval"))
    );
}
button_slice.addEventListener("click", slice);

// button splice
const button_splice = document.getElementById("button_splice");
function splice() {
    let x = getInput(1, "eval");
    x.splice(getInput(2, "eval"), getInput(3, "eval"), getInput(4, "eval"));
    output.publish(x);
}
button_splice.addEventListener("click", splice);

// button map
const button_map = document.getElementById("button_map");
function map() {
    console.log("map");
    output.publish(getInput(1, "eval").map(getInput(2, "eval")));
}

button_map.addEventListener("click", map);

// button filter
const button_filter = document.getElementById("button_filter");
function filter() {
    output.publish(eval(getInput(1, "eval")).filter(getInput(2, "eval")));
}

button_filter.addEventListener("click", filter);

// button split
const button_split = document.getElementById("button_split");
function split() {
    output.publish(getInput(1, "eval").split(getInput(2, "eval")));
}

button_split.addEventListener("click", split);

// button join
const buttonJoin = document.getElementById("button_join");
function join() {
    output.publish(getInput(1, "eval").join(getInput(2, "eval")));
}

buttonJoin.addEventListener("click", join);

// button some
const buttonSome = document.getElementById("button_some");
function some() {
    output.publish(getInput(1, "eval").some(getInput(2, "eval")));
}
buttonSome.addEventListener("click", some);

// button spread
const buttonSpread = document.getElementById("button_spread");
function spread() {
    output.publish([...getInput(1, "eval"), ...getInput(2, "eval")]);
}
buttonSpread.addEventListener("click", spread);
