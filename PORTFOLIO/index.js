const textBox = document.querySelector("textarea");
const counter = document.querySelector(".counter");
const paragraph = document.querySelector("#firstParagraph");
const button = document.querySelector("#firstBtn");

const maxLength = 200;

textBox.addEventListener("input", function () {
    const length = textBox.value.length;
    counter.innerText = `Characters typed: ${length} / ${maxLength}`;

    if (length > maxLength) {
        counter.classList.add("warning");
        counter.innerText = `Limit exceeded! (${length} / ${maxLength})`;
    } else {
        counter.classList.remove("warning");
    }
});

button.addEventListener("click", function () {
    paragraph.innerText = `As a frontend developer, I focus on creating high-performance interfaces optimized for speed, accessibility, and scalability. 
    I enjoy working with modern stacks like React, Next.js, and Tailwind CSS, integrating APIs, and ensuring seamless cross-platform responsiveness. 
    I believe that technology should simplify life — and my mission is to design and develop solutions that do exactly that. 
    Constantly experimenting with new tools and frameworks keeps me at the forefront of frontend innovation, ensuring every project I deliver is modern, reliable, and future-ready.`;
});
const nameInput = document.querySelector("#name");
const mailInput = document.querySelector("#mail");
const phoneInput = document.querySelector("#tel"); // or your actual button selector
const submit = document.querySelector("#btns23");
submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
  } else if (mailInput.value.trim() === "") {
    alert("Please enter your email address.");
  } else if (phoneInput.value.trim() === "") {
    alert("Please enter your mobile number.");
  } else {
    alert("Thank you! Your details have been submitted successfully.");
  }
});
