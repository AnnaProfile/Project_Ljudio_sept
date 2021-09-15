import { createStore } from "vuex" 

const store = createStore({

   state:{
       
        playList: [{
            "type": "artist",
            "browseId": "UCFgmnaNfKY__G1kuW2uuPng",
            "name": "Beatallica",
            "thumbnails": [
                {
                    "url": "https://lh3.googleusercontent.com/Cg43DFzGHaySNQl69ZxTo0Sf0U8PELDyLSflxZD_-73_3Kgh-HB08h6vBiS_zQXO6Ds84gVtnOFBIQ=w60-h60-p-l90-rj",
                    "width": 60,
                    "height": 60
                },
                {
                    "url": "https://lh3.googleusercontent.com/Cg43DFzGHaySNQl69ZxTo0Sf0U8PELDyLSflxZD_-73_3Kgh-HB08h6vBiS_zQXO6Ds84gVtnOFBIQ=w120-h120-p-l90-rj",
                    "width": 120,
                    "height": 120
                }
            ]
        },
           
        ]
   },



   mutations:{

        addPlayList(state, data){
            state.playList.push(data)
        },

        loadArticles(state, data){
            state.articles = data
        },
        
   },

   actions:{

   }
})

export default store