const colorBox = document.querySelectorAll(".button");
const Page_body = document.body
colorBox.forEach((item) => {
    item.addEventListener('click',(e)=>{

        //? attempt 1
        // if (e.target.id == "grey") {
        //     Page_body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id == "white") {
        //     Page_body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id == "blue") {
        //     Page_body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id == "yellow") {
        //     Page_body.style.backgroundColor = e.target.id
        // }

        //? attempt 2
        // const color = e.target.id
        // switch (color) {
        //     case "grey":
        //         Page_body.style.backgroundColor = e.target.id
        //         break;
        //     case "white":
        //         Page_body.style.backgroundColor = e.target.id
        //         break;
        //     case "blue":
        //         Page_body.style.backgroundColor = e.target.id
        //         break;
        //     case "yellow":
        //         Page_body.style.backgroundColor = e.target.id
        //         break;
        //     default:
        //         break;
        // }

        //? attempt 3
        Page_body.style.backgroundColor = e.target.id
    })
});
