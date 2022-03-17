//     function initActive(){
//     const listaAtiva = document.querySelectorAll('.activeLine div')

//         function activeLine(index) {
            
//             listaAtiva.forEach((div) => {
//                 div.classList.remove('ativo')
//             })
//         listaAtiva[index].classList.add('ativo')
//         }

//         listaAtiva.forEach((itemLine, index) => {
//         itemLine.addEventListener('click', () => {
//         activeL(index)
// }
// initActive();


function initActiveBar() {
    
    const tabMenu = document.querySelectorAll('.tabMenu div')
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

}initActiveBar()
    
//     if (tabMenu.length && tabContent.length) {
//         tabContent[0].classList.add('ativo') //adicionei a classe no 1° item
    
//         function activeBar(index) {
//             tabContent.forEach((div) => {
//                 div.classList.remove('ativo')
//             })
//             tabContent[index].classList.add('ativo')
//         }
    
//         tabMenu.forEach((itemMenu, index) => {
//             itemMenu.addEventListener('click', () => {
//                 activeBar(index)
//             })
//         })

        
//     }
// }
// initActiveBar();

