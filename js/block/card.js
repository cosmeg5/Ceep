let $wrapCards = document.querySelector('.wrap-card');
let $cardColor = document.querySelectorAll('.card-color');


$wrapCards.addEventListener('click', function(event){
    let $this = event.target;
    let $card = $this.parentNode.parentNode.parentNode;
    let $cardContent = $card.querySelector('.text-notes');
    

    if($this.classList.contains('card-color')) {

        $card.dataset.color = $this.dataset.color

        for( var position = 0; position < $cardColor.length; position++) {
            $cardColor[position].classList.remove('isActive');
        }

        $this.classList.add('isActive');
    };

    if ($this.classList.contains('card-excluir')) {
        $card.remove();
    };

    if ($this.classList.contains('card-edit')) {
        if ($cardContent.getAttribute('contenteditable') == "false"){
        $cardContent.setAttribute('contenteditable', "true");
        $cardContent.focus();
        $this.classList.add("isActive");
        } else {
            $cardContent.setAttribute('contenteditable', "false");
            $cardContent.blur();
            $this.classList.remove("isActive");
        };
    };
});


