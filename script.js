const data = [
  
  {
    color: 'red',
  },

  {
    color: 'yellow',
  },

  {
    color: 'green',
  },

  {
    color: 'blue',
  },

  {
    color: 'white',
  },

  {
    color: 'orange',
  },

  {
    color: 'gray',
  },

  {
    color: 'brown',
  },

  {
    color: 'purple',
  },

]

const createCard = (color) => {
  const scrollSection = document.getElementById('scrollSection');
  const div = document.createElement('div');
  div.className = 'cards';
  div.style.backgroundColor = color;
  scrollSection.appendChild(div);
};


addEventListener('click', (event) => {
  if (event.target.id === 'next') {
    document.getElementById('scrollSection').scrollBy(500, 0);
  };
  if (event.target.id === 'back') {
    document.getElementById('scrollSection').scrollBy(-500, 0);
  }
  if (event.target.id === 'mobile') {
    document.getElementById('scrollSection').classList.toggle('mobile')
  }
  
})

data.map( object => createCard(object.color));