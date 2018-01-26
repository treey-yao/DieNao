var vm = new Vue({
    el: '#app',
    data: {
        titlename: "端脑",
        lists: "",
        seen: false,
        bookid:"",
        title:"",
    },
    methods: {
        ajax: function () {
            var _this = this;
            // 获取列表数据
            $.get("/indexShow", function (result) {
                _this.init(result);
            });
        },
        init: function (res) {
            this.lists = res.catalog.reverse();
             this.setStorage()
        },
        jump: function (bookid) {
            window.location.href = "/show?id=" + bookid;
        },

        //本地缓存 -读取存储
        setStorage: function () {
            if (typeof (Storage) !== "undefined") {

                if (localStorage.hasOwnProperty('bookid')) {
                    // Store
                 var textid =  localStorage.bookid;
                 var title =  localStorage.titlename;

                 this.bookid = textid;
                 this.title = title;
                 this.seen = true;
                }

            } else {
                console.log("抱歉！您的浏览器不支持 Web Storage ...")
            }
        }
    },
    mounted: function () {
        this.ajax();
    }
})


