const express = require('express')
const app = express()
const port = 3000

const pets = [
  {
    url: 'https://e-pet.ro/wp-content/uploads/2021/04/siberian-husky.jpg',
    breed: 'Husky',
    age: '2',
    description: 'A husky is a sled dog used in the polar regions. One can differentiate huskies from other dog types by their fast pulling-style.[citation needed] When used as a sled dog, they represent an ever-changing crossbreed of the fastest dogs[1] (the Alaskan Malamute, by contrast, pulled heavier loads at a slower speed).[2] Humans use huskies in sled-dog racing. Various companies have marketed tourist treks with dog sledges for adventure travelers in snow regions.[3] Huskies are also kept as pets, and groups work to find new pet homes for retired racing and adventure-trekking dogs.',
  },
  {
    url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/01144812/Bulldog-at-the-AKC-National-Championship.jpg',
    breed: 'Bulldog',
    age: '1',
    description: 'Bulldogs have characteristically wide heads and shoulders along with a pronounced mandibular prognathism. There are generally thick folds of skin on the brow; round, black, wide-set eyes; a short muzzle with characteristic folds called a rope or nose roll above the nose; hanging skin under the neck; drooping lips and pointed teeth, and an underbite with an upturned jaw. The coat is short, flat, and sleek with colours of red, fawn, white, brindle, and piebald',
  },
  {
    url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12164822/Cairn-Terrier-sitting-in-the-grass.jpg',
    breed: 'Terrier',
    age: '3',
    description: 'Terrier (from the French word terrier [tɛʁje], meaning "burrow") is a type of dog originally bred to hunt vermin.[1][2][3] A terrier is a dog of any one of many breeds or landraces of the terrier type, which are typically small, wiry, game, and fearless.[4] Terrier breeds vary greatly in size from just 1 kg (2 lb) to over 32 kg (71 lb) and are usually categorized by size or function. There are five different groups of Terrier, with each group having different shapes and sizes.',
  },
  {
    url: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg',
    breed: 'Persian cat',
    age: '2.5',
    description: 'The Persian cat (Persian: گربه ایرانی‎, Gârbhe Irani) is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in the English-speaking countries. The first documented ancestors of the Persian were imported into Italy from Persia around 1620.[1][2] Recognized by the cat fancy since the late 19th century, it was developed first by the English, and then mainly by American breeders after the Second World War. Some cat fancier organizations breed standards subsume the Himalayan and Exotic Shorthair as variants of this breed, while others treat them as separate breeds.',
  },
  {
    url: 'https://excitedcats.com/wp-content/uploads/2020/11/Bengal-cat_Shutterstock_Alexander_Evgenyevich.jpg',
    breed: 'Bengal cat',
    age: '1.5',
    description: 'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat (Prionailurus bengalensis). The breed name comes from the leopard cat\'s taxonomic name. Bengals have a wild appearance; their golden shimmer comes from their leopard cat ancestry, and their coats may show spots, rosettes, arrowhead markings, or marbling. They are an energetic breed which needs much exercise and play.',
  },
];

app.use(express.static('public'))

app.get('/pets', (req, res) => res.json(pets));


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
