function Menu() {
    const offCanvas = document.querySelector('.off-canvas');
    const overlay = document.querySelector('.overlay') || document.createElement('div');
    
    // Create overlay if it doesn't exist
    if (!document.querySelector('.overlay')) {
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
    }

    // Toggle off-canvas and overlay
    offCanvas.classList.toggle('active');
    overlay.classList.toggle('active');

    // Close off-canvas when overlay is clicked
    overlay.addEventListener('click', () => {
        offCanvas.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close off-canvas when close button is clicked
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            offCanvas.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
}





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
    document.getElementById('examiner').innerHTML = `<h1 class="entered_name">${name.value}</h1>`;
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

function submitModal() {
    document.getElementById('submit').style.display = "block";
}

function closeSubmit() {
    document.getElementById('submit').style.display = "none";
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
    const mismatches = [];
    for (const key in answers) {
        if (result.hasOwnProperty(key)) {
        if (result[key].toLowerCase().trim() === answers[key].toLowerCase().trim()) {
            score++;
        } else {
            mismatches.push({
            question: key,
            submitted: result[key],
            correct: answers[key]
            });
        }
        } else {
        mismatches.push({
            question: key,
            submitted: "No answer",
            correct: answers[key]
        });
        }
    }
    document.getElementById('submit').style.display = "none";
    document.querySelector('.submitBtn').innerHTML = "Your exam have been Submitted.";
    document.querySelector('.submitBtn').disabled = true;
    const totalQuestions = Object.keys(answers).length;
    const similarityPercentage = Math.round((score / totalQuestions) * 100);
    console.log("Score:", score);
    console.log("Mismatches:", mismatches);
    console.log("Similarity:", similarityPercentage + "%");
    document.getElementById('Score_Hero').innerHTML = `Your Score is: ${score}/12 (${similarityPercentage}%) `;
}

