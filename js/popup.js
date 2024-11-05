const products = document.querySelectorAll(".product_container")

products.forEach((elem,i) => {
    elem.addEventListener(
        "click",
        function(){
            var del_btn = document.getElementsByClassName(`del_button_${i}`)[0]
            var cls = `product_popup_${i}`
           var popup = document.getElementsByClassName(`product_popup_${i}`)[0]
           popup.style.cssText = `
           display:block;
           `
           del_btn.addEventListener('click',function(){
            popup.style.cssText = `
            display:none;
            `
           })
        }
    )
})































// const products = document.querySelectorAll(".product_container")

// products.forEach(elem => {
//     elem.addEventListener('click',function(){
//         if(elem.classList.contains( "product_container_active")){
//             elem.style.cssText = `
//                 cursor: pointer;
//                 height: 300px;
//                 width: 30.33%;
//                 margin: 20px;
//                 padding-right: 10px;
//                 border: 2px solid rgba(0, 0, 0, 0.329);
//                 display: inline-flex;
//                 justify-content: center;
//                 align-items: center;
//                 // transition-duration: 0.8s;
//             `
//             document.getElementsByClassName('delete_button_container')[0].remove()
//             elem.classList.remove("product_container_active");
//             elem.classList.add("product_container");
//         }else{
//             elem.classList.remove("product_container");
//             elem.classList.add("product_container_active");
//                 elem.style.cssText = `
//                     display:inline-flex;
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     margin:0px;
//                     width: 100%;
//                     height: 100%;
//                     background: rgba(0, 0, 0, 0.5);
//                     color:white;
//                     z-index: 999;
//                 `
//                 const del = document.createElement('div')
//                 del.classList = "delete_button_container"
                
//                 const del_button = document.createElement('h1')
//                 del_button.classList = "del_button"
//                 del_button.textContent = "X"
//                 del_button.style.cssText=`
//                     color:red;
//                     margin:10px;
//                     font-family: Rubik;
//                 `
//                 del.append(del_button)
//                 elem.append(del)
//         }
//     })
    
// })
