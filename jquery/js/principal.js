


    $("#sel").click(function(){
    $("#texte").select()
    });

   $("#it").click(function(){
        if($("#texte").css("fontStyle") !='italic')
        $("#texte").css("fontStyle","italic") 
        else
        $("#texte").css("fontStyle","normal")
   });

   $("#gr").click(function(){
    if($("#texte").css("fontWeight") =="400")
    $("#texte").css("fontWeight","700") 
    else
    $("#texte").css("fontWeight","400")
    });

    $("#sl").click(function(){
        console.log($("#texte").css("text-Decoration"))
        if($("#texte").css("textDecoration") =="none solid rgb(0, 0, 0)")
        $("#texte").css("textDecoration","underline")
        else
        $("#texte").css("textDecoration","none")
        });
        
    $("#tc").change(function(){
    console.log($("#tc").val())
    $("#texte").css("fontSize",$("#tc").val())
    });

    $("#ef").click(function(){
        console.log($("#ef").val())
        $("#texte").val("")
        });

    