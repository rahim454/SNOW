// top navbar fixed by scroll

const navBar = document.querySelector("#mainContainer");
const subNavbar = document.querySelector("#myNav");

window.addEventListener("scroll",function(){
    if((document.body.scrollTop > 66) || (document.documentElement.scrollTop > 66)){
        navBar.classList.add("lockNavbar")
        subNavbar.classList.add("lockSubNavbar")
    }else{
        navBar.classList.remove("lockNavbar")
        subNavbar.classList.remove("lockSubNavbar")
    }

    // any where click or scroll without navItem then hide navItem

    if(navUl.classList.contains("show_hidenavItem")){
        navUl.classList.remove("show_hidenavItem")
    }

})

// show and hide navItem

const navBarIcon = document.querySelector(".myNavIcon");
const navUl = document.querySelector(".navbarItem ul");

navBarIcon.addEventListener("click",()=>{
    navUl.classList.toggle("show_hidenavItem")
})

// every li click then hide navItem

const navAllLia = document.querySelectorAll(".navbarItem ul li a");

navAllLia.forEach(singleLia=>{
    singleLia.addEventListener("click",()=>{
        if(navUl.classList.contains("show_hidenavItem")){
            navUl.classList.remove("show_hidenavItem")
        }
    })
})


// contact form add javascript

const fullName = document.querySelector("#name")
const email = document.querySelector("#email")
const number = document.querySelector("#number")
const comment = document.querySelector("#comment")

const submitButton = document.querySelector("#submitBtn")


submitButton.addEventListener("click",(e)=>{

    if(fullName.value === ""){
        fullName.classList.add("alert")
        e.preventDefault();
    }else{
        fullName.classList.remove("alert")
    }

    if((email.value === "")||(!email.contains === "@")){
        email.classList.add("alert")
        e.preventDefault();
    }else{
        email.classList.remove("alert")
    }

    if(!(number.value.length === 11)){
        number.classList.add("alert")
        e.preventDefault();
    }else{
        number.classList.remove("alert")
    }

    if(comment.value === ""){
        comment.classList.add("alert")
        e.preventDefault();
    }else{
        comment.classList.remove("alert")
    }

})


// already alert show then when focus input then remove alert
// copy or past not allowed

const allInputBox = document.querySelectorAll(".contactBox_input form input")

allInputBox.forEach((singleInputBox,index)=>{
    singleInputBox.addEventListener("keypress",()=>{
        if(singleInputBox.classList.contains("alert")){
            singleInputBox.classList.remove("alert")
        }
    })
    singleInputBox.addEventListener("copy",function(e){
        e.preventDefault()
    })
    singleInputBox.addEventListener("paste",function(e){
        e.preventDefault()
    })
})

comment.addEventListener("keypress",()=>{
    if(comment.classList.contains("alert")){
        comment.classList.remove("alert")
    }
})
comment.addEventListener("paste",function(e){
    e.preventDefault()
})
comment.addEventListener("copy",function(e){
    e.preventDefault()
})


AOS.init({
    delay: 300
});

