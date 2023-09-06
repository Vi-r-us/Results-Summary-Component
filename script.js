// Get the JSON object
const data = fetch('./data.json')
    .then(response => response.json())
    .then(data => setScore(data))
    .catch(error => console.log(error));

const summaryItemList = document.querySelectorAll('.summary-item');

// console.log(data);
// console.log(data[0]);
// console.log(summaryItemList);

// console.log(typeof data);
// console.log(typeof summaryItemList);

function setScore(data) {
    var totalScore = 0;

    for (var i = 0; i < summaryItemList.length; i++) {
        // add up the scores
        totalScore += data[i].score;

        // Update the summary item Scores
        summaryItemList[i].
            querySelector('.summary-item-title').
            innerText = data[i].category;

        summaryItemList[i].
            querySelector('.js-score').
            textContent = data[i].score;
    }

    // update the totalScore percentage
    document.querySelector('.js-result-score')
        .textContent = Math.floor(totalScore / 4);
}

