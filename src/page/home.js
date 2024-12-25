import { request } from '../utils/request';

export default function main() {
    // 设置主页标语
    $('#homeTopTitle span').text($.__config.info.name);

    // 博客名字动效
    if ($.__config.animate.infoName.enable) {
        const titleSpan = $('#homeTopTitle span');
        titleSpan.hover(
            () => titleSpan.addClass('pageTitleText'),
            () => titleSpan.removeClass('pageTitleText')
        );
    }

  // 主页banner动效
    if ($.__config.animate.homeBanner.enable) {
        import(/* webpackChunkName: "circle-magic" */ '../vendor/circleMagic/circleMagic').then((module) => {
            $('.main-header').circleMagic($.__config.animate.homeBanner.options);
        });
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
            postDescText = title.nextAll('.postDesc:eq(0), .entrylistItemPostDesc:eq(0)').text();
        title.after(postMetaHtml(postDescText));
        if (title.hasClass('postTitle') && /\[置顶\]/.test(titleText)) {
            title.append('<span class="postSticky">置顶</span>');
            title.find('a').text(titleText.replace(/\[置顶\]/, ''));
        }
    });
    function postMetaHtml(postDescText) {
        const { date, vnum, cnum, tnum } = $.__tools.handlePostDesc(postDescText);
        return ` <span class="postMeta">
            <i class="iconfont icon-schedule"></i>发表于 ${date}
            <i class="iconfont icon-browse"></i>阅读：${vnum}
            <i class="iconfont icon-interactive"></i>评论：${cnum}
            <i class="iconfont icon-hot"></i>推荐：${tnum}
        </span>`;
    }

    // 设置摘要文章
    const descElements = $('.c_b_p_desc');
    descElements.each((i, element) => {
        const $obj = $(element);
        const $img = $obj.find('img.desc_img');
        if ($img.length) {
            const src = $img.attr('src');
            $img.hide();
            $obj.addClass('desc-width-60');
            $obj.parent('div').addClass('desc-parent-minheight-150');
            const $newDiv = $('<div class="c_b_p_desc_img"><div></div></div>');
            $newDiv.find('div').css({
                background: `url('${src}') center center / contain no-repeat`,
            });
            $obj.after($newDiv);
        }
    });

    // 主页的随机一言
    let hitokoto = $('#hitokoto');
    let configTitle = $.__config.banner.home.title;
    const topTitleList = ['当你凝视深渊时，深渊也在凝视着你。', '有的人25岁就死了，只是到75岁才埋葬'];

    const updateHitokotoDisplay = (content) => {
        hitokoto.html(content).css('display', '-webkit-box');
        $.__tools.setDomHomePosition();
    };

    function fetchAndSetTitle(url) {
        request(url)
            .then(topTitleContent)
            .catch(() => {
                const listIndex = $.__tools.randomNum(0, topTitleList.length - 1);
                updateHitokotoDisplay(topTitleList[listIndex]);
            });
    }

    function topTitleContent(r) {
        if (r.status === 'success') {
            const { note, content, data } = r;
            const poetry = `《${data?.origin?.title}》 - ${data?.origin?.dynasty} - ${data?.origin?.author}`;
            updateHitokotoDisplay(note || data.content);
            $('#hitokotoAuthor')
                .text(content || poetry)
                .show();
        }
    }

    const titleSources = {
        one: 'https://one.oyo.cool/',
        jinrishici: 'https://v2.jinrishici.com/one.json',
    };


  if (Array.isArray(configTitle)&&configTitle.length) {
    updateHitokotoDisplay(configTitle[$.__tools.randomNum(0, configTitle.length - 1)]);
    return
  }

  if (typeof configTitle === 'string') {
    updateHitokotoDisplay(configTitle);
    return
  }

   const titleSource = titleSources[$.__config.banner.home.titleSource];
    if (titleSource) {
      fetchAndSetTitle(titleSource);
    } else {
      const listIndex = $.__tools.randomNum(0, topTitleList.length - 1);
      updateHitokotoDisplay(topTitleList[listIndex]);
    }
}
