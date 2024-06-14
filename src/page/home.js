import postMeta from '../components/postMeta/postMeta';
import { request } from '../utils/request';

export default function main() {
    // 设置主页标语
    $('#homeTopTitle span').text($.__config.info.name);

    // 博客名字动效
    if ($.__config.animate.infoName.enable) {
        const titleSpan = $('#homeTopTitle span');
        titleSpan.hover(
            function () {
                titleSpan.css({ animation: 'pageTitleText 2s infinite' });
            },
            function () {
                titleSpan.css({ animation: '' });
            }
        );
    }

    // 主页的随机一言
    let hitokoto = $('#hitokoto');
    const updateHitokotoDisplay = () => {
        hitokoto.show().css('display', '-webkit-box');
        $.__tools.setDomHomePosition();
    };
    let configTitle = $.__config.banner.home.title;
    if (Array.isArray(configTitle) && configTitle.length > 0) {
        let listIndex = $.__tools.randomNum(0, configTitle.length - 1);
        hitokoto.html(configTitle[listIndex]);
        updateHitokotoDisplay();
        return;
    }
    if (typeof configTitle === 'string' && configTitle !== '') {
        hitokoto.html(configTitle);
        updateHitokotoDisplay();
        return;
    }

    const topTitleList = ['当你凝视深渊时，深渊也在凝视着你。', '有的人25岁就死了，只是到75岁才埋葬'];

    function fetchAndSetTitle(url) {
        request(url)
            .then(topTitleContent)
            .catch(() => {
                let listIndex = $.__tools.randomNum(0, topTitleList.length - 1);
                hitokoto.html(topTitleList[listIndex]);
                updateHitokotoDisplay();
            });
    }

    function topTitleContent(r) {
        if (r.status === 'success') {
            let {
                note = r.data.content,
                data: {
                    origin: { title, dynasty, author },
                },
            } = r;
            hitokoto.html(note);
            $('#hitokotoAuthor').text(`《${title}》 - ${dynasty} - ${author}`).show();
        }
        updateHitokotoDisplay();
    }

    const titleSources = {
        one: 'https://api.wangyangyang.vip/',
        jinrishici: 'https://v2.jinrishici.com/one.json',
    };

    if (titleSources.hasOwnProperty($.__config.banner.home.titleSource)) {
        fetchAndSetTitle(titleSources[$.__config.banner.home.titleSource]);
    } else {
        let listIndex = $.__tools.randomNum(0, topTitleList.length - 1);
        hitokoto.html(topTitleList[listIndex]);
        updateHitokotoDisplay();
    }

    // 头图点击滚动到内容位置
    $('.scroll-down').click(function () {
        const endScroll = $('#home').offset().top + 10;
        $.__tools.actScroll(endScroll, 500);
    });

    // 设置主页文章信息样式
    $('#main .c_b_p_desc_readmore').text('阅读全文 »');
    const allTitles = $('#main .postTitle, #main .entrylistPosttitle');
    $.each(allTitles, (i, titleElement) => {
        let title = $(titleElement),
            titleText = title.text(),
            postDescText = title.nextAll('.postDesc, .entrylistItemPostDesc:eq(0)').text();
        title.after(postMetaHtml(postDescText));
        if (title.hasClass('postTitle') && /\[置顶\]/.test(titleText)) {
            title.append('<span class="postSticky">置顶</span>');
            title.find('a').text(titleText.replace(/\[置顶\]/, ''));
        }
    });
    function postMetaHtml(postDescText) {
        let info = postMeta(postDescText); // 假设此函数根据文本提取所需信息
        return `
        <span class="postMeta">
            <i class="iconfont icon-schedule"></i>发表于 ${info.date}
            <i class="iconfont icon-browse"></i>阅读：${info.vnum}
            <i class="iconfont icon-interactive"></i>评论：${info.cnum}
            <i class="iconfont icon-hot"></i>推荐：${info.tnum}
        </span>
    `;
    }

    // 设置摘要文章
    let desc = $('.c_b_p_desc');
    let htmlCollection = desc
        .map((i) => {
            let obj = $(desc[i]),
                img = obj.find('img.desc_img');

            if (img.length > 0 && img.attr('src')) {
                let src = img.attr('src');
                img.hide();
                obj.css('width', '60%');
                let parentDiv = obj.parent('div');
                if (parentDiv.length > 0) {
                    parentDiv.css('min-height', '150px');
                    let html = `<div class="c_b_p_desc_img"><div class="background-image-holder" style="background-image: url('${src}')"></div></div>`;
                    return html;
                }
            }
            return '';
        })
        .get();
    $(htmlCollection.join('')).insertAfter(desc);

    // 主页banner动效
    if ($.__config.animate.homeBanner.enable) {
        import(/* webpackChunkName: "circle-magic" */ '../vendor/circleMagic/circleMagic').then((module) => {
            $('.main-header').circleMagic($.__config.animate.homeBanner.options);
        });
    }
}
