var vm = new Vue({
    el: '#app',
    data: {
        titlename: "端脑",
        lists: "",

    },
    methods: {
        ajax: function () {
            var _this = this;
            var id=location.href.split("?id=").pop();
            // 获取列表数据
            $.get("/showImg?id="+id, function (result) {
                console.log(result)
               // _this.init(result);
            });
        },
        init: function (res) {
            this.lists = res.catalog.reverse();;
        },

        jump: function (bookid) {
            window.location.href="/show";

        }
    },
    mounted: function () {
        this.ajax();
    }
})


