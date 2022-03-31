function initActive(){
    const listaAtiva = document.querySelectorAll('.fundo-nomes')

    function activeLine(index) {
        
        listaAtiva.forEach((div) => {
            div.classList.remove('ativo')
        })
    listaAtiva[index].classList.add('ativo')
    }

    listaAtiva.forEach((itemLine, index) => {
        itemLine.addEventListener('click', () => {
        activeLine(index)
        })
    })

}
initActive();


function initActiveBar() {
    
    const tabMenu = document.querySelectorAll('.fundo-nomes')
    const tabContent = document.querySelectorAll('.tabContent section')
    
    function activeBar(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo')
    })
        tabContent[index].classList.add('ativo')
}
        tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
        activeBar(index)
})
})

}
initActiveBar()