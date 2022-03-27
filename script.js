"use strict";

let time = 10;

let message = setTimeout( () => {

    setTimeout( () => {

        setTimeout( () => {

            setTimeout( () => {

                setTimeout( () => {

                    setTimeout( () => {

                        setTimeout( () => {

                            setTimeout( () => {

                                setTimeout( () => {

                                    setTimeout( () => {

                                        setTimeout( () => {
                                            if(time <= 0){
                                                clearTimeout(message);
                                                document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
                                            }
                                            else{
                                                document.getElementById("countdown").innerHTML = time;
                                        
                                            }
                                            time = time - 1;
                                        }, 1000);
                                        if(time <= 0){
                                            clearTimeout(message);
                                            document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
                                        }
                                        else{
                                            document.getElementById("countdown").innerHTML = time;
                                    
                                        }
                                        time = time - 1;
                                    }, 1000);
                                    if(time <= 0){
                                        clearTimeout(message);
                                        document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
                                    }
                                    else{
                                        document.getElementById("countdown").innerHTML = time;
                                
                                    }
                                    time = time - 1;
                                }, 1000);
                                if(time <= 0){
                                    clearTimeout(message);
                                    document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
                                }
                                else{
                                    document.getElementById("countdown").innerHTML = time;
                            
                                }
                                time = time - 1;
                            }, 1000);
                            if(time <= 0){
                                clearTimeout(message);
                                document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
                            }
                            else{
                                document.getElementById("countdown").innerHTML = time;
                        
                            }
                            time = time - 1;
                        }, 1000);
                        if(time <= 0){
                            clearTimeout(message);
                            document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
                        }
                        else{
                            document.getElementById("countdown").innerHTML = time;
                    
                        }
                        time = time - 1;
                    }, 1000);
                    if(time <= 0){
                        clearTimeout(message);
                        document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
                    }
                    else{
                        document.getElementById("countdown").innerHTML = time;
                
                    }
                    time = time - 1;
                }, 1000);
                if(time <= 0){
                    clearTimeout(message);
                    document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
                }
                else{
                    document.getElementById("countdown").innerHTML = time;
            
                }
                time = time - 1;
            }, 1000);

            if(time <= 0){
                clearTimeout(message);
                document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
            }
            else{
                document.getElementById("countdown").innerHTML = time;
        
            }
            time = time - 1;
        }, 1000);
        

        if(time <= 0){
            clearTimeout(message);
            document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
        }
        else{
            document.getElementById("countdown").innerHTML = time;
    
        }
        time = time - 1;
    }, 1000 );

    if(time <= 0){
        clearTimeout(message);
        document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
    }
    else{
        document.getElementById("countdown").innerHTML = time;

    }
    time = time - 1;

}, 1000);

