function Count(){
    const today =  new Date();
    const pickedDay = new Date (document.getElementById('dateTime').value);
    // const pickedDay = new Date(picked);
    console.log(pickedDay);
    const counter = pickedDay.getTime() - today.getTime();

    const Days = Math.floor(counter / (1000 * 60 * 60 * 24));
    const Hrs = Math.floor((counter / (1000 * 60 * 60) % 24));
    const Mins = Math.floor((counter / (1000 * 60) % 60));
    const Secs = Math.floor((counter / 1000) % 60);
    
    const days = document.getElementById('Days').value;
    const hrs = document.getElementById('Hrs').value;
    const mins = document.getElementById('Mins').value;
    const secs = document.getElementById('Secs').value;

    days.innerHTML.value = Days;
    hrs.innerHTML.value = Hrs;
    mins.innerHTML.value = Mins;
    secs.innerHTML.value = Secs;
}