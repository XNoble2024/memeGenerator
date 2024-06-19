const form = document.getElementById("make-meme");
const topText = document.querySelector('#top-text');
const imgInput = document.querySelector('#image-input');
const bottomText = document.querySelector("#bottom-text");
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newMeme = makeMeme(
        topText.value,
        imgInput.value,
        bottomText.value
    );
    results.appendChild(newMeme)
});

function makeMeme(top, picture, bottom) {
    const meme = document.createElement('div',);
    const memeTopText = document.createElement('div');
    const memeImg = document.createElement('img');
    const memeBottomText = document.createElement('div');
    meme.classList.add('meme-container');

    memeTopText.innerText = top;
    memeTopText.classList.add('meme-top-text');
    memeImg.src = picture;
    memeImg.classList.add('meme-image');
    memeBottomText.innerText = bottom;
    memeBottomText.classList.add('meme-bottom-text');

    meme.appendChild(memeTopText);
    meme.appendChild(memeImg);
    meme.appendChild(memeBottomText);
    return meme;
}




//const topTextInput = document.querySelector('#add-top-text');
//topTextInput.addEventListener('submit', function (e) {
//  e.preventDefault();
//const topText = document.createElement('li');

//    topText.innerText = topTextInput.value;
//  newMeme.appendChild(topText)
//topTextInput.value = '';

//});


//const contatiner = document.getElementById("meme-gallery")
//const topText = document.getElementById("top-text")
//const topTextElement = document.createElement("p")
//topTextElement.id = "topText "
//topText.texctContent = topText
// attach the text element to the contatiner
//contatiner.appenchild(topTextElement)