function getTotalPrice(id){
    const phonePriceElementFromId  =document.getElementById(id)
    const phonePriceElementFromIdString = phonePriceElementFromId.innerText
    const phonePriceElemennt = parseInt(phonePriceElementFromIdString)
    return phonePriceElemennt

}

function setTextElementByValueId(elementId,value){
    
    const getElement  = document.getElementById(elementId)//''soho parameter disi but pass porsi '' wala tai pay nai
 
    getElement.innerText = value

}

function subTotalP()
{
    const totalOfphone =getTotalPrice('phone-total')
   const totalOfCase = getTotalPrice('case-total')
   const subTotal = totalOfphone+totalOfCase
   const taxstring = (subTotal*0.1).toFixed
   (2)//string hoye gese
   const tax = parseFloat(taxstring)
   console.log(tax);
   const finalTotal = subTotal+tax 
   

   setTextElementByValueId('sub-total',subTotal)
   setTextElementByValueId('tax-total',tax)
   setTextElementByValueId('final-total',finalTotal)

//    //tax calculation joratali version
// const taxString =subTotal*0.1
// const tax = parseFloat(taxString).toFixed(2)
// const taxprice= document.getElementById('tax-total')
// taxprice.innerText = tax
// //

// //final total
// const finalTotal = subTotal+taxString
// console.log(finalTotal);


// const final = document.getElementById('final-total')
// final.innerText = finalTotal

   
}