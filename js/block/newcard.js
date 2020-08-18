var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardSubmit = document.querySelector('.newCard-submit');

$newCardContent.addEventListener('input', function() {
    var $error = document.querySelector('.error');

    if($error != null) {
        $error.remove();
    };
});

$newCard.addEventListener('submit', function(event){
    event.preventDefault();

    if($newCardContent.value == '') {
        if(document.querySelector('.error') == null) {
            var $error = document.createElement('span');
            $error.classList.add('error');
            $error.textContent = 'Por favor, preencha o campo a cima';

            $newCard.insertBefore($error, $newCardSubmit);
        };               
    } else {
        let $wrapCard = document.querySelector('.wrap-card');
        var $card = document.querySelector('.card');
        var $copyCard = $card.cloneNode(true);

        $copyCard.querySelector('.text-notes').textContent = $newCardContent.value;

        $wrapCard.insertBefore($copyCard, $card);
    };
});