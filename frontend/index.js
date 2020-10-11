console.log(CONFIG.ENDPOINT);

const jokes = document.querySelector('.jokes');
const getOneJoke = document.querySelector('#getOneJoke');
const getTenJokes = document.querySelector('#getTenJokes');

getOneJoke.addEventListener('click', async () => {
  const result = await fetch(`${CONFIG.ENDPOINT}/jokes/one`);
  const data = (await result.json())
  createContainer();
  createJoke(data);
});

getTenJokes.addEventListener('click', async () => {
  console.log(CONFIG.ENDPOINT);
  const result = await fetch(`${CONFIG.ENDPOINT}/jokes`);
  const data = (await result.json())
  console.log(data);
  createContainer();
  data.forEach(createJoke);
});

function createContainer() {
  const existingJokes = document.querySelector('.jokes');

  const body = document.querySelector('#body');
  const jokes = document.createElement('div');
  jokes.classList.add('jokes');
  if (existingJokes) {
    body.replaceChild(jokes, existingJokes);
  } else {
    body.appendChild(jokes);
  }
}

function createJoke(metadata) {
  const jokes = document.querySelector('.jokes');
  const container = document.createElement('div');

  container.classList.add('joke-container')

  const setup = document.createElement('div');
  setup.innerText = metadata.setup;
  container.appendChild(setup);

  const punchline = document.createElement('div');
  punchline.innerText = metadata.punchline;
  punchline.classList.add('punchline');
  container.appendChild(punchline);

  setup.addEventListener('click', () => {
      punchline.classList.toggle('visible');
  });

  jokes.appendChild(container);
}