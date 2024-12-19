/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:21
 * ----------------------------------------------
 * @describe: 日夜间模式处理
 */
import dayNightTemp from '../../template/dayNight.html';

export default function main() {
    if (!$.__config.switchDayNight.enable) return;

    let h = parseInt(new Date().getHours()),
        cookieKey = 'cnblogs_config_isNight',
        exp = 4 * 3600,
        daySwitch;
    $.__status.dayNightCssHref = '';
    const { auto, nightMode } = $.__config.switchDayNight;

    // 切换评论框背景
    const switchCommentBackground = (status) => {
        $.__config.articleContent.commentBackground.enable && $.__tools.setCommentBackground(status);
    };

    const switchHighlighterTheme = (lighterCodeTheme) => {
        window.enableCodeThemeTypeFollowSystem && window.highlighter.setTheme(lighterCodeTheme);
    };

    const getAutoSwitch = () => {
        if (auto.enable) return h >= auto.nightHour ? '' : h >= auto.dayHour ? 'daySwitch' : '';
        return 'daySwitch';
    };
    const cookieValue = $.__tools.getCookie(cookieKey);
    daySwitch = nightMode ? '' : cookieValue === 'day' ? 'daySwitch' : cookieValue === 'night' ? '' : getAutoSwitch();

    $('body').prepend($.__tools.tempReplacement(dayNightTemp, 'daySwitch', daySwitch));

    if (daySwitch) {
        switchCommentBackground('day');
        switchHighlighterTheme(window.codeHighlightTheme);
    } else {
        loadDarkCss();
        switchCommentBackground('night');
        switchHighlighterTheme(window.darkModeCodeHighlightTheme);
    }

    /**
     * 模式切换事件
     */
    $('#dayNightSwitch .onOff').click(function () {
        if ($(this).hasClass('daySwitch')) {
            // 夜间
            $.__tools.setCookie(cookieKey, 'night', exp);
            $(this).removeClass('daySwitch');
            loadDarkCss();
            switchCommentBackground('night');
            switchHighlighterTheme(window.darkModeCodeHighlightTheme);
        } else {
            // 日间
            $.__tools.setCookie(cookieKey, 'day', exp);
            $(this).addClass('daySwitch');
            $('head link#baseDarkCss').remove();
            switchCommentBackground('day');
            switchHighlighterTheme(window.codeHighlightTheme);
        }
    });

    /**
     * 加载夜间模式样式文件
     * 第一次初始化使用 import 加载并记录路径
     * 第二次及以后使用标签构建文件加载
     */
    function loadDarkCss() {
        if ($.__status.dayNightCssHref) {
            $('head').append(
                `<link type="text/css" id="baseDarkCss" rel="stylesheet" href="${$.__status.dayNightCssHref}">`
            );
        } else {
            import(/* webpackChunkName: "day-night" */ /* webpackPrefetch: true */ '../../style/base.dark.css');

            setTimeout(function () {
                let links = $('head link');
                for (let i = links.length - 1; i > 0; i--) {
                    let obj = $(links[i]);
                    let href = obj.attr('href');
                    if (/^.*\/day-night\.[a-z0-9]{8}\.css$/.test(href)) {
                        $.__status.dayNightCssHref = href;
                        obj.attr('id', 'baseDarkCss');
                        break;
                    }
                }
            }, 500);
        }
    }
}
