const btn=document.getElementById("btn")

btn.addEventListener('click',function(){

    

    try {
        let value=document.getElementById('inp').value

        if(value=="") throw'age cannot be blank'

        if(isNaN(value))throw'age should be a number'

        if(value<18)throw'age should be above 18'

        document.getElementById('result').innerHTML="entered age is " +value
        
    } catch (error) {
        document.getElementById('result').innerHTML=error
        
    }

    finally{
        document.getElementById('finally').innerHTML="hi im finally, i will run no matter what happens above"
    }
})