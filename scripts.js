document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const postContent = event.target.previousElementSibling;
      if (postContent.classList.contains("expanded")) {
        postContent.classList.remove("expanded");
        postContent.textContent = postContent.dataset.originalContent;
        event.target.textContent = "Read More";
      } else {
        postContent.dataset.originalContent = postContent.textContent;
        postContent.textContent = postContent.dataset.fullContent;
        postContent.classList.add("expanded");
        event.target.textContent = "Read Less";
      }
    });
  });
});
