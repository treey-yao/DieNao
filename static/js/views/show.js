var id = location.href.split("?id=").pop();

var vm = new Vue({
    el: '#app',
    data: {
        titlename: "",
        lists: "",
        duration: ".3s",
        position: "-40",
        pas: 0,
    },
    methods: {
        //加载数据
        ajax: function () {
            var _this = this;
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

        //初始化
        init: function (titlename, result) {
            if (titlename != "1") {
                this.titlename = titlename;
            }
            if (result != "1") {
                this.lists = result;
            }

            this.setStorage(titlename);
        },
        //返回
        back: function () {
            window.location.href = "/";
        },

        //显示导航
        showheader: function () {
            if (this.pos == 0) {
                this.position = "-40";
                this.pos = 1;
            } else {
                this.position = "0";
                this.pos = 0;
            }
        },
        // 下一章
        next: function () {
            window.location.href = "/show?id=" + (parseInt(id) + 1);
        },

        //本地缓存 -设置存储
        setStorage: function (titlename) {
            if (typeof (Storage) !== "undefined") {
                // Store
                localStorage.setItem("bookid", id);
                localStorage.setItem("titlename", titlename);
                // Retrieve
                // console.log("成功！")
            } else {
                console.log("抱歉！您的浏览器不支持 Web Storage ...")
            }
        }
    },
    mounted: function () {
        //这个是钩子函数
        //加载数据
        this.ajax();
    }
})


