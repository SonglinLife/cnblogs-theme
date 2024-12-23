/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */
await $.__tools.dynamicLoadingJs($.__config.default.snapsvg).catch((e) => console.error('snapsvg-cjs.js', e));
await $.__tools.dynamicLoadingJs($.__config.default.optiscroll).catch((e) => console.log('optiscroll.js', e));
await $.__tools.dynamicLoadingCss($.__config.default.optiscrollcss);
export default function main() {
    const bodyEl = document.body;
    const content = document.querySelector('.content-wrap');
    const openbtn = document.getElementById('open-button');
    const closebtn = document.getElementById('close-button');
    const morphEl = document.getElementById('morph-shape');
    const s = Snap(morphEl.querySelector('svg'));
    const path = s.select('path');
    const initialPath = path.attr('d');
    let isOpen = false;
    let isAnimating = false;
    let myOptiscrollInstance;

    function init() {
        initEvents();
        myOptiscrollInstance = new Optiscroll(document.querySelector('#menuWrap'), {
            preventParentScroll: true,
            forceScrollbars: true,
        });
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) closebtn.addEventListener('click', toggleMenu);
        content.addEventListener('click', (ev) => {
            if (isOpen && ev.target !== openbtn) toggleMenu();
        });
    }

    function toggleMenu() {
        $('.menu-wrap').show();
        if (isOpen) {
            $(bodyEl).removeClass('show-menu');
            $('#content-wrap').fadeOut(300);
            $(bodyEl).css('overflow', 'auto');
            $('#mainContent').off('touchmove');
            path.attr('d', initialPath);
            isAnimating = false;
        } else {
            $(bodyEl).addClass('show-menu');
            $('#content-wrap').show();
            $('body').css('overflow', 'hidden');
            myOptiscrollInstance.scrollTo(false, 'top');
        }
        isOpen = !isOpen;
    }

    init();

    return {
        myOptiscrollInstance,
    };
}
