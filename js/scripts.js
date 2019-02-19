$("#expectedP").submit(function(e) {
    tds = $("#expectedP").serializeArray();
    e.preventDefault();
    
    var totalECTS = 0;
    var i;
    for (i = 1; i < tds.length; i+=3) { 
        if(tds[i].value != ""){
            totalECTS += parseInt(tds[i].value);
        }
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }

    rawStartDate = tds[2].value.split("-");
    startDate = [rawStartDate[2], rawStartDate[1], rawStartDate[0]];
    currentDate = [dd,mm,yyyy];

    var months = currentDate[1] - startDate[1]
    + (12 * (currentDate[2] - startDate[2]));
    monthsLeft = (60 - totalECTS) / months;

    alert("Je hebt tot nu toe " + totalECTS + " ECTS behaald.\nJe Huidige studietempo is:\n" + totalECTS / months + " ECTS / mnd.\nOp basis van dit studietempo heb je " + monthsLeft + " mnd nodig\nvoor je P.");
});


