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


