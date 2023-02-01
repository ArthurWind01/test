function task1() {
    let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        row.cells[i].style.backgroundColor = 'red';
    }


}
function task2() {
    let elemnt = search.querySelectorAll('input');
    console.log(elemnt[elemnt.length-1]);
}

