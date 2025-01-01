const tagOptions = [
    "p" , "h1" , "h2" , "h3" , "h4" , "h5" , "h6" , "span"
];
alert("hello")
let container = document.querySelector(".container");
let paragraph = document.querySelector(".para");
let paragraphSlider = document.getElementById("Paragraphs")
let paragraphValue = document.querySelector(".paragraphValue");
let words = document.querySelector(".words");
let wordSlider = document.getElementById(".words")
let wordValue = document.querySelector(".wordsValue");
let tagSelect = document.getElementById("tags");

function createOptionUi(){
    tagOptions.forEach(tags => {
       const option = document.createElement("option");
       option.value = tags;
       option.textContent = `${tags}`;
       tagSelect.appendChild(option)
       console.log(tags)
    });

    // adding eventlisteners on sliders
    paragraphSlider.addEventListener("input" , updateParagraphValue);
    wordSlider.addEventListener("input" , updateWordsValue);
    const generateButton = document.getElementById("generate");
    generateButton.addEventListener("click" , loremGenerator);

    function updateParagraphValue(){
        paragraphValue.textContent = paragraphSlider.value;
    }
    function updateWordsValue(){
        wordValue.textContent = wordSlider.value;
    }
    
}
