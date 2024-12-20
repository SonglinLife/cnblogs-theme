/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:21
 * ----------------------------------------------
 * @describe: 事件监听
 */

export default {
    init() {
        $.__event.scroll = {
            handle: [],
            temScroll: 0,
            docScroll: $(document).scrollTop(),
            homeScroll: $('#home').offset().top - 40,
        };

        $(window).scroll(() => {
            const { scroll } = $.__event;
            scroll.docScroll = $(document).scrollTop();
            scroll.homeScroll = $('#home').offset().top - 40;
            this.handle.scroll();
            scroll.temScroll = scroll.docScroll;
        });
        $.__event.resize = { handle: [] };
        $(window).resize(() => this.handle.resize());
    },
    handle: {
        scroll() {
            $.__event.scroll.handle.forEach((fn) => fn());
        },
        resize() {
            $.__event.resize.handle.forEach((fn) => fn());
            $.__tools.setDomHomePosition();
        },
    },
};
