var conjugationTable = (data) => {

  let tableWrapper = document.querySelector(".conjugation-table-wrapper");
  let tableElement = document.createElement("table");
  tableElement.classList.add("table");
  let testing = [0, 0, 0];
  let testingCells = [Object, Object, Object];

  for(let i=0; i < data[1].length; i++) {
    let tableElementRow = document.createElement("tr");
    for(let j=0; j < data.length; j++) {
      let cellText = "";
      if(data[j][i]) {
        let tableElementCell = document.createElement("td");
        cellText = document.createTextNode(data[j][i]);

        if(!data[j][i+1] && i != data[1].length-1) {
          testingCells[j] = tableElementCell;
          testingCells[j].rowSpan = 1;
        }

        tableElementCell.appendChild(cellText);
        tableElementRow.appendChild(tableElementCell);
      }else {
        testingCells[j].rowSpan += 1;
      }
    }
    tableElement.appendChild(tableElementRow);
  }

  tableWrapper.appendChild(tableElement);
  return tableWrapper;
}

export default conjugationTable;
