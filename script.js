// DOM Element
const mainPage=document.querySelector('.main-page')
const loginPage=document.querySelector('.login-page')
const middleContent=document.querySelector('.middle-content')
const btnTop=document.querySelector('.btn-top')
const newFeedspage=document.querySelector('.feeds-page')

const loginModal=document.querySelector('.login-modal')
const modalX=document.querySelector('.login-modal i')
const loginFormBtn=document.querySelector('.login-form-btn')
const postBtn=document.querySelector('.post-btn')
const modalWrapper=document.querySelector('.modal-wrapper')
const modal=document.querySelector('.modal')
const postModalX=document.querySelector('.modal-header i')
const modalpostbtn=document.querySelector('.modal-header button')
const modalFooterPlus=document.querySelector('.modal-footer span')
const modalinput=document.querySelector('.modal-input')
const user=document.querySelector('.user')
const sidebar=document.querySelector('.sidebar')
const sidebarwrapper=document.querySelector('.sidebar-wrapper')
const xBtn=document.querySelector('.sidebar-header i')
const toggle=document.querySelector('.toggle')
const  circle=document.querySelector('.circle')
const darkElement1=document.querySelectorAll('.dark-mode-1')
const darkElement2=document.querySelectorAll('.dark-mode-2')
const lightText=document.querySelectorAll('.light-text')
const borders=document.querySelectorAll('.border')




/******************************************/ 
/******************************************/ 

// Main Page
const goToLoginPage=()=>{
    mainPage.style.display='none'
    loginPage.style.display='grid'   
};

middleContent.addEventListener('click',e => {
    if(e.target.classList[1]==="main-btn"){
        goToLoginPage();

    }
});
btnTop.addEventListener('click',() => {
    const inputuserInfo=document.querySelector('.user-info');
    const inputpassword=document.querySelector('.password')
    // console.log(inputuserInfo.value)

    if(inputuserInfo.value !== "" && inputpassword.value !== "")
    {
        mainPage.style.display='none'
        newFeedspage.style.display='block'
    }
    else{
        goToLoginPage();
        loginModal.style.display='block'
    }

});

modalX.addEventListener('click',()=>{
    loginModal.style.display='none'

});

// Login Page
loginFormBtn.addEventListener('click',() => {
    const loginUserInfo=document.querySelector('.login-user-info');
    const loginpassword=document.querySelector('.login-password');
    
    if(loginUserInfo.value !== ""  && loginpassword.value !== "" ){
        loginPage.style.display='none';
        newFeedspage.style.display='block';
    }
    else{
        loginModal.style.display='block';
        // goToLoginPage();
    }
});


// News Feed Page
// Post Modal
postBtn.addEventListener('click',()=>{
    modal.style.display='block';
    modalWrapper.classList.add('modal-wrapper-display');


});

const changeOpacity= x => {
    modalpostbtn.style.opacity=x;
    modalFooterPlus.style.opacity=x;


};


postModalX.addEventListener('click',()=>{
    modal.style.display='none'
    modalWrapper.classList.remove('modal-wrapper-display')
    if(modalinput.value!==""){
        modalinput.value="";
        changeOpacity(0.5);
    }
});

modalinput.addEventListener('keypress',e => {
    if(e.target.value!==""){
        changeOpacity(2);

    }    
});
modalinput.addEventListener('blur',(e)=>{
    if(e.target.value===''){
        changeOpacity(0.5);
    }

});
// SideBar
user.addEventListener('click',()=>{
    sidebar.classList.add('sidebar-display')
    sidebarwrapper.classList.add('sidebar-wrapper-display')


});

xBtn.addEventListener('click',()=>{
    sidebar.classList.remove('sidebar-display')
    sidebarwrapper.classList.remove('sidebar-wrapper-display')

});
toggle.addEventListener('click',()=>{
    circle.classList.toggle('move');
    Array.from(darkElement1).map(darkEl1=>
    darkEl1.classList.toggle('dark-1')
    );
    Array.from(darkElement2).map(darkEl2=>
    darkEl2.classList.toggle('dark-2')
    );
    Array.from(lightText).map(lightEle=>
    lightEle.classList.toggle('light')
    );
    Array.from(borders).map(border=>
    border.classList.toggle('border-color')


    )

});




