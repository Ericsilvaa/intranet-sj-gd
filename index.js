function initListaGeral() {
    const tabMenu_lista = document.querySelectorAll('.lista-fins-fundo')

    console.log(tabMenu_lista)
        if(tabMenu_lista.length) {
        function activeLine () {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }
        
        tabMenu_lista.forEach((item) => {
            item.addEventListener('click', activeLine)
        })
    }
}
initListaGeral()


function initAccordion() {
    const tabMenu = document.querySelectorAll('.tab-menu-principal')
    
    console.log(tabMenu)

        if(tabMenu.length) {
        function activeLine () {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }
        
        tabMenu.forEach((item) => {
            item.addEventListener('click', activeLine)
        })
    }
}
initAccordion()


