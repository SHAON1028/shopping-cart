function updateTheNumberOfTotalCase(isCompare){
const caseNumber = document.getElementById('case-number-field')
const previousCaseNumberString = caseNumber.value
const previousCaseNumber = parseInt(previousCaseNumberString)
let newCaseNumber
if(isCompare===true)
{
    newCaseNumber = previousCaseNumber+1
}
else{
    newCaseNumber = previousCaseNumber-1
}
 caseNumber.value = newCaseNumber
 return newCaseNumber

}

function updateTotalCaePrice(caseTotalumber){
    const casePrice = caseTotalumber*59
    const showCasePrice = document.getElementById('case-total')
    showCasePrice.innerText = casePrice
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
    
    const caseTotalumber =  updateTheNumberOfTotalCase(true)
    updateTotalCaePrice(caseTotalumber)
    subTotalP()
}
)
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseTotalumber = updateTheNumberOfTotalCase(false)
    updateTotalCaePrice(caseTotalumber)
    subTotalP()
}
)