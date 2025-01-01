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
       option.textContent = `<${tags}>`;
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
        console.log(wordSlider.value);
    }
    // lorem generator function
    function loremGenerator() {
        const paragraphs = parseInt(paragraphSlider.value);
        const tag = document.getElementById("tags").value;
        const include = document.getElementById("include").value;
        const wordsperpara = parseInt(wordSlider.value);

        const loremText = generateText(paragraphs , tag , include , wordsperpara);
        const displayLorem = displayLoremText(loremText);
    }

    //function to generate lorem Ipsum text
    function generateText(paragraphs , tag , include , wordsperpara){
        // Illustration
        const placeholder = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, est! Quas, repudiandae a? Consequatur corporis, voluptas eius facere temporibus magni quod, cumque quia consequuntur minus voluptatem a porro exercitationem neque.`
        // create an array of paragraphs 
    const loremIpsumArray = new Array(paragraphs).fill("");

    for (let i = 0; i < paragraphs; i++) {
        const words = generatepara(wordsperpara);
        
    }
    }
    

}




