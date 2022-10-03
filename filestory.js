document.getElementById("enter").addEventListener('click', function() {
    location.href="index.html"
});


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

function Sentences(){
typeSentence("As a wandering Nomad in the tibetan mountains, you have been to countless villages and gurus to find peace.", "#right1")
.then(() => typeSentence("However, several months into your journey, you find a small temple tucked between two unfamiliar, radiating mountains.", "#right2"))
.then(() => typeSentence("A large voice booms down from above and says, 'ENTER YOUNG ONE. FOR I WILL TELL YOU YOUR FORTUNE!'", "#right3"))
.then(() => typeSentence("Without hesitation, you decide to enter the meditation room.", "#right4"))

}
Sentences()




