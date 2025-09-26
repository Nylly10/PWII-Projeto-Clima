document.querySelector('.busca').addEventListener('submit', (event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    console.log(input)

    if(input !== ""){
        showWarning("Carrengando...")
    }else{

    }
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}