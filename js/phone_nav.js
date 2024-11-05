const btn = document.getElementsByClassName('bx-menu')[0]

btn.addEventListener('click',function(){
    const ops = document.getElementsByClassName('phone_navigation_options_container')[0]

    if(ops.style.display == 'inline-flex'){
        ops.style.cssText=`display:none;`
    }else{
        ops.style.display='inline-flex'
    }
})
