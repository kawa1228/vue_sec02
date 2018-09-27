console.log('hello')
new Vue({
    el: '#app',
    data: {
        message: '初期メッセージ',
        val: [],
        rBtn: '',
        select: '',
        preview: ''
    },
    methods: {
        handleChange: function (e) {
            var file = e.target.files[0]
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        }
    }
})

var scroll = new SmoothScroll()
new Vue({
    el: '#scroll',
    data: {
        scrollY: 0,
        timer: null
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (this.timer === null) {
                this.timer = setTimeout(function () {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this), 200)
            }
        },
        scrollTop() {
            scroll.animateScroll(0)
        }
    }
})