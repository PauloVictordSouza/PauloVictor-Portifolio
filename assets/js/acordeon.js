<<<<<<< HEAD
const acordeonMove = document.querySelectorAll(".acordeon .trigger")

acordeonMove.forEach((trigger) =>{

    trigger.addEventListener("click", (e) =>{
        const acordeon = trigger.parentElement
        
        const isOpen = acordeon.classList.contains("open")

        if (isOpen) {
           acordeon.classList.remove('open')
        } else{
            acordeon.classList.add('open')
        }
    })

=======
const acordeonMove = document.querySelectorAll(".acordeon .trigger")

acordeonMove.forEach((trigger) =>{

    trigger.addEventListener("click", (e) =>{
        const acordeon = trigger.parentElement
        
        const isOpen = acordeon.classList.contains("open")

        if (isOpen) {
           acordeon.classList.remove('open')
        } else{
            acordeon.classList.add('open')
        }
    })

>>>>>>> cb3b63b238a22b004c87cbadb63e415d580bf3d5
})