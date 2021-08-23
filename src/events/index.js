/**
 * The IIFE Table create function.
 */
(function tableCreate() {
  let body = document.body;
  let table = document.createElement('table');

  /**
   * The function expression for handling click event.
   * @param e {Object} The current cell.
   */
  const handleClick = (e) => {
    console.time(`${e.currentTarget} click ms`);
    console.log(`click on ${e.currentTarget} number --`, e.target.innerText);
    console.timeEnd(`${e.currentTarget} click ms`);
  };

  table.addEventListener('click', handleClick);
  body.addEventListener('click', handleClick);

  /**
   * The table generation loop.
   */
  for (let i = 0; i < 100; i++) {
    let tableRow = table.insertRow();
    for (let j = 0; j < 100; j++) {
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

  const tds = document.querySelectorAll('td');
  for (const td of tds) {
    td.addEventListener('dragover', dragOver);
    td.addEventListener('dragenter', dragEnter);
    td.addEventListener('drop', dragDrop);
  }

})();

let firstTarget;
let secondTarget = 'start';

/**
 * Starts the dragging.
 * @param e {Object} The cell to drag.
 */
function dragStart(e) {
  firstTarget = e.target.innerText;
  this.prepend(secondTarget);
  this.removeChild(this.lastChild);
}

/**
 * Ends the dragging event.
 */
function dragEnd() {
  this.className = 'td';
}

/**
 * Handles the dragging over cells.
 * @param e {Object} The cell to drag.
 */
function dragOver(e) {
  e.preventDefault();
}

/**
 * Handles the drag enter.
 * @param e {Object} The cell to drag.
 */
function dragEnter(e) {
  e.preventDefault();
}

/**
 * Handles the drop.
 * @param e {Object} The cell to drop.
 */
function dragDrop(e) {
  this.className = 'empty';
   secondTarget = e.target.innerText;
  this.prepend(firstTarget);
  this.removeChild(this.lastChild);
}
