

const {parseDate}=require('../supportFunctions/support_functions')
exports.time=(req,res)=>{
    const {start_date,end_date}=req.body
 
    var startDate = parseDate(start_date);
    var endDate = parseDate(end_date);  


    var holidays = ['2021-12-09', '2021-12-10', '2021-12-24', '2021-12-31'];
  
    if (endDate < startDate)
        return 0;

    var z = 0; 
    for (i = 0; i < holidays.length; i++)
    {
        var cand = parseDate(holidays[i]);
        var candDay = cand.getDay();

      if (cand >= startDate && cand <= endDate && candDay != 0 && candDay != 6)
      {
    
        z++;
      }

    }

    var millisecondsPerDay = 86400 * 1000; 
    startDate.setHours(0,0,0,1);  
    endDate.setHours(23,59,59,999); 
    var diff = endDate - startDate;  
    var days = Math.ceil(diff / millisecondsPerDay);

   
    var weeks = Math.floor(days / 7);
    days = days - (weeks * 2);

   
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();

   
    if (startDay - endDay > 1)         
        days = days - 2;      

  
    if (startDay == 0 && endDay != 6)
        days = days - 1  

    if (endDay == 6 && startDay != 0)
        days = days - 1  
        console.log(days -z)
    
    res.json(days -z)
}



