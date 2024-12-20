document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault

    const mathScore = document.getElementById("math").value;
    const englishScore = document.getElementById("english").value;

    if (mathScore === "") {
        alert("Please enter the Math score！");
        return;
    }
    if (englishScore === "") {
        alert("Please enter the English score！");
        return;
    }

    addRow(mathScore, englishScore);

    document.getElementById("math").value = "";
    document.getElementById("english").value = "";
});

function addRow(math, english) {
    const tableBody = document.getElementById("scoreTable").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow();

    const average = ((parseFloat(math) + parseFloat(english)) / 2).toFixed(2);

    const cellNumber = newRow.insertCell(0);
    const cellMath = newRow.insertCell(1);
    const cellEnglish = newRow.insertCell(2);
    const cellAverage = newRow.insertCell(3);

    cellNumber.textContent = tableBody.rows.length;
    cellMath.textContent = math;
    cellEnglish.textContent = english;
    cellAverage.textContent = average;

    updateAverage();
}

function updateAverage() {
    const tableBody = document.getElementById("scoreTable").getElementsByTagName("tbody")[0];
    const rows = tableBody.rows;

    let totalMath = 0;
    let totalEnglish = 0;
    let count = rows.length;

    for (let i = 0; i < count; i++) {
        totalMath += parseFloat(rows[i].cells[1].textContent);
        totalEnglish += parseFloat(rows[i].cells[2].textContent);
    }

    const avgMath = (totalMath / count).toFixed(2);
    const avgEnglish = (totalEnglish / count).toFixed(2);
    const overallAverage = ((parseFloat(avgMath) + parseFloat(avgEnglish)) / 2).toFixed(2);

    const footer = document.getElementById("averageRow");
    footer.cells[1].textContent = avgMath;
    footer.cells[2].textContent = avgEnglish;
    footer.cells[3].textContent = overallAverage;
}

