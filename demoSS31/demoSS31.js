// console.dir(document);

// let h1 = document.getElementById("demo-id");
// console.log(h1);

// let around = document.getElementsByClassName("demo-class");
// console.log(around);
// console.log(around[2]);

// // làm việc toàn bộ phần tử 
// for(let i = 0; i < around.length; i++){
//     console.log(around[i]);
// }

//VÍ DỤ TIẾP THEO

let iTag = document.getElementsByClassName("demo-class")[2];
console.dir(iTag);
//Kiểm soát content - nội dung
console.log(iTag.innerHTML);
console.log(iTag.innerText);
console.log(iTag.textContent);

let p = document.getElementById("demo-inner");
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.textContent);
p.textContent = "Jello World";
p.innerText = "abc123";
p.innerHTML = `
<span>1</span>
<u>123</u>
<i>321</i>
` // được dùng nhiều nhất để cập nhật nội dung

// id
console.log(p.id); // lấy ra id của thành phần html



// style
// p.style.width = 
// p.style.width =
// p.style.width =
// p.style.width =
// p.style.width =
// p.style.width =
// p.style.width =
// p.style.width =
// p.style.width =

let abbr = document.getElementsByClassName("class-01")[0];
console.log(abbr);
// kiểm soát danh sách class của thẻ abbr
console.log(abbr.classList);
// abbr.classList.add("circle");
abbr.classList.remove("circle");
