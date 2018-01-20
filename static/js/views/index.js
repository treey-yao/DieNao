
var vm = new Vue({
    el: '#app',
    data: {
        titlename: "端脑",
        lists: "",

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
            this.lists = res.catalog.reverse();;
        },
        jump: function (bookid) {
            window.location.href="/show?id="+bookid;

        }
    },
    mounted: function () {
        this.ajax();
    }
})


