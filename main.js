function filterit()
   {$.get("/getAllNotes", function(data, status){  // AJAX get
  let Notes = data;});
  $.get("/getnNotes", function(data, status){  // AJAX get
  let Notesn = data;});
  $.get("/getsNotes", function(data, status){  // AJAX get
  let Notess = data;});
  $.get("/getdNotes", function(data, status){  // AJAX get
 let Notesd = data;});
 function displays(){titless="";for (let i=0;i<Notes.length;i++){ titless+=Notess[i].title+" due on "+Notess[i].day+" at "+Notess[i].time+"<br>";};}displays();
 document.getElementById("listUl2").innerHTML=titless;
 function displayd(){titlesd="";for (let i=0;i<Notes.length;i++){ titlesd+=Notesd[i].title+" due on "+Notesd[i].day+" at "+Notesd[i].time+"<br>";};}displayd();
 document.getElementById("listUl3").innerHTML=titlesd;
 function displayn(){titlesn="";for (let i=0;i<Notes.length;i++){ titlesn+=Notesn[i].title+" due on "+Notesn[i].day+" at "+Notesn[i].time+"<br>";};}displayn();
 document.getElementById("listUln").innerHTML=titlesn;
	
	};



at "+Notesn[i].time+"<br>";};
	};
		
  
  

document.addEventListener("DOMContentLoaded", function (event) {
	
	  uptitles();filterit();

    
    $(document).on('pagebeforeshow', '#Edit', function () {
       // let deleteListUl = document.getElementById("deleteListUl");
        //document.getElementById("deleteItem").value = "";
		filterit();uptitles();} );
		
	//


    document.getElementById("newNote").addEventListener("click", function () {
        let newNote = new Note( document.getElementById("title").value, 
           document.getElementById("day").value,
           document.getElementById("time").value, document.getElementById("statut").value) ;
        
		$.ajax({
            url : "/AddNote",
            type: "POST",
            data: JSON.stringify(newNote),
            contentType: "application/json; charset=utf-8",
            dataType   : "json",
            success: function (result) {
                console.log(result);
                //document.location.href = "index.html#Show";  // go to this page to show item was added
            }
        });
		
		filterit();uptitles();
		
		document.getElementById("title").value=""; 
        document.getElementById("day").value="";
        document.getElementById("time").value="" ;
		document.getElementById("statut").value="";
 });
 
     //

     
     
	 document.getElementById("delete").addEventListener("click", function () {
        let which = document.getElementById("deleteItem").value;

        $.ajax({
            type: "DELETE",
                url: "/DeleteNote/" +which,
                success: function(result){
                    console.log(result);
                    //document.location.href = "index.html#Show";  // go to this page to show item was deleted
                },
                error: function (xhr, textStatus, errorThrown) {  
                    console.log('Error in Operation');  
                    alert("Server could not delete Note with title " + which)
                }  
            });filterit();uptitles();document.getElementById("deleteItem").value="";

     });
 ;});  
 
 
 //
 
 $(document).on('pagebeforeshow', '#AddDelete', function () {
        document.getElementById("title").value = ""; 
        document.getElementById("day").value = ""; 
        document.getElementById("time").value  = ""; 
		document.getElementById("statut").value  = ""; 
		document.getElementById("deleteItem").value  = ""; filterit();uptitles();
	 });
	 
// 
	
	
	$(document).on('pagebeforeshow', '#Edit', function () {
        document.getElementById("edititem").value = ""; 
        document.getElementById("statum").value = ""; 
        document.getElementById("edititem2").value  = ""; filterit();uptitles();
		
    });
	
	function changing2()
 {
	let whicha2 = document.getElementById("edititem2").value;
	let found3 = false;
	
	    for(var i = 0; i < Notes.length; i++) 
           {if(Notes[i].title === whicha2)
			{document.getElementById("section1").style.display = "none";
 	        document.getElementById("section2").style.display = "block";
			document.getElementById("day2").value=Notes[i].day;
            document.getElementById("title2").value=Notes[i].title; 				
            document.getElementById("time2").value=Notes[i].time;
			document.getElementById("statut2").value=Notes[i].statut;
			found3 = true;
			$.ajax({
            type: "DELETE",
                url: "/DeleteNote/" +whicha2,
                success: function(result){
                    console.log(result);
                    //document.location.href = "index.html#Show";  // go to this page to show item was deleted
                },
                error: function (xhr, textStatus, errorThrown) {  
                    console.log('Error in Operation');  
                    alert("Server could not delete Note with title " + which)
                }  
            });};};
			
        if(!found3){
            document.getElementById("edititem2").value = "Sorry, could not find";};
 };
	
	

//

	
	
function changing3()
  {
	let whicha2 = document.getElementById("edititem2").value;
	
 for(var i = 0; i < Notes.length; i++) 
	{if(Notes[i].title === whicha2)
	{Notes[i].day=document.getElementById("day2").value;
     Notes[i].title=document.getElementById("title2").value; 				
      Notes[i].time=document.getElementById("time2").value;
	Notes[i].statut=document.getElementById("statut2").value;
	let newNote2=new Note(document.getElementById("day2").value,document.getElementById("day2").value,
	document.getElementById("day2").value,document.getElementById("day2").value);
	$.ajax({
            url : "/AddNote2",
            type: "POST",
            data: JSON.stringify(newNote2),
            contentType: "application/json; charset=utf-8",
            dataType   : "json",
            success: function (result) {
                console.log(result);
                //document.location.href = "index.html#Show";  // go to this page to show item was added
            }
        });};};
	
 document.getElementById("section1").style.display = "block";
 document.getElementById("section2").style.display = "none";filterit();uptitles();
document.getElementById("edititem2").value = "";
  };
  
  
	
  
//

 

