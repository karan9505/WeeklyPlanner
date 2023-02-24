let daydata=document.getElementsByClassName("daydata");
console.log(daydata)
function AddNote()
{
    if(document.getElementById("Day").value=="Select Day")
    {
        document.getElementById("NoteEntry").value="Day not selected";
    }
    else if(document.getElementById("Day").value=="Sunday")
    {
        daydata[0].innerHTML+=document.getElementById("NoteEntry").value+'<br>';
        document.getElementById("NoteEntry").value="";
    }
    else if(document.getElementById("Day").value=="Monday")
    {
        daydata[1].innerHTML+=document.getElementById("NoteEntry").value+'<br>';
        document.getElementById("NoteEntry").value="";
    }
    else if(document.getElementById("Day").value=="Tuesday")
    {
        daydata[2].innerHTML+=document.getElementById("NoteEntry").value+'<br>';
        document.getElementById("NoteEntry").value="";
    }
    else if(document.getElementById("Day").value=="Wednesday")
    {
        daydata[3].innerHTML+=document.getElementById("NoteEntry").value+'<br>';
        document.getElementById("NoteEntry").value="";
    }
    else if(document.getElementById("Day").value=="Thursday")
    {
        daydata[4].innerHTML+=document.getElementById("NoteEntry").value+'<br>';
        document.getElementById("NoteEntry").value="";
    }
    else if(document.getElementById("Day").value=="Friday")
    {
        daydata[5].innerHTML+=document.getElementById("NoteEntry").value+'<br>';
        document.getElementById("NoteEntry").value="";
    }
    else if(document.getElementById("Day").value=="Saturday")
    {
        daydata[6].innerHTML+=document.getElementById("NoteEntry").value+'<br>';
        document.getElementById("NoteEntry").value="";
    }
    else if(document.getElementById("Day").value=="Note")
    {
        daydata[7].innerHTML+=document.getElementById("NoteEntry").value+'<br>';
        document.getElementById("NoteEntry").value="";
    }
    document.getElementById("Day").value="Select Day";
    
}

function ClearNote()
{
    if(document.getElementById("Day").value=="Select Day")
    {
        document.getElementById("NoteEntry").value="Day not selected";
    }
    else if(document.getElementById("Day").value=="Sunday")
    {
        daydata[0].innerHTML="";
    }
    else if(document.getElementById("Day").value=="Monday")
    {
        daydata[1].innerHTML="";
    }
    else if(document.getElementById("Day").value=="Tuesday")
    {
        daydata[2].innerHTML="";
    }
    else if(document.getElementById("Day").value=="Wednesday")
    {
        daydata[3].innerHTML="";
    }
    else if(document.getElementById("Day").value=="Thursday")
    {
        daydata[4].innerHTML="";
    }
    else if(document.getElementById("Day").value=="Friday")
    {
        daydata[5].innerHTML="";
    }
    else if(document.getElementById("Day").value=="Saturday")
    {
        daydata[6].innerHTML="";
    }
    else if(document.getElementById("Day").value=="Note")
    {
        daydata[7].innerHTML="";
    }
    document.getElementById("Day").value="Select Day";
}

function ClearText()
{  
    if(document.getElementById("NoteEntry").value=="Day not selected")
        document.getElementById("NoteEntry").value="";
}