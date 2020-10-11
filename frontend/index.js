const jokes = document.querySelector('.jokes');
const getOneJoke = document.querySelector('#getOneJoke');
const getTenJokes = document.querySelector('#getTenJokes');

getOneJoke.addEventListener('click', async () => {
  // const result = await fetch('http://212.237.26.52:1005/');
  const result = await fetch('http://localhost:1005/jokes/one');
  const data = (await result.json())
  console.log(data);
});

getTenJokes.addEventListener('click', async () => {
  // const result = await fetch('http://212.237.26.52:1005/');
  const result = await fetch('http://localhost:1005/jokes');
  const data = (await result.json())
  console.log(data);
  data.forEach(createJoke);
});

function createJoke(metadata) {
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