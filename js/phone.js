function updateTheNumberOfTotalPhone(isCompare){
    const phoneNumber = document.getElementById('phone-number-field')
const previousPhoneNumberString = phoneNumber.value
const previousPhoneNumber = parseInt(previousPhoneNumberString)

let newPhoneNumber
if(isCompare===true){
    newPhoneNumber = previousPhoneNumber+1
}
else{
    newPhoneNumber = previousPhoneNumber-1
}
phoneNumber.value = newPhoneNumber
return newPhoneNumber

}

function updateTotalPhonePrice(phnTotalNumber){
    const phonePrice = phnTotalNumber*1219

    const showPhonePrice = document.getElementById('phone-total')
    showPhonePrice.innerText = phonePrice
    return phonePrice
}



document.getElementById('btn-plus-phn').addEventListener('click',function () {
   const phnTotalNumber =  updateTheNumberOfTotalPhone(true)
   updateTotalPhonePrice(phnTotalNumber)
   subTotalP()

   
  
 
    
})
document.getElementById('btn-minus-phn').addEventListener('click',function () {
   const phnTotalNumber =  updateTheNumberOfTotalPhone(false)
   updateTotalPhonePrice(phnTotalNumber)
   subTotalP()
})