let timeLeft = 60;
let timeInterval;

function Submit_Name() {
    const name = document.querySelector('.name');
    console.log(name.value);
    if (name.value === "") {
        name.placeholder = "Enter your name here...";
        return;
    }
    document.querySelector('.start_exam').disabled = false;
    document.getElementById('Name_space').classList.add('Name_space');
    document.getElementById('examiner').innerHTML = `<p>WELCOME, ${name.value}</p>`;

    


    name.value = "";
}

function startExam() {
    document.getElementById('exam_body').classList.remove('exam_body');
    document.getElementById('start_exam').innerHTML = "Your exam have started";
    document.querySelector('.start_exam').disabled = true;
    examTime();
}

function examTime() {
    timeInterval = setInterval(() => {
        timeLeft-- ;
        document.getElementById('time_left').innerHTML = timeLeft ;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}