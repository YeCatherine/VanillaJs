(function tableCreate() {
  let body = document.body;
  let table = document.createElement('table');

  const handleClick = (e) => {
    console.time(`${e.currentTarget} click ms`);
    console.log(`click on ${e.currentTarget} number --`, e.target.innerText);
    console.timeEnd(`${e.currentTarget} click ms`);
  };

  table.addEventListener('click', handleClick);
  body.addEventListener('click', handleClick);

  for (let i = 0; i < 10; i++) {
    let tableRow = table.insertRow();
    for (let j = 0; j < 10; j++) {
      let tableCol = tableRow.insertCell();
      let cell = document.createTextNode(`${i},${j}`);
      tableCol.appendChild(cell);
      tableCol.style.border = '1px solid black';

      tableCol.setAttribute('draggable', true);

      tableCol.addEventListener('dragstart', dragStart);
      tableCol.addEventListener('dragend', dragEnd);

      tableCol.addEventListener('click', handleClick);
    }
  }

  body.appendChild(table);
})();

const tds = document.querySelectorAll('td');
for (const td of tds) {
  td.addEventListener('dragover', dragOver);
  td.addEventListener('dragenter', dragEnter);
  td.addEventListener('dragleave', dragLeave);
  td.addEventListener('drop', dragDrop);

}

let firstTarget;
let secondTarget = ' ';

function dragStart(e) {
  this.className += ' hold';
  firstTarget = e.target.innerText;
  this.prepend(secondTarget);
  this.removeChild(this.lastChild);
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'td';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop(e) {
  this.className = 'empty';
  secondTarget =  e.target.innerText;
  this.prepend(firstTarget);
  this.removeChild(this.lastChild)
}
