const text = "Hello, World! I am a Typewriter Effect.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();