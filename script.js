function showHome() {
    hideAllSections();
    document.getElementById("home").style.display = "block";
}

function showSchemesOfWork() {
    hideAllSections();
    document.getElementById("schemesOfWork").style.display = "block";
}

function showLessonPlan() {
    hideAllSections();
    document.getElementById("lessonPlan").style.display = "block";
}

function showStudyNotes() {
    hideAllSections();
    document.getElementById("studyNotes").style.display = "block";
}

function showStudyQuizzes() {
    hideAllSections();
    document.getElementById("studyQuizzes").style.display = "block";
}

function showContactUs() {
    hideAllSections();
    document.getElementById("contactUs").style.display = "block";
}

function hideAllSections() {
    const sections = document.querySelectorAll("main > section");
    sections.forEach(section => {
        section.style.display = "none";
    });
}


showHome();
document.getElementById('Access Schemes of work here').addEventListener('click', function() {
    // Change the URL to the desired PDF file or link
    var pdfURL = 'https://educationnewshub.co.ke/home-science-form-1-schemes-of-work-updated-term-1-3/';

    // Open the PDF in a new tab
    window.open(pdfURL, 'https://educationnewshub.co.ke/home-science-form-1-schemes-of-work-updated-term-1-3/');
});


document.getElementById('lesson plan').addEventListener('click', function() {
    // Change the URL to the desired PDF file or link
    var pdfURL = 'https://www.elimulibrary.com/site/category/2/lesson-plans/18/home-science';

    window.open(pdfURL, 'https://www.elimulibrary.com/site/category/2/lesson-plans/18/home-science');
});


document.getElementById('studyQuizzes').addEventListener('click', function() {
    // Change the URL to the desired PDF file or link
    var pdfURL = 'https://study.com/academy/practice/quiz-worksheet-nutritional-disturbances.html';

    // Open the PDF in a new tab
    window.open(pdfURL, '_https://study.com/academy/practice/quiz-worksheet-nutritional-disturbances.html');
});

document.getElementById('studyNotes').addEventListener('click', function() {
    // Change the URL to the desired PDF file or link
    var pdfURL = 'https://teacher.co.ke/home-science-notes/';

    // Open the PDF in a new tab
    window.open(pdfURL, 'https://teacher.co.ke/home-science-notes/');
});

document.getElementById('contactUs').addEventListener('click', function() {
    // Change the URL to the desired PDF file or link
    var pdfURL = ('https://www.facebook.com/syombua.anna?mibextid=ZbWKwL');

    // Open the PDF in a new tab
    window.open(pdfURL, 'https://www.facebook.com/syombua.anna?mibextid=ZbWKwL');
});




