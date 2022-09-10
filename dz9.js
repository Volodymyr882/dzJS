//1
$("a[href^='https://]").attr('target','_blank');

//2
$('h2'.head').css('background','green').find('.inner').css('fontSize, '35px ');

//3
$('h3+div').each(function() {
    let $divEl=$(this);
    console.log(this);
    $divEl.prev().before($divEl);
});

//4
let $checlbox=$(':checkbox');
$checlbox.on('click',function(){
    if ($(':checkbox:checked').lenght==3){
        $checlbox.attr('disabled',true);
    }
});