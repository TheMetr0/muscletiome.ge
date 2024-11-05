const creatine_btn = document.getElementsByClassName('checkbox-input')[0]
const protein_btn = document.getElementsByClassName('checkbox-input')[1]
const omega3_btn = document.getElementsByClassName('checkbox-input')[2]
const pre_btn = document.getElementsByClassName('checkbox-input')[3]
const amino_btn = document.getElementsByClassName('checkbox-input')[4]
const product_list = document.querySelectorAll('.product_container')
let product_names = document.querySelectorAll('.product_name')

function filter(name,name1,name2,name3){
    product_list.forEach((elem,i)=>{
        if(product_names[i].textContent.includes(name)||product_names[i].textContent.includes(name1) ||product_names[i].textContent.includes(name2)||product_names[i].textContent.includes(name3)){
            elem.style.cssText = `
            display:inline-flex
            `
        }
        else{
            elem.style.cssText = `
            display:none
            `
        }
    })
}
function uncheck(){
    product_list.forEach((elem,i)=>{
        elem.style.cssText = `
        display:inline-flex
        `
    })
}



creatine_btn.addEventListener('change',function(){
    if(this.checked){
        omega3_btn.checked = false
        protein_btn.checked=false
        pre_btn.checked = false
        amino_btn.checked=false
        filter('Creatine')
    }
    else(
        uncheck()
    )
})
protein_btn.addEventListener('change',function(){
    if(this.checked){
        omega3_btn.checked = false
        creatine_btn.checked=false
        pre_btn.checked = false
        amino_btn.checked=false
        filter('Protein',"PROBOLIC")
    }
    else{
        uncheck()
    }

})
omega3_btn.addEventListener('change',function(){
    if(this.checked){
        creatine_btn.checked = false
        protein_btn.checked=false
        pre_btn.checked = false
        amino_btn.checked=false
        filter('Omega','Activite','Collagen','Vitamin')
       
    }
    else(
        uncheck()
    )
})
pre_btn.addEventListener('change',function(){
    if(this.checked){
        creatine_btn.checked = false
        protein_btn.checked=false
        omega3_btn.checked = false
        amino_btn.checked=false
        filter('Pre-Workout','HYPER CRUSH')
       
    }
    else(
        uncheck()
    )
})
amino_btn.addEventListener('change',function(){
    if(this.checked){
        creatine_btn.checked = false
        protein_btn.checked=false
        omega3_btn.checked = false
        pre_btn.checked=false
        filter('Amino')
       
    }
    else(
        uncheck()
    )
})

// creatine_btn.addEventListener('change', function(){
//     if(this.checked){
//         product_list.forEach((elem,i) => {
//             if(product_names[i].textContent.includes('Creatine')){
//                 elem.style.cssText = `
//                 display:inline-flex;
//                 `
//             }
//             else{
//                 elem.style.cssText = `
//                 display:none;
//                 `
//             }
//         })
//     }
//     else{
//         product_list.forEach((elem,i) => {

//             elem.style.cssText = `
//             display:inline-flex;
//             `
//         })
//     }
    
// })

// protein_btn.addEventListener('change', function(){
//     if(this.checked){
//         product_list.forEach((elem,i) => {

//             if(product_names[i].textContent.includes('Protein')){
//                 elem.style.cssText = `
//                 display:inline-flex;
//                 `
//             }
            
//         })
//     }
//     else{
//         product_list.forEach((elem,i) => {

//             elem.style.cssText = `
//             display:inline-flex;
//             `
//         })
//     }
    
// })