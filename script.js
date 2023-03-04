//your code here!
const list = document.querySelector("#infi-list");


for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `List item ${i}`;
  list.appendChild(li);
}

list.addEventListener("scroll", () => {
  const lastLi = list.lastElementChild;
  const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
  const pageOffset = window.pageYOffset + window.innerHeight;
  if (pageOffset > lastLiOffset - 20) {
    for (let i = 1; i <= 2; i++) {
      const li = document.createElement("li");
      li.textContent = `List item ${list.children.length + i}`;
      list.appendChild(li);
    }
  }
});
