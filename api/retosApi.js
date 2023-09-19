const smashImage = 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9';
const fgImage = 'https://cdn2.unrealengine.com/egs-fallguys-mediatonic-g1a-00-1920x1080-9e202f6c419e.jpg';
const tImage = 'https://imborrable.com/wp-content/uploads/2022/10/twitch-logo-2019.png';

const retos = [
    {
        id: 1,
        name: 'Participa en Crew Battle',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 10,
        freepass: 0
    },
    {
        id: 2,
        name: 'Participar en torneo',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 10,
        freepass: 1
    },
    {
        id: 3,
        name: 'Top 8 Torneo',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 20,
        freepass: 0
    },
    {
        id: 4,
        name: 'Top 3 Torneo',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 30,
        freepass: 0
    },
    {
        id: 5,
        name: 'Ganar con Personaje Random',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 15,
        freepass: 1
    },
    {
        id: 6,
        name: 'Hacer 3stock',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 10,
        freepass: 0
    },
    {
        id: 7,
        name: 'Ganar con random y 3stock',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 20,
        freepass: 0
    },
    {
        id: 8,
        name: 'ganar con random y 1 stock',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 25,
        freepass: 1
    },
    {
        id: 9,
        name: 'ganar con random y 2 stock',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 15,
        freepass: 0
    },
    {
        id: 10,
        name: 'ganar con random y 3 stock',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 5,
        freepass: 0
    },
    {
        id: 11,
        name: 'Participa en 2 partidas',
        category: 'Fall Guys',
        img: fgImage,
        points: 10,
        freepass: 1
    },
    {
        id: 12,
        name: 'Participa en 3 partidas',
        category: 'Fall Guys',
        img: fgImage,
        points: 5,
        freepass: 0
    },
    {
        id: 13,
        name: 'Participa en 5 partidas',
        category: 'Fall Guys',
        img: fgImage,
        points: 15,
        freepass: 0
    },
    {
        id: 14,
        name: 'Gana 1 partida con olimar',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 15,
        freepass: 1
    },
    {
        id: 15,
        name: 'gana 2 partidas con sheik',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 15,
        freepass: 0
    },
    {
        id: 16,
        name: 'gana 3 partidas con kirvy',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 20,
        freepass: 0
    },
    {
        id: 17,
        name: 'Haz 1 shield break',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 15,
        freepass: 0
    },
    {
        id: 18,
        name: 'Haz 3 kill spike en 1 partida',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 30,
        freepass: 0
    },
    {
        id: 19,
        name: 'Gana 1 rey del stream',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 40,
        freepass: 0
    },
    {
        id: 20,
        name: 'Participa en 1 rey del stream',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 25,
        freepass: 1
    },
    {
        id: 21,
        name: 'Gana una reta de regla de 3',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 20,
        freepass: 1
    },
    {
        id: 22,
        name: 'Gana 2 retas de regla de 3',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 30,
        freepass: 1
    },
    {
        id: 23,
        name: 'Gana 3 retas de regla de 3',
        category: 'Super Smash Bros Ultimate',
        img: smashImage,
        points: 30,
        freepass: 0
    },
    {
        id: 24,
        name: 'Invita a un amigo al canal',
        category: 'Twitch',
        img: tImage,
        points: 30,
        freepass: 1
    },
    {
        id: 25,
        name: 'Traer 1 raid al stream',
        category: 'Twitch',
        img: tImage,
        points: 35,
        freepass: 1
    },
    {
        id: 26,
        name: 'Traer 2 raids al stream',
        category: 'Twitch',
        img: tImage,
        points: 40,
        freepass: 0
    },
    {
        id: 27,
        name: 'Traer 3 raid al stream',
        category: 'Twitch',
        img: tImage,
        points: 60,
        freepass: 0
    },
    {
        id: 28,
        name: 'Compartir el canal de twitch en 1 grupo de fb',
        category: 'Twitch',
        img: tImage,
        points: 25,
        freepass: 1
    },
    {
        id: 29,
        name: 'Compartir el canal de twitch en 1 historia de FB',
        category: 'Twitch',
        img: tImage,
        points: 10,
        freepass: 1
    },
    {
        id: 30,
        name: 'Compartir el canal de twitch en 1 historia de Instagram',
        category: 'Twitch',
        img: tImage,
        points: 10,
        freepass: 1
    },
    {
        id: 31,
        name: 'Compartir el canal de twitch en 1 canal de discord',
        category: 'Twitch',
        img: tImage,
        points: 10,
        freepass: 1
    },
    {
        id: 32,
        name: 'Compartir el canal de twitch en 2 canales de discord',
        category: 'Twitch',
        img: tImage,
        points: 10,
        freepass: 0
    },
    {
        id: 33,
        name: 'Compartir el canal de twitch en 3 canales de discord',
        category: 'Twitch',
        img: tImage,
        points: 15,
        freepass: 0
    },
    {
        id: 34,
        name: 'Donar 100 Bits',
        category: 'Twitch',
        img: tImage,
        points: 25,
        freepass: 1
    },
    {
        id: 35,
        name: 'Donar 200 Bits',
        category: 'Twitch',
        img: tImage,
        points: 25,
        freepass: 0
    },
    {
        id: 36,
        name: 'Donar 300 Bits',
        category: 'Twitch',
        img: tImage,
        points: 50,
        freepass: 0
    },
    {
        id: 37,
        name: 'Donar 400 Bits',
        category: 'Twitch',
        img: tImage,
        points: 70,
        freepass: 0
    },
    {
        id: 38,
        name: 'Donar 500 Bits',
        category: 'Twitch',
        img: tImage,
        points: 120,
        freepass: 0
    },
    {
        id: 39,
        name: 'Regalar 1 sub',
        category: 'Twitch',
        img: tImage,
        points: 50,
        freepass: 1
    },
    {
        id: 40,
        name: 'Regalar 2 sub',
        category: 'Twitch',
        img: tImage,
        points: 70,
        freepass: 0
    },
    {
        id: 41,
        name: 'Regalar 3 sub',
        category: 'Twitch',
        img: tImage,
        points: 130,
        freepass: 0
    },
    {
        id: 42,
        name: 'Regalar 4 sub',
        category: 'Twitch',
        img: tImage,
        points: 150,
        freepass: 0
    },
    {
        id: 43,
        name: 'Regalar 5 sub',
        category: 'Twitch',
        img: tImage,
        points: 170,
        freepass: 0
    },
]

export default retos;