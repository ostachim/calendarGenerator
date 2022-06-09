//podstawowe pobieranie daty (rok, miesiąc, dzień)
var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getDay();
var date = new Date().getDate();
//zmienne dla tylko i wyłącznie aktualnej daty
//nie będą zmieniane, aby przełączać miesiące itp.
//ważne do porównywania - aby zaznaczać dzisiejszy dzień
var currentDay = new Date().getDate();
var currentMonth = new Date().getMonth();
var currentYear = new Date().getFullYear();
//teraz listy miesięcy i dni tygodnia
//lista dni tygodnia
var listOfDays = [ "Poniedziałek" , "Wtorek" , "Środa", "Czwartek", "Piątek" , "Sobota" , "Niedziela" ]
//lista miesięcy
var listOfMonths = ["Styczeń" , "Luty" , "Marzec" , "Kwiecień" , "Maj" , "Czerwiec" , "Lipiec" , "Sierpień" , "Wrzesień" , "Październik" ,"Listopad" , "Grudzień" ]
//dni w miesiącu dla każdego z miesięcy
var monthDays = (check) => {
  return {
  "Styczeń" : 31,
  "Luty" : checkYear(year) ? 29 : 28 , 
  "Marzec" : 31,
  "Kwiecień" : 30,
  "Maj" : 31,
  "Czerwiec" : 30,
  "Lipiec" : 31,
  "Sierpień" : 31,
  "Wrzesień" :30,
  "Październik" : 31,
  "Listopad" : 30 , 
  "Grudzień" :31
}
}
//sprawdzanie czy rok jest przestępny
var checkYear = (setYear) =>{
  if( setYear%400 == 0){
    return true;
  }
  else if(setYear%100 == 0){
    return false;
  }
  else if(setYear%4 == 0){
    return true
  }
  else{
    return false
  }
}

//funkcja do wyświetlania aktualnego miesiąca i roku na górze kalendarza
const setDateToShow=(setMonth,setYear)=>{
  document.querySelector('[data-selected="full-date"]').innerHTML =  listOfMonths[setMonth] + " " + setYear;
}
//wywołanie funkcji ze zmienną month year
//które mają pobrane aktualny miesiąć i rok
setDateToShow(month,year);

var monthDate;
//funkcje do ustalania pierwszego dnia w miesiącu 
const setFirstDay=(setYear, setMonth ) => {
  var monthDate = new Date(setYear,setMonth,0).getDay()
  setFirstColspan(monthDate);
}
const setFirstColspan = (monthDate) =>{
  var element = document.getElementsByTagName("table")[0].rows[2]
  element.innerHTML = ""
  if(monthDate>0){
    var data = document.createElement("td")
    element.appendChild(data)
    element.cells[0].setAttribute( "colspan", "" +(monthDate ))
  }
   setCalendarData(monthDate)
  setLastColspan()
}
//ustalenie gdzie się kończy colspan
const setLastColspan = () => {
  var element_len = document.getElementsByTagName("table")[0].rows
  var element = document.getElementsByTagName("table")[0].rows[(element_len.length)-1]
  if(7-(element.cells.length) > 0){
  var data = document.createElement("td")
  element.appendChild(data)
  element.cells[element.cells.length-1].setAttribute( "colspan", "" +(7-(element.cells.length)+1))
  }
}
var row;
//tutaj generujemy kalendarz odpowiednio do dni tygodnia i dni w miesiącu
const setCalendarData = (monthDate) => {
  const day = currentDay;
  var count = 1;
  for(var i = monthDate;i<=6;i++){
    var data = document.createElement("td")
    var text = document.createTextNode(count);
    count++;
    data.appendChild(text)
    //tutaj porównujemy 
    if(count  === day + 1 && currentMonth === month && currentYear === year){
      data.classList.add('curr-date')
    }
    document.getElementsByTagName("table")[0].rows[2].appendChild(data);
  }  
  var tempMonthDays  = monthDays(year)[listOfMonths[month]]
    //przeskakiwanie do kolejnego wiersza po niedzieli
  for(var i = count;i<=tempMonthDays;i+=7){
    row = document.createElement("tr");
    for(var j =0;j<7&&count<=tempMonthDays;j++){
      var data = document.createElement("td")
      var text = document.createTextNode(count);
      count++;
      
      data.appendChild(text)
      if(count  === day + 1 && currentMonth === month && currentYear === year){
        data.classList.add('curr-date')
      }
      row.append(data)
    }
    document.getElementsByTagName("table")[0].appendChild(row);
  } 
}
setFirstDay(year, month);



