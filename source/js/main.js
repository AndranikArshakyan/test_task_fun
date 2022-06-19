let cards = document.querySelectorAll('.cards__item');

cards.forEach((card) => {
  card.addEventListener('click', ()=> {
    let cardDescription = card.querySelector('.card__description');
    let cardDescriptionSelected = card.querySelector('.card__description--selected');
    let cta = card.querySelector('.cta');
    let ctaSelected = card.querySelector('.cta--selected');

    if (!card.classList.contains('cards__item--selected')) {
      card.classList.add('cards__item--selected');
      cardDescription.classList.add('hidden');
      cta.classList.add('hidden');
      cardDescriptionSelected.classList.remove('hidden');
      ctaSelected.classList.remove('hidden');
    } else {
      card.classList.remove('cards__item--selected');
      cardDescription.classList.remove('hidden');
      cta.classList.remove('hidden');
      cardDescriptionSelected.classList.add('hidden');
      ctaSelected.classList.add('hidden');
    }
  })
});
