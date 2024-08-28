export const getPlaces = (city, category) => {
    return allPlaces[city][category];
}

const allPlaces = {
    "maceio": {
        "iconics": [
            {
                name: 'Marco dos Corais',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.tnh1.com.br//fileadmin/_processed_/0/c/csm_Marco_dos_Corais_805cedf349.jpg'
            },
            {
                name: 'Cadeira Gigante',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jPETALX2UJFD_gBlZroCBTE_89IaKw6igQ&s'
            },
            {
                name: 'Piscinas Naturais',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/featured_images/imagem_destaque_7176.jpeg'
            },
            {
                name: 'Catedral',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.ipatrimonio.org/wp-content/uploads/2018/02/Macei%C3%B3-Catedral-Metropolitana-Imagem-Arquitetura-alagoana3.jpg'
            },
        ],
        "beaches": [
            {
                name: 'Ponta Verde',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://dicasdonossobrasil.com.br/wp-content/uploads//2018/11/Ponta-Verde-em-Macei%C3%B3-2.jpg'
            },
            {
                name: 'Pajuçara',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f1/30/27/c360-2016-03-13-13-43.jpg?w=1200&h=1200&s=1'
            },
            {
                name: 'Francês',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT-Xgs9kxmpFIXQov2cyj-pa0ik4Brk5uSiuLGYizEGDo7UIG1e30xyIayCaQ998io9'
            },
            {
                name: 'Barra de São Miguel',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2020/11/shutterstock_1292351692.png'
            },
            {
                name: 'Carro quebrado',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.maceiodicas.com.br/wp-content/uploads/2023/06/Praia-de-Carro-Quebrado-em-Maceio%CC%81_Dicas-do-nosso-brasil.jpeg'
            },
            {
                name: 'Maragori',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.jaraguaturismo.com/wp-content/uploads/2024/06/piscinas-naturais-de-maragogi-alagoas.jpg'
            },
        ],
        "squares": [
            {
                name: 'Zumbi dos Palmares',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c0/7e/2c/vista-da-cancha.jpg?w=1200&h=-1&s=1'
            },
            {
                name: 'Centenário',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://media-cdn.tripadvisor.com/media/photo-s/09/ea/3a/bd/praca-centenario.jpg'
            },
            {
                name: 'Praça do Skate',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://podernoticias.com.br/wp-content/uploads/2022/05/24-05-2022-Skate-Gigante-Praca-do-Skate-Maceio-e-massa-Foto-Emile-Valoes-11.jpg'
            },
            {
                name: 'Praça da Faculdade',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.gazetadealagoas.com.br/img/normal/340000/AILTON-CRUZ-Morador-da-regiao-Jose-Carlos-levou-a-0034058204-xs.jpg?xid=557057'
            },
        ],
        "museums": [
            {
                name: 'Memorial Teotônio Vilela',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://media-cdn.tripadvisor.com/media/photo-s/09/00/51/c9/memorial-teotonio-vilela.jpg'
            },
            {
                name: 'Memorial à República',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://live.staticflickr.com/5327/9525295523_f021fb6639_b.jpg'
            },
            {
                name: 'Museu Palácio Floriano Peixoto',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://dicasdonossobrasil.com.br/wp-content/uploads//2018/12/Pal%C3%A1cio-do-Governo-em-Macei%C3%B3-2.jpg'
            },
            {
                name: 'Museu da 2° Guerra Mundial',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://lh3.googleusercontent.com/p/AF1QipP3GwcWOQJ7IGN6P26Ts29fxv90BNMfL5mCcq8r=s680-w680-h510'
            },
        ],
        "restaurants": [
            {
                name: 'Vero',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f9/c2/92/vero-pajucara.jpg?w=1200&h=-1&s=1'
            },
            {
                name: 'Truckzone',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://correresmidestino.com/wp-content/uploads/2021/02/BRA_0103.jpg'
            },
            {
                name: 'Janga',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1RShAatsojcjTM4IG5euw23jl7IB6oQe5Q&s'
            },
            {
                name: 'Maria Antonieta',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://lh3.googleusercontent.com/p/AF1QipMrbRdTNef6kHadCnZXFBOaFNJ5y8pSRSU7lQcU=s680-w680-h510'
            },
        ],
        "shoppings": [
            {
                name: 'Maceió Shopping',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://lh3.googleusercontent.com/p/AF1QipPl7q4-1o92rEOj_8-sPUc6dNtIg6QpygrfzNz2=s680-w680-h510'
            },
            {
                name: 'Parque Shopping Maceió',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.maceiodicas.com.br/wp-content/uploads/2021/10/parque_shopping.jpg'
            },
            {
                name: 'Shopping Pátio Maceió',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://lh3.googleusercontent.com/p/AF1QipNo0qxS9zlfxe-aSlJhFFcAb4HebwcsjP2omRek=s680-w680-h510'
            },
        ],
        "nightclubes": [
            {
                name: 'Lorde Nelson Rest Pub',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.lordenelson.com.br//wp-content/uploads/2018/04/a-casa.jpg'
            },
            {
                name: 'Hop Bross',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/bc/d6/77/caption.jpg?w=1200&h=1200&s=1'
            },
            {
                name: 'Maikai',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/9c/a8/0f/maikai-show.jpg?w=1200&h=-1&s=1'
            },
            {
                name: 'Casa Blanca',
                description: 'Lorem impsum dolor sit amet Lorem impsum dolor sit amet Lorem Lorem Impsum impsum',
                img: 'https://www.smag.al/wp-content/uploads/2022/09/12947_ext_arquivo.jpg'
            },
        ],
    },
    "saoPaulo": {
        "iconics": [
            {
                name: 'Examples',
                description: 'Examples',
                img: 'Examples'
            }
        ],
        "beaches": [
            {
                name: 'Examples',
                description: 'Examples',
                img: 'Examples'
            }
        ],
        "restaurantes": [
            {
                name: 'Examples',
                description: 'Examples',
                img: 'Examples'
            }
        ]
    }
}