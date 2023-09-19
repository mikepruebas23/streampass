const premios = [
    {
        id: 1,
        url: 'https://m.media-amazon.com/images/I/61DJ4KiYGGL._AC_SX679_.jpg',
        link: 'https://www.amazon.com.mx/ADATA-AUSDX128GUICL10A1-RA1-Memoria-MicroSD-Premier/dp/B077QJ1HVT/ref=sr_1_7?crid=3UTPTN8M0LHFF&keywords=memoria%2Bsd%2Bnintendo%2Bswitch&qid=1694479193&sprefix=memoria%2Bsd%2Bnintnd%2Caps%2C137&sr=8-7&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47&th=1',
        name: 'Memoria SD',
        pass: 1,
        points: 290
    },
    {
        id: 2,
        url: 'https://exitocol.vtexassets.com/arquivos/ids/641330/Google-Play-100-Usd-Tarjeta-Digital-de-juego-Codigo-Digital.jpg?v=637025747767530000',
        link: '/',
        name: 'Tarjeta GP - 100$ mxm',
        pass: 0,
        points: 250
    },
    {
        id: 3,
        url: 'https://m.media-amazon.com/images/I/51VHwHCygDL._AC_SX679_.jpg',
        link: 'https://www.amazon.com.mx/Almacenamiento-Transporte-Protectora-Impermeable-Interruptor/dp/B09LY3B3ZJ/ref=sr_1_99?crid=1LEQ313YU1GX8&keywords=funda+nintendo+switch&qid=1694481035&sprefix=funda+ninten%2Caps%2C135&sr=8-99&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
        name: 'Funda para Nintendo Switch',
        pass: 0,
        points: 310
    },
    {
        id: 4,
        url: 'https://m.media-amazon.com/images/I/41pECaPxpHL._AC_SX679_.jpg',
        link: 'https://www.amazon.com.mx/Free-wolf-Inal%C3%A1mbrico-Recargable-Computadora/dp/B09JK6J5HP/ref=sxin_17_sbv_search_btf?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.49ca6e75-8209-4d98-a1d6-8a695b9348ce%3Aamzn1.sym.49ca6e75-8209-4d98-a1d6-8a695b9348ce&crid=3VATJZNG4XV90&cv_ct_cx=mouse&keywords=mouse&pd_rd_i=B09JK6J5HP&pd_rd_r=d540360b-3a3c-47ba-82a6-c9dc6a6dc1a2&pd_rd_w=SBkka&pd_rd_wg=xqkdK&pf_rd_p=49ca6e75-8209-4d98-a1d6-8a695b9348ce&pf_rd_r=J442MEEG5AWXEWJYMK8N&qid=1694481107&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mous%2Caps%2C141&sr=1-1-b8f34313-536f-475f-9207-a7c427a641c1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47&th=1',
        name: 'Mouse Inalámbrico, Recargable 2.4 G Ergonómico',
        pass: 0,
        points: 300
    },
    {
        id: 5,
        url: 'https://m.media-amazon.com/images/I/61cwOu19vfL._AC_SX342_.jpg',
        link: 'https://www.amazon.com.mx/HOPEMOB-Al%C3%A1mbrico-Nintendo-Gamecube-Compatible/dp/B07TD6Z1X2/ref=sr_1_16?keywords=control+gamecube+nintendo+switch+pack&qid=1694481244&sr=8-16&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
        name: 'HOPEMOB Control Alámbrico para Nintendo Gamecube Switch',
        pass: 0,
        points: 350
    },
    {
        id: 6,
        url: 'https://m.media-amazon.com/images/I/61jaYKZcJ0S._AC_SX679_.jpg',
        link: 'https://www.amazon.com.mx/TXG-Condensador-Multifuncional-Grabaciones-Videoconferencias/dp/B08ZSF34D7/ref=sr_1_9?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TQDT650RP8P4&keywords=microfono&qid=1694557835&sprefix=microfono%2Caps%2C144&sr=8-9',
        name: 'TXG Micrófono Condensador con Soporte con Tripié',
        pass: 1,
        points: 270
    },
    {
        id: 7,
        url:  'https://m.media-amazon.com/images/I/51ZNVcXw41L._AC_SX522_.jpg',
        link: 'https://www.amazon.com.mx/Vorago-Retroiluminaci%C3%B3n-Multimedia-Terminales-Reforzadas/dp/B072MSTBDV/ref=sr_1_13?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=12M1V3WQ9YPF8&keywords=teclado&qid=1694558040&sprefix=teclado%2Caps%2C144&sr=8-13&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
        name: 'Vorago Start The Game KB-502 Teclado Gamer',
        pass:1,
        points: 320
    },
    {
        id: 8,
        url: 'https://m.media-amazon.com/images/I/61cwOu19vfL._AC_SX342_.jpg',
        link: 'https://www.amazon.com.mx/HOPEMOB-Al%C3%A1mbrico-Nintendo-Gamecube-Compatible/dp/B07TD6Z1X2/ref=sr_1_16?keywords=control+gamecube+nintendo+switch+pack&qid=1694481244&sr=8-16&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
        name: 'HOPEMOB Control Alámbrico para Nintendo Gamecube Switch',
        pass: 1,
        points: 230
    },
    {
        id: 9,
        url:  'https://m.media-amazon.com/images/I/61jLJ-RXf6L._AC_SY355_.jpg',
        link: 'https://www.amazon.com.mx/Cloudream-Adaptador-gamecube-Gamecube-necesita/dp/B07F36FWMQ/ref=sr_1_9?crid=1H0QPQOW4RKNY&keywords=adaptador+nintendo+switch&qid=1694558345&sprefix=adaptador+nint%2Caps%2C138&sr=8-9&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
        name: 'Cloudream Gamecube - Adaptador de Switch Gamecube',
        pass:1,
        points: 270
    },
    {
        id: 10,
        url:  'https://m.media-amazon.com/images/I/61SXnlfeLJL._AC_SX679_.jpg',
        link: 'https://www.amazon.com.mx/Adaptador-Ethernet-Compatible-Nintendo-Sistemas/dp/B00MYT481C/ref=sr_1_8?crid=1H0QPQOW4RKNY&keywords=adaptador%2Bnintendo%2Bswitch&qid=1694558257&sprefix=adaptador%2Bnint%2Caps%2C138&sr=8-8&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47&th=1',
        name: 'UGREEN Adaptador Ethernet USB 2.0,',
        pass:1,
        points:290
    },
    {
        id: 11,
        url:  'https://m.media-amazon.com/images/I/61o5Ho2Iy5L._AC_SX522_.jpg',
        link: 'https://www.amazon.com.mx/Google-Miracast-Chromecast3-Fhd-Negro/dp/B07M9BKHNZ/ref=sr_1_1?crid=2FXUL3A154B0A&keywords=chromecast&qid=1694558412&sprefix=chrome%2Caps%2C139&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
        name: 'Google Chromecast3 Negro',
        pass:1,
        points:500
    },
    {
        id: 12,
        url:  'https://m.media-amazon.com/images/I/61uJj7-1HoL._AC_SX679_.jpg',
        link: 'https://www.amazon.com.mx/aud%C3%ADfonos-bluetooth-entretenimiento-Impermeable-deportivos/dp/B08S3KLYR2/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=36WTF53DFZWJW&keywords=audifonos&qid=1694558525&sprefix=audifonos%2Caps%2C136&sr=8-3&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
        name: 'Audífonos bluetooth CHEELOM',
        pass:1,
        points:400
    },
    // {
    //     id: ,
    //     url:  '',
    //     link: '',
    //     name: '',
    //     pass:,
    //     points:
    // },
]

export default premios;