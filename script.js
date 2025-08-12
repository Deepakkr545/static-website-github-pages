// Typing Animation Effect
const typingText = document.querySelector(".typing-text");
const text = "Welcome to My Stunning Website";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();
