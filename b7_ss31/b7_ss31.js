//  B1 : Mô phỏng kho lưu trữ dữ liệu
let todoList = [
    {
        id: 1,
        task: "Hit the gym",
        completed: false,
    },
    {
        id: 2,
        task: "Pay Bills",
        completed: true,
    },
    {
        id: 3,
        task: "Meet George",
        completed: false,
    },
    {
        id: 4,
        task: "Buy eggs",
        completed: false,
    },
    {
        id: 5,
        task: "Read a book",
        completed: false,
    },
    {
        id: 6,
        task: "Organize office",
        completed: false,
    },
];

let ul = document.getElementById("myUL")
let addBtn = document.getElementsByClassName("addBtn")[0];
let input = document.getElementById("myInput");
// B2: ánh xạ toàn bộ đối tượng dữ liệu
// Render

// - B2.1: Duyệt qua mảng todoList
displayTodo();

// C - create [Thêm mới]

// b1: sác định vị trí gắn sự kiện 
// b2: gắn sự kiện onclick vào nút ADD
addBtn.onclick = function () {
    // b3: mỗi khi người dùng ấn vào thì gọi thẻ input và lấy nội dung đó ra
    input.value;
    let newTodo = {
        id: Math.random(),
        task: input.value,
        completed: false,
    }
    todoList.push(newTodo);
    displayTodo();
    // b4: biến nội dung đó thành các phần tử LI

    // b5: đưa thẻ LI đó lên trình duyệt
};


function displayTodo() {
    // Làm sạch thẻ ul trước khi render
    ul.innerHTML = "";
    for (let i in todoList) {
        let li;
        if (todoList[i].completed === true) {
            li = `<li class="checked">${todoList[i].task}<span class ="close">&#x2715</span></li>`;
        } else {
            li = `<li>${todoList[i].task}<span class ="close">&#x2715</span></li>`;
        }
        ul.innerHTML = ul.innerHTML + li;
        console.log(li);
    }
    let closeList = document.getElementsByClassName('close');
    for(let i in closeList){
        closeList[i].onclick = function(){
            let id = +closeList[i].parentElement.id;
            let findIndex = -1;
            for(let index in todoList){
                if(id === todoList[index].id){
                    findIndex = index;
                    break;
                }
            }

            todoList.splice(findIndex, 1);
            displayTodo();
        }
    }
}