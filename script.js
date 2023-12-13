const listItems = document.getElementsByClassName('listItem');
const box1 = document.getElementById('left');
const box2 = document.getElementById('right');

for (const item of listItems) {
  item.addEventListener('dragstart', (e) => {
    let selected = e.target.tagName === 'LI' ? e.target : e.target.parentNode;

    box2.addEventListener('dragover', (e) => e.preventDefault());
    box2.addEventListener('drop', () => {
      box2.appendChild(selected);
      selected = null;
    });

    box1.addEventListener('dragover', (e) => e.preventDefault());
    box1.addEventListener('drop', () => {
      box1.appendChild(selected);
      selected = null;
    });
  });
}
