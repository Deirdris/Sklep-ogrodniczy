function addProduct() {

    var item = {};

    document.querySelectorAll('.other').forEach(function (el){
        item[el.id] = el.value;
    })

    var lista = JSON.parse(localStorage.getItem('lista'));

    if (lista===null) lista=[];
    lista.push(item);
    localStorage.setItem('lista', JSON.stringify(lista));
}
function erase(){
    localStorage.clear();
    location.reload();
}
function eraseParticular() {


    var lista = JSON.parse(localStorage.getItem('lista'));

    if (lista!=null){
        lista.splice(document.getElementById('usun').value,1);
    }

    localStorage.setItem('lista', JSON.stringify(lista));
    location.reload();
}