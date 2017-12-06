var ascending = false;

$('.tab-content').on('click','.sortByPrice',function(){

    var sorted = $('.results-row').sort(function(a,b){
        return (ascending ==
               (convertToNumber($(a).find('.price').html()) < 
                convertToNumber($(b).find('.price').html()))) ? 1 : -1;
    });
    ascending = ascending ? false : true;

    $('.results').html(sorted);
});

var convertToNumber = function(value){
     return parseFloat(value.replace('$',''));
}
