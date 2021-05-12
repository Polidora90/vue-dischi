new Vue({
    el: "#app",
    data: {
        albumList: [],
        genres: [],
        selectedGenre: ""
    },
    methods: {
        setGenre(event) {
            const select = event.currentTarget;
            this.selectedGenre = select.value;
        },
    },
    computed: {
        getAlbums() {

            if (this.selectedGenre === "") {
                return this.albumList;
            }

            return this.albumList.filter((album) => {
                return album.genre == this.selectedGenre;
            })
        }
    },
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((resp) => {

            this.albumList = resp.data.response;
                
            for (let i = 0; i < this.albumList.length; i++) {
                const element = this.albumList[i];

                if (this.genres.includes(element.genre) == false) {
                    this.genres.push(element.genre);
                }
                

            }
        })
    }
})