new Vue({
    el: '#app',

    data:{

        // nav
        nav:[
            'home',
            'natura',
            'spazio',
            'curiosita',
            'luoghi'
        ],

        // sezione 2: sx element
        sezione2:[
            {
                numero:2032,
                testo: "Volontari nel mondo",
                icon:`<i class="far fa-heart"></i>`
            },
            {
                numero:132,
                testo: "Active project",
                icon:`<i class="fas fa-globe">`
            },
            {
                numero:'3.2 M',
                testo: "Donated",
                icon:`<i class="fas fa-dollar-sign"></i>`
            },
        ],

        // sezione 3: card
        sezione3:[
            {
                imgSrc:'images/extra/sezione3item1.jpg',
                imgAlt:'immagine 1',
                title: 'Titolo 1',
                testo:"Nullam convalids,orci congue aliquet, diam maiurus curso, urna maxium lecture magna maxium"
            },
            {
                imgSrc:'images/extra/sezione3item2.jpg',
                imgAlt:'immagine 2',
                title: 'Titolo 2',
                testo:"Nullam convalids,orci congue aliquet, diam maiurus curso, urna maxium lecture magna maxium"
            },
            {
                imgSrc:'images/extra/sezione3item3.jpg',
                imgAlt:'immagine 3',
                title: 'Titolo 3',
                testo:"Nullam convalids,orci congue aliquet, diam maiurus curso, urna maxium lecture magna maxium"
            },
            {
                imgSrc:'images/extra/sezione3item4.jpg',
                imgAlt:'immagine 4',
                title: 'Titolo 4',
                testo:"Nullam convalids,orci congue aliquet, diam maiurus curso, urna maxium lecture magna maxium"
            },
        ],

        // sezione 4: card
        sezione4:[
            {
                imgSrc: 'images/extra/sezione4item1.jpg',
                imgAlt: 'Mare 1 immagine'
            },
            {
                imgSrc: 'images/extra/sezione4item2.jpg',
                imgAlt: 'Mare 2 immagine'
            },
            {
                imgSrc:'images/extra/sezione4item3.jpg',
                imgAlt: 'Mare 3 immagine'
            },
            {
                imgSrc: 'images/extra/sezione4item4.jpg',
                imgAlt: 'Mare 4 immagine'
            },
        ],

        // sezione 6: card
        sezione6:{

            left:{
                imgSrc: 'images/extra/sezione6item1.webp',
                title: 'Cala Luna, Italia',
                text: 'Una spiaggia delle meraviglie che. Perché l’azzurro di Cala Luna è davvero qualcosa di unico: sfumato di blu e abbracciato da una lingua di sabbia bianca costellata di grotte naturali, che lasciano riparare dal sole come per magia!'
            },

            right:[  
                {
                    imgSrc: 'images/extra/sezione6item2.webp',
                    title: 'Ponte di Bastei, Germania',
                    text: ' si innalzano speroni rocciosi millenari, e tra questi spunta un’incredibile passerella di 194 metri che permette di camminare tra la roccia e godere di uno dei paesaggi più belli e unici di tutta la Germania'
                },      
                {
                    imgSrc: 'images/extra/sezione6item3.webp',
                    title: 'Plitvice Lakes National Park, Croatia',
                    text: ' The Plitvice Lakes National Park is a real earthly paradise made of rivers, waterfalls and lakes where nature explodes in all its beauty showing off the most sparkling colors'
                },    
                {
                    imgSrc: 'images/extra/sezione6item4.webp',
                    title: 'Trolltunga, Norvegia',
                    text: ' Questa roccia sospesa nel vuoto si trova nella regione dell’Hardangerfjord, la stessa che ospita il ghiacciaio Folgefonna, eden di ghiaccio eterno'
                },
                {
                    imgSrc: 'images/extra/sezione6item5.webp',
                    title: 'Lago di Braies, Italia',
                    text: '  Per chi ancora non lo sapesse, in Val Pusteria, ai piedi della maestosa Croda del Becco, si trova un meraviglioso lago alpino dai colori sgargianti che virano dal turchino allo smeraldo, e che riflettono come uno specchio la parete dolomitica che vi si affaccia incontrastata.'
                },            
            ]
        },

        // footer social
        socials:[
            `<i class="fab fa-facebook-f"></i>`,
            `<i class="fab fa-instagram"></i>`,
            `<i class="fab fa-twitter"></i>`,
            `<i class="fab fa-youtube"></i>`
        ],
    }
})