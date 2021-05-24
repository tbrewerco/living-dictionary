
// state variables________
let wordData;

// variables
$word = $(".word"); // target specific classes and ids

$pronunciation = $(".pronunciation")
$partOfSpeech = $(".partOfSpeech")
$defItemOne = $("#defItemOne")
$defsOne = $("#defsOne")
$defItemTwo = $("#defItemTwo")
$partOfSpeechTwo = $(".partOfSpeechTwo")
// $defsTwo = $("#defsTwo")
// $similarWordsList = $("similarWordsList")

// functions________
function render() {
console.log(wordData);
$word.text(wordData[0].hwi.hw);
$pronunciation.text(wordData[0].hwi.prs[0].mw);
$partOfSpeech.text(wordData[0].fl)
$defItemOne.text(wordData[0].shortdef[0])
$defsOne.append(`<li>${wordData[0].shortdef[1]}</li>`)

$partOfSpeechTwo.text(wordData[1].fl)


};

function handleGetData(event) { // declare handleGetData function, to be called on form submit

    event.preventDefault(); // prevents page refresh on form submit

    let searchText = $("input").val() // store user input in variable

    $.ajax( // gets data from dictonaryapi.com using user input (searchText) as keyword
            `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchText}?key=ae49d360-70d0-4fb5-9a08-fa08c61a5b33`
        )
        .then(function (data) { // executes when data received 
                wordData = data;
                render(); // calls render function
            },
            function (error) {  // alerts error
                alert("bad request: ", error);
            });
            console.log(searchText)
}


// event listeners________
$('form').on('submit', handleGetData); // calls handleGetData on form submit