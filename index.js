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
        ]
    }
})