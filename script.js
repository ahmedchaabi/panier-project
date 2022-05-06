function getTotal(){
    var total = 0 ;
    $('.summation').each(function(){
        total += parseFloat(this.innerHTML)
    });
    $('#total').text(total);
}

getTotal();

$('.quantity').keyup(function(){
    var parent = $(this).parents('tr');
    var price = $('.price', parent);
    var summation = $('.summation', parent);
    var value = parseInt(this.value) * parseFloat(price.get(0).innerHTML||0);
    summation.text(value);
    getTotal();
})