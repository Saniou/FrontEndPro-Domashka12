const myInput = document.querySelector("#input");
const message = document.querySelector("#message");

myInput.onfocus = () => {
	message.style.display = "block";
}

myInput.onblur = () => {
    message.style.display = "none";
}
