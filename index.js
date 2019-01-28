let cells = document.getElementsByClassName("delegate-item");
let returnDelegates = [];
for (let i in cells) {
  let inner_lis = cells[i].getElementsByTagName("li");
  for (let x in inner_lis) {
    let inner = inner_lis.innerHTML.trim();
    if (inner.indexOf("Is public delegate?") > -1) {
      let i_tag = inner_lis[x].getElementsByTagName("i");
      if (i_tag.classList.contains("text-green")) {
        returnDelegates.push(cells[i]);
      }
    }
  }
}
