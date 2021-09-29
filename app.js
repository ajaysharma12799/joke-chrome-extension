fetch("https://icanhazdadjoke.com/slack")
.then((response) => response.json())
.then((data) => {
    const target = document.getElementById("target_element");
    target.innerHTML = data.attachments[0].text
})
.catch((error) => {
    console.error(error);
});