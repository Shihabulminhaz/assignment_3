// convert kilometer to meter

function kilometerToMeter(kilometer){

    if(kilometer < 0){    // negative value check
        return "kilometer cannot be a negative value"; 
    }
    else if(typeof(kilometer) != "number"){    // check string or number
        return "only number input allow";
    }
    else{
        var meter = kilometer * 1000;
        return meter
    }
}



// Calculating the total cost of watches, phones and laptops.

function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){     // check negative value
        return "Please enter the positive value of the number of watches, phones, and laptops.";
    }
    else if(typeof(watch) != "number" || typeof(phone) != "number" || typeof(laptop) != "number"){     //Check number type or not
        return "Please enter the number of watches, phones, and laptops in numeric type.";
    }
    else if(Math.ceil(watch) - Math.floor(watch) != 0 || Math.ceil(phone) - Math.floor(phone) != 0 || Math.ceil(laptop) - Math.floor(laptop) != 0){    // Check fractional or not 
        return "Please enter Integer value of the number of watches, phones, and laptops.";
    }
    else{   
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;

        var totalCost = watchPrice + phonePrice + laptopPrice;
        return totalCost;
    }
}



//  calculate total hotel cost

function hotelCost(day){
    if(day < 0){    // nagative value check
        return "Day cannot be nagative value";
    }
    else if(typeof(day) != "number"){   // Check number type or not
        return "Please enter the days in numeric type.";
    }
    else if(Math.ceil(day) - Math.floor(day) != 0){       // Check fractional or not
        return "Please enter the integer value of days.";
    }
    else{
        if(day <= 10){
            var totalCost = day * 100;
         }
         else if(day <= 20){
             var firstPartCost = 10 * 100;
             var remainingDay = day - 10;
             var secondPartCost = remainingDay * 80;
     
             var totalCost = firstPartCost + secondPartCost;
         }
         else{
             var firstPartCost = 10 * 100;
             var secondPartCost = 10 * 80;
             var remainingDay = day - 20;
             var thirdPartCost = remainingDay * 50;
     
             var totalCost = firstPartCost + secondPartCost + thirdPartCost;
         }
         return totalCost
    }
}



// find the largest friend name

function megaFriend(friends){
    if(!Array.isArray(friends)){   //For confirming Array
        return "Please enter an valid Array.";
    }
    else if(friends.length == 0){   //check Array length
        return "Array is empty.";
    }
    else{
        var largeName = friends[0];
        for(var i = 0; i < friends.length; i++){
            if(typeof(friends[i]) == "string"){     // check datatype of all elements
                if(largeName.length < friends[i].length){   // find the largest element
                    largeName = friends[i];
                }
            }
            else{
                return "Please enter your all friend name in string type.";
            }
        }
        return largeName;
    }
}