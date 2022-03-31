var slide = new Vue({
    el: '.root',
    data() {
        return {
            images: [
                "https://pixabay.com/get/gf94072288479c0aca5dc3b105e60b77f9ed71f2c8819e417973c42551507a964a0c68b422b64eb1b316daab8972c25699ee69daa067c5b2d54c6decb1b10bb19ccfc80282b217eea9fb2531610288de5_1920.jpg",
                "https://pixabay.com/get/g2390baf98f779a763eb349070f3a17ae991946f377e73c6d910bcfdf6851b67858f84127cace6b185643c7f99a30bdaf98656f9022bf8bd21dc03af9108325f49469b12cfa45be5d8790e098d71e05d7_1920.jpg",
                "https://pixabay.com/get/g47975c14cb458f5faaa1a7fc97f79d96ad74c7eda78593e1a605778d794723ba7bb935fdff85d0c2d16f79f1dd497d7375d8da43ba2425e847155b5fbb0df0c71726dbffa9653c15028f8fd60c70979b_1920.jpg",
                "https://pixabay.com/get/g6927a9619dc028a0737bfd5ceccdebb0dc3799d1f53f05c0f1293e58cb074bf5c7ce721c634318332d26f546e3263e3d13d4fe5e9db7e6f1ac8ed051fc58e2acc728ac248e10f0db7265798a0b7b4bb2_1920.jpg"
            ],
            timer: null,
            onIndex: 0
        };
    },

    toslide: function () {
        this.startSlide();
    },

    methods: {
        startSlide: function () {
            this.timer = setInterval(this.next, 3000);
        },

        next: function () {
            this.onIndex += 1;
        },
        prev: function () {
            this.onIndex -= 1;
        }
    },

    computed: {
        currentImg: function () {
            return this.images[Math.abs(this.onIndex) % this.images.length];
        }
    },
})