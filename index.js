new Vue({
    el: '#app',

    data:{

        // nav
        nav:[
            'home',
            'mission',
            'causes',
            'journal',
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
                numero:'3.8 M',
                testo: "Donated",
                icon:`<i class="fas fa-dollar-sign"></i>`
            },
        ],

        // sezione 3: card
        sezione3:[
            {
                imgSrc:`<i class="fas fa-tint"></i>`,
                imgAlt:'clean water image',
                title: 'clean water ',
                testo:"Nullam convalids,orci congue aliquet, diam maiurus curso, urna maxium lecture magna maxium"
            },
            {
                imgSrc:`<i class="fas fa-heartbeat"></i>`,
                imgAlt:'vaccionations image',
                title: 'Tivaccionations',
                testo:"Nullam convalids,orci congue aliquet, diam maiurus curso, urna maxium lecture magna maxium"
            },
            {
                imgSrc:`<i class="fas fa-graduation-cap"></i>`,
                imgAlt:'education image',
                title: 'education',
                testo:"Nullam convalids,orci congue aliquet, diam maiurus curso, urna maxium lecture magna maxium"
            },
            {
                imgSrc:`<i class="fas fa-seedling"></i>`,
                imgAlt:'farming image',
                title: 'farming',
                testo:"Nullam convalids,orci congue aliquet, diam maiurus curso, urna maxium lecture magna maxium"
            },
        ],

        // sezione 4: card
        sezione4:[
            {
                imgSrc: 'images/avada-charity-fair-trade-featured.jpg',
                imgAlt: 'trade'
            },
            {
                imgSrc: 'images/avada-charity-shelter-featured.jpg',
                imgAlt: 'shelter'
            },
            {
                imgSrc:'images/avada-charity-farming-featured.jpg',
                imgAlt: 'farming'
            },
            {
                imgSrc: 'images/avada-charity-vaccines-featured.jpg',
                imgAlt: 'vaccines'
            },
        ],

        // sezione 6: card
        sezione6:{

            left:{
                imgSrc: 'images/photo-1444213007800-cff19e1677ac.jpg',
                title: 'Understanding community complexities',
                text: 'lorem ipsum dolor amet. consecturetur adiscpoing maree. Prasent ac bibh vestibulum, loreet ipsum.'
            },

            right:[  
                {
                    imgSrc: 'images/photo-1444664597500-035db93e2323-177x142.jpg',
                    title: 'The human story of uniqueness',
                    text: ' lorem ipsum dolor amet. consecturetur adiscpoing maree. Prasent ac bibh vestibulum, loreet ipsum.'
                },      
                {
                    imgSrc: 'images/photo-1447430617419-95715602278e-177x142.jpg',
                    title: 'Sustainable trade tactics',
                    text: ' lorem ipsum dolor amet. consecturetur adiscpoing maree. Prasent ac bibh vestibulum, loreet ipsum.'
                },    
                {
                    imgSrc: 'images/photo-1460230525622-630fe3294cd7-177x142.jpg',
                    title: 'Farmers making a difference',
                    text: ' lorem ipsum dolor amet. consecturetur adiscpoing maree. Prasent ac bibh vestibulum, loreet ipsum.'
                },
                {
                    imgSrc: 'images/photo-1460600421604-5e138c208b9c-177x142.jpg',
                    title: 'Meeting remote tribu in Peru',
                    text: '  lorem ipsum dolor amet. consecturetur adiscpoing maree. Prasent ac bibh vestibulum, loreet ipsum..'
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