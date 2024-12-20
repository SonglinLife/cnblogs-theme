/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */
import sidebarTemp from '../../template/sidebar.html';
import navTemp from '../../template/sidebarNav.html';
import '../../style/menu_bubble.css';
import main4 from './lib/main4';

export default function main() {
    let mainObj;

    // ------- 设置侧边栏 -------
    $('#sidebar_news').prepend(sidebarTemp);
    mainObj = main4();

    // ------- 设置导航 -------
    $('.sidebar-footer').html($.__tools.tempReplacement(navTemp, 'user', $.__status.user));

    // ------- 设置头像 -------
    $('#menuBlogAvatar').append(`<img class='img-responsive' alt='用户头像' src='${$.__config.info.avatar || $.__config.default.avatar}'>`);

    // ------- 设置侧边栏信息 -------
    $('.sidebar-title-msg').text($.__config.sidebar.titleMsg);

    // ------- 设置侧边栏背景 -------
    $('.container .menu-wrap').css('background-image', `url('${$.__config.sidebar.infoBackground || $.__config.default.infoBackground}')`);

    /**
     * 定时拉取数据
     */
    (() => {
        const timeout = 1000;
        // ------- 用户个人信息 -------
        $.__timeIds.introduceTId = window.setInterval(() => {
            let introduceHtml = $('#profile_block').html(),
                menuIntroduce = $('#introduce');
            if ($('#profile_block img')[0]) introduceHtml = introduceHtml.replace('<br>', '');
            if (typeof introduceHtml == 'string' && menuIntroduce.html() === '') {
                menuIntroduce.html($.__tools.htmlFiltrationScript(introduceHtml));
                $.__tools.clearIntervalTimeId($.__timeIds.introduceTId);
            }
        }, timeout);

        // ------- 博客统计 -------
        if ($.__config.sidebar.blogStatus) {
            $.__timeIds.blogStatsTId = window.setInterval(() => {
                let blogStats = $('.blogStats'),
                    menuBlogStats = $('.sidebar-stats');
                if (blogStats.length) {
                    menuBlogStats.html($.__tools.htmlFiltrationScript(blogStats.html())).show();
                    blogStats.html('');
                    $.__tools.clearIntervalTimeId($.__timeIds.blogStatsTId);
                }
            }, timeout);
        }

        // ------- 日历 -------
        $.__timeIds.calendarTId = window.setInterval(() => {
            let calendarTable = $('#blogCalendar'),
                calendar = $('#blog-calendar'),
                menuCalendar = $('#calendar-box');

            if (calendarTable.length && menuCalendar.html() === '') {
                let calendarHtml = `<div id="blog-calendar">${calendar.html()}</div>`;
                calendar.remove();
                menuCalendar.html(calendarHtml).show();
                $('#blog-calendar').css('visibility', 'visible');
                $.__tools.clearIntervalTimeId($.__timeIds.calendarTId);
            }
        }, timeout);

        // ------- 找找看 -------
        $.__timeIds.searchTId = window.setInterval(() => {
            let sidebarSearch = $('#sidebar_search_box'),
                menuSearchBox = $('#sb-sidebarSearchBox');

            if (sidebarSearch.length > 0 && menuSearchBox.html() === '') {
                menuSearchBox.prepend(
                    '<div id="sb_widget_my_zzk" class="div_my_zzk"><input id="q" type="text"  autocomplete="off" placeholder="找找看..." onkeydown="return zzk_go_enter(event);" class="input_my_zzk form-control search-menu"></div>'
                );
                $('.sidebar-search').show();
                $.__tools.clearIntervalTimeId($.__timeIds.searchTId);
            }
        }, timeout);

        const listHandlers = [
            { selector: '#sidebar_scorerank ul li', container: '#sb-sidebarScorerank' },
            { selector: '#sidebar_recentposts ul li', container: '#sb-sidebarRecentposts' },
            { selector: '#sidebar_toptags ul li', container: '#sb-toptags' },
            { selector: '#sidebar_postcategory ul li', container: '#sb-classify' },
            { selector: '#sidebar_articlecategory ul li', container: '#sb-ArticleCategory' },
            { selector: '#sidebar_postarchive ul li', container: '#sb-record' },
            { selector: '#sidebar_articlearchive ul li', container: '#sb-articlearchive' },
            { selector: '#TopViewPostsBlock ul li', container: '#sb-topview' },
            { selector: '#TopDiggPostsBlock ul li', container: '#sb-topDiggPosts' },
        ];

        listHandlers.forEach((handler) => {
            const tid = handler.container.replace('#', '');
            $.__timeIds[tid] = window.setInterval(() => {
                listHdl($(handler.selector), $(handler.container), $.__timeIds[tid]);
            }, timeout);
        });

        // ------- 最新评论 -------
        $.__timeIds.commentsTId = window.setInterval(() => {
            let recentComments = $('#sidebar_recentcomments ul'),
                menuRecentComments = $('#sb-recentComments');

            let getMenuCommentsData = (obj) => {
                let html = '<ul>',
                    ret = /^[1-9]+\d*$/,
                    title,
                    body,
                    author;

                if (obj.find('li').length > 2) {
                    title = obj.find('li.recent_comment_title');
                    body = obj.find('li.recent_comment_body');
                    author = obj.find('li.recent_comment_author');

                    if (title.length !== body.length || title.length !== author.length) return;

                    title.each((i) => {
                        let p = $(title[i]),
                            o = p.text() === p.html() ? {} : $(p.html()),
                            textArr = p.text().trim().split('.');
                        if (ret.test(textArr[0])) textArr.splice(0, 1);
                        let text = textArr.join('.').trim();
                        o.length > 0 && o.html(text);
                        html +=
                            '<li>' +
                            (o.length ? o.prop('outerHTML') : `<a href='javascript:void(0);'>${text}</a>`) +
                            `<div class="sb-recent_comment_body">${$(body[i]).text()}</div>` +
                            `<div class="sb-recent_comment_author">${$(author[i]).text()}</div></li>`;
                    });
                }
                html += '</ul>';
                return html;
            };

            if (recentComments.length > 0 && menuRecentComments.html() === '') {
                menuRecentComments.html(getMenuCommentsData(recentComments));
                menuRecentComments.parent('.sidebar-dropdown').show();
                $.__tools.clearIntervalTimeId($.__timeIds.commentsTId);
            }
        }, timeout);

        // ------- 自定义导航 -------
        const customNavData = $.__config.sidebar.navList;
        if (customNavData.length) {
            const navHtml = customNavData
                .map((item) => {
                    const { name, url, icon = 'icon-dianzan' } = item;
                    return `<li><a href="${url}" class="sidebar-dropdown-box" target="_blank"><i class="iconfont  ${icon}"></i> ${name} </a></li>`;
                })
                .join('');
            $('.customize-nav').append(`<ul>${navHtml}</ul>`).show();
        }

        // ------- 自定义列表 -------
        const customListData = $.__config.sidebar.customList;
        if (customListData.length) {
            let res = '';
            const html = customListData
                .map((item) => {
                    return `<li class="ng-star-inserted sidebar-dropdown">
                              <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box">
                                <i class="iconfont ${item.icon}"></i>
                                <span class="sidebar-dropdown-title">${item.title}</span>
                              </a>
                              <div class="sidebar-submenu">
                                <ul>
                                  ${item.data.map(([text, link]) => `<li><a href="${link}" target="_blank">${text}</a></li>`).join('')}
                                </ul>
                              </div>
                            </li>`;
                })
                .join('');
            res += html;
            $('#customize-sidebar-menu ul').append(res);
            $('#customize-sidebar-menu').show();
            $('#customize-sidebar-menu .sidebar-dropdown').show();
        }

        // ------- 公共函数 -------
        function listHdl(old, nld, tid) {
            if (old.length > 0 && nld.html() === '') {
                nld.html(getMenuData(old));
                nld.parent('.sidebar-dropdown').show();
                $.__tools.clearIntervalTimeId(tid);
            }
        }

        function getMenuData(obj) {
            let html = '<ul>',
                ret = /^[1-9]+\d*$/;
            obj.each((i) => {
                let p = $(obj[i]),
                    o = p.text() === p.html() ? {} : $(p.html()),
                    textArr = p.text().trim().split('.');
                if (ret.test(textArr[0])) textArr.splice(0, 1);
                let text = textArr.join('.').trim();
                o.length > 0 && o.html(text);
                if (text.length > 0) html += '<li>' + (o.length > 0 ? o.prop('outerHTML') : '<a href="javascript:void(0);">' + text + '</a>') + '</li>';
            });
            html += '</ul>';
            return html;
        }
    })();

    // ------- 设置头像动效 -------
    if ($.__config.animate.avatar.enable) {
        $('#menuBlogAvatar').addClass('img-rounded');
        $('.author_avatar').addClass('img-rounded');
        $('.feedbackAvatar').addClass('img-rounded');
    }

    // ------- 设置菜单默认展开收缩 -------
    const submenuConfig = $.__config.sidebar.submenu;
    const submenuElements = {
        pointsRank: '#sb-sidebarScorerank',
        latestPosts: '#sb-sidebarRecentposts',
        myTags: '#sb-toptags',
        postsClassify: '#sb-classify',
        articleClassify: '#sb-ArticleCategory',
        readRank: '#sb-topview',
        recommendRank: '#sb-topDiggPosts',
        postsArchive: '#sb-record',
        articleArchive: '#sb-articlearchive',
        latestComment: '#sb-recentComments',
        customList: '#customize-sidebar-menu .sidebar-submenu',
    };

    Object.keys(submenuConfig).forEach((key) => {
        if (submenuConfig[key]) {
            const element = $(submenuElements[key]);
            element.parent('li.sidebar-dropdown').addClass('active');
            element.show();
        }
    });

    // ------- 设置菜单点击展开收缩 -------
    $('.sidebar-menu a.sidebar-dropdown-box').on('click', function () {
        const obj = $(this);
        const pObj = obj.parent('li.sidebar-dropdown');
        const lObj = pObj.find('.sidebar-submenu');
        if (lObj.length) {
            pObj.toggleClass('active');
            lObj.slideToggle(300, () => {
                mainObj?.myOptiscrollInstance && mainObj.myOptiscrollInstance.update();
            });
        }
    });

    // ------- 窗口大小监听 -------
    $.__event.resize.handle.push(() => {
        setTimeout(() => {
            if ($('body').hasClass('show-menu') && mainObj?.myOptiscrollInstance) {
                mainObj.myOptiscrollInstance.update();
            }
        }, 300);
    });
}
