var today=moment().format("dddd, MMMM Do");
$("#currentDay").text(today); //// ???? when text exist, text didn't work
var hour=moment().format("H");
console.log(hour);

$( ".time-block" ).each(function() {
    console.log(this.dataset.hour);
    if(this.dataset.hour===hour){
        $( this ).addClass( "present" );
    }
    else if(parseInt(this.dataset.hour)>parseInt(hour))
    {
        $( this ).addClass( "future" );
    }
    else{
        $( this ).addClass( "past" );
    }
    
  });
var schedules=[
    {id:"9AM", text:""},
    {id:"10AM", text:""},
    {id:"11AM", text:""},
    {id:"12PM", text:""},
    {id:"1PM", text:""},
    {id:"2PM", text:""},
    {id:"3PM", text:""},
    {id:"4PM", text:""},
    {id:"5PM", text:""}];
    ///스케쥴을 같은걸 여러번 누르면 같이 타임블럭이 여러개 생긴다.
   

$(".saveBtn").on("click", function(e){
    var text=$(e.target).prev().val();
    // console.log($(e.target).prev().dataset.hour);

    var id=$(e.target).prev().attr("id");
    console.log(id);

    let obj = schedules.find(o => o.id === id);
    obj.text=$(e.target).prev().val();
    

    // schedules[],

    // var hourSchedule={ID:id,text:text};
    // schedules.push(hourSchedule);
    // console.log(schedules);
    saveLocalStorage(schedules);
    renderLocalStorage();
        

});

function saveLocalStorage(savedSchedules){
    localStorage.setItem("hourlySchedule",JSON.stringify(savedSchedules));
    console.log("save");
};

function renderLocalStorage()
{
    var i=0;
    $(".time-block").each(function(){        
        console.log(i);
        var todo=schedules[i].text;
        console.log(todo);
        $(this).text(schedules[i].text);
        i++;
    })
    

}
function init(){
    var storedSchedules = JSON.parse(localStorage.getItem("hourlySchedule"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedSchedules !== null) {
        schedules = storedSchedules;
    }
    console.log(schedules);
    renderLocalStorage();

}
init();
   