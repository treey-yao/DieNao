var vm = new Vue({
    el: '#app',
    data: {
        titlename: "",
        lists: "",
    },
    methods: {
        ajax: function () {
            var _this = this;
            var id = location.href.split("?id=").pop();
            // 获取列表数据
            $.get("/showImg?id=" + id, function (result) {
                var titlename = "1";
                _this.init(titlename, result);
            });
            // 章节名称
            $.get("/chapter?id=" + id, function (titlename) {
                var result = "1";
                _this.init(titlename, result);
            });

        },
        init: function (titlename, result) {
            if (titlename != "1") {
                this.titlename = titlename;
            }
            if (result != "1") {
                this.lists = result;
            }
        },
    },
    mounted: function () {
        this.ajax();
    }
})


