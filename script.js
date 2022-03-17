// function initActive(){
//     const listaAtiva = document.querySelectorAll('.activeLine div')

//     console.log(listaAtiva)
//     if(listaAtiva.length) {
//         function activeLine() {
//             this.classList.add('ativo')
//         }

//         listaAtiva.forEach((item) => {
//             item.addEventListener('click', activeLine)
//         })
//     }
// }
// initActive();


function initActiveBar() {
    const tabMenu = document.querySelectorAll('.tabMenu div')
    const tabContent = document.querySelectorAll('.tabContent section')
    console.log(tabMenu)
    console.log(tabContent)
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

