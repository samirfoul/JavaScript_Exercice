// for (let i = 1; i <= 100; i++) {
//   let myD = document.createElement("div");
//   let myH = document.createElement("h3");
//   let myP = document.createElement("p");
//   let myText = document.createTextNode("product title" + [i]);
//   let myT = document.createTextNode("paragraph discreption" + [i]);
//   myD.className = "prudoct";
//   myH.appendChild(myText);
//   myP.appendChild(myT);
//   myD.appendChild(myH);
//   myD.appendChild(myP);
//   document.body.appendChild(myD);
// };

// body styling
document.body.style.cssText =
  "margin: 0px; background-color: rgb(236, 236, 236); font-family:Tahoma,Arial;";

/* header */

// create header
let head = document.createElement("header");
head.style.cssText =
  "display:flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items : center;";
head.classList.add("website-head");
document.body.appendChild(head);

// create logo
let logo = document.createElement("div");
logo.classList.add("logo");
logo.title = "website logo";
logo.style.cssText =
  "font-weight: bold; color:rgb(35, 169, 110); font- size: 26px;";
logo.innerHTML = "SAMIR-FOUL";
head.appendChild(logo);

// ul elements
let ul = document.createElement("ul");
let headEle = ["Home", "About", "Service", "Contact"];
for (i = 0; i < headEle.length; i++) {
  let li = document.createElement("li");
  li.style.margin = "5px";
  li.style.color = "rgb(234 200 133)";
  li.innerHTML = headEle[i];
  ul.appendChild(li);
}
ul.classList.add("content");
ul.style.cssText = "paddig: 0px; margin: 0px; display: flex; list-style: none;";
head.appendChild(ul);

/* body */

// create content
let content = document.createElement("div");
document.body.appendChild(content);
content.classList.add("content");
content.style.cssText =
  "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";

// create product
for (i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.classList.add("product");
  product.style.cssText =
    "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
  let span = document.createElement("span");
  span.style.cssText =
    "font-size: 40px; color: black; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
  span.textContent = i + 1;
  product.appendChild(span);
  product.append("Product");
  content.appendChild(product);
}

/* footer */

// create footer
let foot = document.createElement("footer");
foot.classList.add("footer");
foot.style.cssText =
  "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
foot.append("copyright 2022");
document.body.appendChild(foot);



