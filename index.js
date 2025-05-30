

function Submit_Name() {
    const name = document.querySelector('.name');
    console.log(name.value);
    if (name.value === "") {
        name.placeholder = "Enter your name here...";
        return;
    }
    


    name.value = "";
}