/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:18
 * ----------------------------------------------
 * @describe: 文章信息处理
 */
import consoleText from '../../vendor/consoleText/consoleText';

export default function main() {
    /**
     * 设置文章标题
     */
    const sbTitle = $('#cb_post_title_url').text().trim();
    if ($.__config.animate.articleTitle.enable) {
        consoleText([...sbTitle], 'sbTitleText', 'sbTitleConsole', false);
    } else {
        $('#sbTitleText').text(sbTitle).css('color', '#fff');
    }
    $('.inner').css('max-width', '100vw');
    $.__tools.setDomHomePosition();

    /**
     * 设置文章信息
     */
    (() => {
        $('#articleInfo').append('<p class="article-info-text"></p>');
        $.__timeIds.postDescTid = window.setInterval(() => {
            if ($('#post_view_count').text() !== '...' && $('#post_comment_count').text() !== '...') {
                let postDescText = $('.postDesc').show().text();
                $('#articleInfo p.article-info-text').html(postMetaHtml(postDescText));
                $.__tools.setDomHomePosition();
                $.__tools.clearIntervalTimeId($.__timeIds.postDescTid);
            }
        }, 1000);

        function postMetaHtml(postDescText) {
            const { date, vnum, cnum, tnum } = $.__tools.handlePostDesc(postDescText);
            let textNum = $('#cnblogs_post_body').text().length;
            return `<span class="postMeta">
            <i class="iconfont icon-schedule"></i>${date.replace(/-/g, '/')}
            <i class="iconfont icon-browse"></i>  ${vnum}
            <i class="iconfont icon-interactive"></i> ${cnum}
            <i class="iconfont icon-hot"></i> ${tnum}
            <br><i class="iconfont icon-article"></i> ${textNum}
            <i class="iconfont icon-kafei"></i> ${$.__tools.minToTime(textNum / 500)} ~
            ${$.__tools.minToTime(textNum / 300)}
            </span>`;
        }
    })();

    /**
     * 设置文章信息-分类
     */
    const articleCategoryLinks = $('#BlogPostCategory').find('a');
    if (articleCategoryLinks.length > 0) {
        $.__tools.htmlReplace('#BlogPostCategory', /,/g, '');
        $.__tools.articleInfo(articleCategoryLinks, 1);
        $.__tools.setDomHomePosition();
    }

    /**
     * 设置文章信息-标签
     */
    let articleTag = $('#EntryTag').find('a');
    if (articleTag.length > 0) {
        $.__tools.htmlReplace('#EntryTag', /,/g, '');
        $.__tools.articleInfo(articleTag, 2);
        $.__tools.setDomHomePosition();
    }

    /**
     * 设置文章信息-链接icon
     */
    if ($.__config.articleContent.link) {
        $('#cnblogs_post_body a').addClass('iconfont icon-fenxiang');
        $('.footnote-ref a').removeClass('iconfont icon-fenxiang');
        $('.footnotes-list a').removeClass('iconfont icon-fenxiang');
    }
    /**
     * 设置文章标题-iconfont
     */
    let titleInfo = $('#cnblogs_post_body').find(':header');
    if ($.__config.articleContent.prefixIcon.enable && titleInfo.length > 0) {
        const iconfonts = $.__config.articleContent.prefixIcon.options.iconfontArr;
        $.__tools
            .dynamicLoadingJs($.__config.articleContent.prefixIcon.options.link)
            .then((r) => {
                titleInfo.html((i, c) => {
                    let arr = [];
                    let num = Math.floor(Math.random() * (iconfonts.length - i) + i);
                    if (arr.indexOf(num) == -1) {
                        arr.push(num);
                        $(`<svg class="icon"> <use xlink:href="#icon-${iconfonts[num]}"></use></svg>`).prependTo(titleInfo[i]);
                    } else {
                        i--;
                    }
                });
            })
            .catch((e) => console.error('iconfont.js', e));
    }

    /**
     * 设置文章引用 | 扩展markdown语法
     */
    $('.blogpost-body p').html((i, c) => {
        if (/^\?&gt;/.test(c)) return `<p class="tip">${c.slice(5).trim()}</p>`;
        if (/^!&gt;/.test(c)) return `<p class="warn">${c.slice(5).trim()}</p>`;
    });

    /**
     * 设置文章手绘效果
     */
    (() => {
        $('.blogpost-body p').html((i, c) => {
            return c.replace(/~bk|bk~|~b|b~|~c|c~|~u|u~|~h|h~|~s|s~|~x|x~/g, function (matchStr) {
                let tokenMap = {
                    '~bk': '<mbk>',
                    'bk~': '</mbk>',
                    '~b': '<mbox>',
                    'b~': '</mbox>',
                    '~c': '<mc>',
                    'c~': '</mc>',
                    '~u': '<mu>',
                    'u~': '</mu>',
                    '~h': '<mhl>',
                    'h~': '</mhl>',
                    '~s': '<mst>',
                    's~': '</mst>',
                    '~x': '<mco>',
                    'x~': '</mco>',
                };
                return tokenMap[matchStr];
            });
        });
        $.__tools.dynamicLoadingJs($.__config.default.roughNotation).then((r) => {
            setTimeout(() => {
                const { annotate, annotationGroup } = window.RoughNotation;
                const n1 = document.querySelector('mu') || '';
                const n2 = document.querySelector('mc') || '';
                const n3 = document.querySelector('mbox') || '';
                const n4 = document.querySelector('mhl') || '';
                const n5 = document.querySelector('mbk') || '';
                const n6 = document.querySelector('mst') || '';
                const n7 = document.querySelector('mco') || '';
                const { underline, circle, box, highlight, bracket, strikeThrough, crossedOff } = $.__config.articleContent.roughNotation.options;
                const a1 = annotate(n1, underline);
                const a2 = annotate(n2, circle);
                const a3 = annotate(n3, box);
                const a4 = annotate(n4, highlight);
                const a5 = annotate(n5, bracket);
                const a6 = annotate(n6, strikeThrough);
                const a7 = annotate(n7, crossedOff);
                const ag = annotationGroup([a1, a2, a3, a4, a5, a6, a7]);
                ag.show();
            }, 2000);
        });
    })();
}
