let timeLeft = 62;
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
            submitExam(true);
        }
    }, 1000);
}

function submitExam(auto = false) {
    clearInterval(timeInterval);
    document.getElementById('examForm').querySelectorAll('input').forEach(input =>{input.disabled = true;})
    const selected = document.querySelectorAll('.myRadio:checked');
    const result = {};

    selected.forEach(radio => {
        result[radio.name] = radio.value;
    });
    console.log(result);
    return result;

    const answers = {
        q1: "4",
        q2: "Paris",
        q3: "Abuja",
        q4: "Dangote",
        q5: "1963",
        q6: "Light",
        q7: "26",
        q8: "Garri",
        q9: "Super eagles",
        q10: "June",
        q11: "Okada",
        q12: "Enugu",
    };

    let score = 0;
}

