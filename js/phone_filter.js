const nav_btn = document.getElementsByClassName('bx-filter')[0]

nav_btn.addEventListener('click',function(){
    const nav_ops = document.getElementsByClassName('phone_filter_options_container')[0]

    if(nav_ops.style.display == 'block'){
        nav_ops.style.cssText=`display:none;`
    }else{
        nav_ops.style.display='block'
    }
})