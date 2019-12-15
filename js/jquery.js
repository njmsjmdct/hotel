$(function(){
    
    var count = 0;
    var timer;
    var barlength = $('.bar').length;
    
    $('.bar').click(function(){   
        var idx = $(this).index();
        move(idx);

        
    });
    $('.bar').mouseenter(function(){
        stoptimer();
    }).mouseleave(function(){
        starttimer();
    })


    function move(index){
        count = index;
        $('.bar').removeClass('on');
        $('.bar').eq(index).addClass('on');
    }
    
    function starttimer(){
        timer = setInterval(function(){
            var nextindex = (count+1) % barlength; 
            move(nextindex);
        }, 2000);
    }
    starttimer();
    
    function stoptimer(){
        clearInterval(timer);
    }
    
    
})