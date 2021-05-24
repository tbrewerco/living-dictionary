
// state variables________
let wordData;

// variables
let searchText = $("input").val(); // store user input in variable

// functions________
function render() {

}

function handleGetData(event) { // declare handleGetData function, to be called on form submit

    event.preventDefault(); // prevents page refresh on form submit

    $.ajax({ // gets data from dictonaryapi.com using user input (searchText) as keyword
            url: `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchText}?key=ae49d360-70d0-4fb5-9a08-fa08c61a5b33`
        })
        .then(function (data) { // executes when data received 
                wordData = data;
                render(); // calls render function
            },
            function (error) {  // alerts error
                alert("bad request: ", error);
            });
}


// event listeners________
$('form').on('submit', handleGetData); // calls handleGetData on form submit