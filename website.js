const questions = [
    
    {
        question: "Aşağıdakilerden hangisi Sezin'e verilen lakaplardan biri değildir?",
        options: ["Sezo", "Sarı Çiyan", "Szn Yldrm", "Semih'in sevgilisi"],
        correctAnswer: "Semih'in sevgilisi"
    },
    {
        question: "Buse kiminle evli?",
        options: ["Elif", "Pedro Pascal", "Aubrey Plaza", "Hepsi"],
        correctAnswer: "Hepsi"
    },
    {
        question: "Lisede Almanca rock dinleyen kızın favori grubu nedir?",
        options: ["Guns&Roses", "Metallica", "Scorpions", "Rammstein"],
        correctAnswer: "Metallica"
    },
    {
        question: "Aşağıdakilerden hangisi Zeynep'in kaybettiği şeylerden biri değildir?",
        options: ["Beyni", "Virginity", "Mert'in beresi", "Türk-Alman ile verdiği savaş"],
        correctAnswer: "Türk-Alman ile verdiği savaş"
    },
    {
        question: "Nereye giren şemsiye açılmaz??",
        options: ["Buse'ye", "Eve", "Zeynep'e", "Göte"],
        correctAnswer: "Göte"
    },
    {
        question: "Aşağıdakilerden hangisi Kerem'in en güzel lakabıdır?",
        options: ["Sit-com koltuğu", "Şekerpare", "Başak'ın kocası", "Yürüyen basket şortu"],
        correctAnswer: "Sit-com koltuğu"
    },
    {
        question: "Zeynep'in sevgilisinin (Mert) neyi yok?",
        options: ["Yeşil pasaportu", "Çekilmez kişiliği", "Allahı", "Irkçı sevgilisi"],
        correctAnswer: "Allahı"
    },
    {
        question: "Orijinal Mom's spagetti tarifinde hangisi bulumaz?",
        options: ["Yeşil Biber", "Zeytin", "Kırmızı biber", "Sucuk"],
        correctAnswer: "Kırmızı biber"
    },
    {
        question: "Nası Ya wp grubunu kim kurdu?",
        options: ["Başak", "Elif", "Zeynep", "Nisa"],
        correctAnswer: "Zeynep"
    },
    {
        question: "10. Sınıfta cam kenarı arka ikilide kurulan imparatorluğun ismi nedir?",
        options: ["Başakşah İmparatorluğu", "Berkşah İmparatorluğu", "Barem İmparatorluğu", "Nası Ya İmparatorluğu"],
        correctAnswer: "Berkşah İmparatorluğu"
    },
    {
        question: "Zeynep 23 Haziran 2020 tarihinde cinsel organına hangi ad ile seslenip hepimizi patlatmıştır?",
        options: ["Kilitli kutum", "Kukum", "Genital bölgem", "fav deliğim"],
        correctAnswer: "Kukum"
    },

    
]

let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionButton);
    });
}

function selectAnswer(index) {
    userAnswers[currentQuestionIndex] = index;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let correctAnswers = 0;

    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].options.indexOf(questions[i].correctAnswer)) {
            correctAnswers++;
        }
    }
    
    const resultText = document.getElementById('result');
    resultText.textContent = `YİPİİİEEEEEE ${questions.length} SORUDAN ${correctAnswers} DOĞRU CEVABIN VAR`;
}
function selectAnswer(index) {
    userAnswers[currentQuestionIndex] = index;

    // Add a 'selected' class to the clicked button
    const optionsButtons = document.querySelectorAll('#options-container button');
    optionsButtons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

// Display the first question when the page loads
displayQuestion();

