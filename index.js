let tables = [];

const inputANode = document.querySelector('.flong');
const inputANuNode = document.querySelector('.fnumber');
const inputBNode = document.querySelector('.dlong');
const selectOperationNode = document.querySelector('.select-operation');
const btnResultNode = document.querySelector('.bresult');
const outputNodeN = document.querySelector('.outputN');
const outputNodeL = document.querySelector('.outputL');
const outputNodeD = document.querySelector('.outputD');
const outputNodeM = document.querySelector('.outputM');
const tablesNode = document.querySelector('.tables');

function addTable(number, long, dimity, value) {
  const table = {
    number,
    long,
    dimity,
    value,
    done: false,
    id: `${Math.random()}`
  };

  tables.push(table)
}
function deleteTable(id) {
  tables.forEach(table => {
    if (table.id === id) {
      table.done = true;
    }
  })
}

function render() {
  console.log(tables)
  let html = '';

  tables.forEach(table => {
    if (table.done) {
      return
    }

    html += `
    <tr>
      <th>Номер дерева</th>
      <th>Длина</th>
      <th>Диаметр</th>
      <th>Объем</th>
    </tr>
    <tr>
      <td>${outputNodeN.innerHTML}</td>
      <td>${outputNodeL.innerHTML}</td>
      <td>${outputNodeD.innerHTML}</td>
      <td>${outputNodeM.innerHTML}</td>
    </tr>
    `;
  })
  tablesNode.innerHTML = html
}


btnResultNode.addEventListener('click', function () {
  event.preventDefault();
  const a = Number(inputANode.value);
  const b = Number(inputBNode.value);
  const n = Number(inputANuNode.value);
  const operation = selectOperationNode.value;


  const result = calculator({ a, b, operation });

  outputNodeM.innerHTML = result;
  outputNodeL.innerHTML = a;
  outputNodeD.innerHTML = b;
  outputNodeN.innerHTML = n;

  addTable(n, a, b, result)


  render()

});


function Obyem (woodSpecie, a, b, m) {
  

}








// <div>
// <tr>
//         <td>${outputNodeN.innerHTML}</td>
//         <td>1</td>
//         <td>1</td>
//         <td>1</td>
//       </tr>
// </div>