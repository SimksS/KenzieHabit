

//  CHECK BOX VALIDATION
const doneTask = (e)=>{
    if(e.target.checked){
        const task__item = e.target.parentNode
        task__item.classList.add("done")
        const task__title = task__item.querySelector(".task__title")
        task__title.classList.add("done_text")
    }
    else{
        const task__item = e.target.parentNode
        task__item.classList.remove("done")
        const task__title = task__item.querySelector(".task__title")
        task__title.classList.remove("done_text")
    }
    
}

const checkBoxValidate = document.querySelectorAll("#check")
checkBoxValidate.forEach((item)=>{
    item.addEventListener("change",doneTask)
})

//TOAST ANIMATE
const toastTest = document.querySelector("body")
toastTest.addEventListener("keyup",(e)=>{
    if(e.key == "s"){
        document.querySelector("#sucess").style.display = "flex"
        setTimeout(() => {
            document.querySelector("#sucess").animate([
                {opacity : "0.9"},
                {opacity: "0.6"},
                {opacity: "0.3"},
                {opacity: "0.1"},
                {opacity: "0.0"},
            ],{
                duration: 4000,
                iteration: 1
            })
        }, 2000);
        setTimeout(() => {
            document.querySelector("#sucess").style.display = "none"
        }, 6000);
        
    }
    else if(e.key == "e"){
        document.querySelector("#error").style.display = "flex"
        setTimeout(() => {
            document.querySelector("#error").animate([
                {opacity : "0.9"},
                {opacity: "0.6"},
                {opacity: "0.3"},
                {opacity: "0.1"},
                {opacity: "0.0"},
            ],{
                duration: 4000,
                iteration: 1
            })
        }, 2000);
        setTimeout(() => {
            document.querySelector("#error").style.display = "none"
        }, 6000);
    }
})