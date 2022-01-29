function calculate(tipPercentage)
{
    let bill = document.getElementsByName("bill")[0].value;
    let people = document.getElementsByName("people")[0].value;

    if(tipPercentage != '' && bill != '' && people != '' && people != 0)
    {   
        bill = parseFloat(bill);
        tipPercentage = parseFloat(tipPercentage);
        people = parseFloat(people);
        let totalTip = (bill*tipPercentage)/100;
        let tipPerPerson = totalTip/people;
        let billPerPerson = bill/people + tipPerPerson;
        
        document.querySelectorAll(".text-3")[0].textContent = "$" + tipPerPerson.toFixed(2);
        document.querySelectorAll(".text-3")[1].textContent = "$" + billPerPerson.toFixed(2);
    }
    else if(tipPercentage != '' && bill != '' && (people == '' || people == 0))
    {
        document.getElementsByName("people")[0].setAttribute("id","warning");
        document.querySelector(":root").style.setProperty("--value","1");
    }
}

//Bill and Button Opacity Relation
document.getElementsByName("bill")[0].addEventListener("input",function(event){
    
    if(this.value == '')
    {
        document.getElementsByTagName("button")[0].classList.remove("button-opacity");
    }
    else{
        document.getElementsByTagName("button")[0].classList.add("button-opacity");
    }
});

document.getElementsByName("people")[0].addEventListener("focus",function(){
    this.setAttribute("id","");
    document.querySelector(":root").style.setProperty("--value","0");
});
//Custom Input Field
document.getElementsByName("custom")[0].addEventListener("input",function(){
    calculate(this.value);
});


//Tip Percentage
let len = document.querySelectorAll(".u-i-2 > div div").length;
for(let i=0;i<len-1;i++)
{
    document.querySelectorAll(".u-i-2 > div div")[i].addEventListener("click",function(){
        calculate(this.textContent.slice(0,-1));
    });
}


//RESET FUNCTIONALITY
document.getElementsByTagName("button")[0].addEventListener("click",function()
{
    // Make Button Transparent
    document.getElementsByTagName("button")[0].classList.remove("button-opacity");
    document.getElementsByName("people")[0].setAttribute("id","");
    document.querySelector(":root").style.setProperty("--value","0");
    //Reset Amount Values
    let len = document.querySelectorAll(".text-3").length;
    for(let i=0;i<len;i++)
    {
        document.querySelectorAll(".text-3")[i].textContent = "$0.00";
    }

    //Reset all the input field values
    len = document.querySelectorAll("input").length;
    for(let i=0;i<len;i++)
    {
        document.querySelectorAll("input")[i].value = null;
    }
});