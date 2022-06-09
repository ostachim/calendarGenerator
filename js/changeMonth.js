const changeMonth = (operation) =>{
    var ele =  document.getElementsByTagName("table")[0]
    var len =  Object.keys(ele.rows).length
    len--;
    while(len>2){
       ele.removeChild( document.getElementsByTagName("table")[0].rows[len])
       len--;
    }
    if(operation == "next"){
    if(month+1> 11){
      year = year+1
      month = 0
    }
    else {
      month = month+1
    }}
    if(operation == "prev"){
    if(month-1<0){
       year = year-1
       month = 11
     }
     else {
       month = month-1
     }
    }
    
    setDateToShow(month,year);
    setFirstDay(year , month)
    count = 1;
    row = "undefined";
  }