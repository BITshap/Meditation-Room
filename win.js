document.getElementById("again").addEventListener('click', function() {
    location.href ="index.html"
    printMessage("You already passed.. don't have to do this again", '#repeat')
})

function printMessage(sentence, elementRef) {
    return $(elementRef).append(sentence);
}


async function typeSentence(sentence, elementRef, delay = 40) {
    const letters = sentence.split("");
    i = 0;
    while (i < sentence.length) {
        await waitForMs(delay);
        $(elementRef).append(letters[i]);
        i++
    }
    return;
}

function waitForMs(ms){
    return new Promise (resolve => setTimeout(resolve, ms))
}

typeSentence("I am impressed by your curiousity young one. You may continue along your journey!", '#wintext')
