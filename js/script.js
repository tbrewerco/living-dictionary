// state variables________
let wordData;

// variables________

$main = $("main")
$word = $("<h2>"); // sets variable to h2 element
$pronunciation = $("<h3>") // sets variable to h3 element
$partOfSpeech = $("<span>") // sets variable to span element
$defsList = $("<ul>") // sets variable to ul element
$definition = $("<div>") // sets variable to div element

// functions________
function render() {
    
    $('#search').val('').blur(); // clears user text from input field
    $main.empty(); // clears main content
    $defsList.empty(); // clears list content

    $definition.addClass('definition'); // adds class to definition div
    $main.append($definition); // appends definition div to main

    $word.addClass("word"); // adds class to word h2
    $word.text(`${wordData[0].hwi.hw}  `); // set text of $word h2 to object item
    $definition.append($word); // append word to $definition div

    $pronunciation.addClass("pronunciation"); // adds class to pronunciation h3
    $pronunciation.text(wordData[0].hwi.prs[0].mw); // set text of pronunciation to object item
    $definition.append($pronunciation) // append to $definition div

    $partOfSpeech.addClass("partOfSpeech"); // adds class to partOfSpeech span
    $partOfSpeech.text(wordData[0].fl); // set text to object item
    $word.append($partOfSpeech); // append to word h2

    $definition.append($defsList) // appends defsList (unordered list) to definition div

    wordData[0].shortdef.forEach((definition) => { // arrow function that, for each definition in the object, creates a list item element and displays the definition text in the list item
        // console.log(definition) TEST
        $li = $("<li>")
        $li.text(definition)
        $defsList.append($li);
    })

};

function handleGetData(event) { // declare handleGetData function, to be called on form submit
    event.preventDefault(); // prevents page refresh on form submit
    let searchText = $("input").val() // store user input in variable searchText
    $.ajax( // gets data from dictonaryapi.com using user input (searchText) as keyword
            `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchText}?key=ae49d360-70d0-4fb5-9a08-fa08c61a5b33`
        )
        .then(function (data) { // executes when data received 
                wordData = data;
                render(); // calls render function
            },
            function (error) { // alerts error
                alert("bad request: ", error);
            });
    console.log(searchText)
}

// event listeners________
$('form').on('submit', handleGetData); // calls handleGetData on form submit