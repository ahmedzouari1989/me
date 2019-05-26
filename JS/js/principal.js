
var paragraphe = document.getElementById("texte")
var col=document.getElementById("bouton")
function changeSize()
{   if(paragraphe.style.fontSize=="1em")
    {
        paragraphe.style.fontSize="2em"
        col.style.backgroundColor = "blue"
    }
    else
    {
        paragraphe.style.fontSize="1em"
        col.style.backgroundColor = "red"
    }
}

function selectionnertexte()
{
     
     document.getElementById('texte').select();
}


function italique()
   {
       if(document.getElementById('texte').style.fontStyle !='italic')
       document.getElementById('texte').style.fontStyle='italic'

        else
        document.getElementById('texte').style.fontStyle='normal'

   }
    
   function gras()
   {
       if(paragraphe.style.fontWeight !='bold')
        paragraphe.style.fontWeight='bold'
        else
        paragraphe.style.fontWeight='normal'
   }
    
   function souligne()
   {
       if(paragraphe.style.textDecoration !='underline')
       paragraphe.style.textDecoration ='underline'
       else
       paragraphe.style.textDecoration ='none'
   }

   function effacer()
   {
   document.getElementById('texte').value="";
   }