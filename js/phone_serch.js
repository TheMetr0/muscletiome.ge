const phone_creatine_btn = document.getElementsByClassName('checkbox-input')[5]
const phone_protein_btn = document.getElementsByClassName('checkbox-input')[6]
const phone_omega3_btn = document.getElementsByClassName('checkbox-input')[7]
const phone_pre_btn = document.getElementsByClassName('checkbox-input')[8]
const phone_amino_btn = document.getElementsByClassName('checkbox-input')[9]
const phone_product_list = document.querySelectorAll('.product_container')
let phone_product_names = document.querySelectorAll('.product_name')

function filter(name,name1,name2,name3){
    phone_product_list.forEach((elem,i)=>{
        if(phone_product_names[i].textContent.includes(name)||phone_product_names[i].textContent.includes(name1) ||phone_product_names[i].textContent.includes(name2)||phone_product_names[i].textContent.includes(name3)){
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
    phone_product_list.forEach((elem,i)=>{
        elem.style.cssText = `
        display:inline-flex
        `
    })
}



phone_creatine_btn.addEventListener('change',function(){
    if(this.checked){
        phone_omega3_btn.checked = false
        phone_protein_btn.checked=false
        phone_pre_btn.checked = false
        phone_amino_btn.checked=false
        filter('Creatine')
    }
    else(
        uncheck()
    )
})
phone_protein_btn.addEventListener('change',function(){
    if(this.checked){
        phone_omega3_btn.checked = false
        phone_creatine_btn.checked=false
        phone_pre_btn.checked = false
        phone_amino_btn.checked=false
        filter('Protein',"PROBOLIC")
    }
    else{
        uncheck()
    }

})
phone_omega3_btn.addEventListener('change',function(){
    if(this.checked){
        phone_creatine_btn.checked = false
        phone_protein_btn.checked=false
        phone_pre_btn.checked = false
        phone_amino_btn.checked=false
        filter('Omega','Activite','Collagen','Vitamin')
       
    }
    else(
        uncheck()
    )
})
phone_pre_btn.addEventListener('change',function(){
    if(this.checked){
        phone_creatine_btn.checked = false
        phone_protein_btn.checked=false
        phone_omega3_btn.checked = false
        phone_amino_btn.checked=false
        filter('Pre-Workout','HYPER CRUSH')
       
    }
    else(
        uncheck()
    )
})
phone_amino_btn.addEventListener('change',function(){
    if(this.checked){
        phone_creatine_btn.checked = false
        phone_protein_btn.checked=false
        phone_omega3_btn.checked = false
        phone_pre_btn.checked=false
        filter('Amino')
       
    }
    else(
        uncheck()
    )
})
