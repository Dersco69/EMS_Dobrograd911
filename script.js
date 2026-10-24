const input = document.getElementById('search');
const cards = [...document.querySelectorAll('.section-card')];
const topics = [...document.querySelectorAll('.topic')];
const empty = document.getElementById('empty');
input.addEventListener('input', () => {
  const q = input.value.trim().toLocaleLowerCase('ru');
  let shown = 0;
  cards.forEach(card => {
    const match = card.textContent.toLocaleLowerCase('ru').includes(q);
    card.hidden = !match;
    if (match) shown++;
  });
  topics.forEach(topic => {
    topic.hidden = !topic.textContent.toLocaleLowerCase('ru').includes(q);
  });
  empty.hidden = shown !== 0;
});
