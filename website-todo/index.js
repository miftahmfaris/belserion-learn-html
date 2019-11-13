// let todo = todos => {
//     let result = "";
//     let finalResult = "";
//     todos.map((element, index) => {
//         result += `[${index + 1}]-${element} \n`;
//     });

//     alert(result);
//     let add = confirm("Tambah todo?");

//     if (add) {
//         let newTodo = prompt("Masukan todo");
//         todos.push(newTodo);

//         todos.map((element, index) => {
//             finalResult += `[${index + 1}]-${element} \n`;
//         });
//         alert(finalResult);
//     } else {
//         let deleteTodo = confirm("Hapus todo?");
//         if (deleteTodo) {
//             let newTodo = prompt("Masukan nomor todo yang mau dihapus");
//             todos.splice(newTodo - 1, 1);
//             todos.map((element, index) => {
//                 finalResult += `[${index + 1}]-${element} \n`;
//             });
//             alert(finalResult);
//         } else {
//             alert(result);
//         }
//     }
// };

// console.log(todo(["makan", "tidur", "belajar"]));

// let now = new Date("2019-11-11");
// let tomorrow = new Date("2019-11-12");