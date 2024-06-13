/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:27
 * ----------------------------------------------
 * @describe: 友链页处理
 */
import comArticle from './common/com-article';
import linksTemp from '../template/links.html';
import articleDirectory from '../components/articleDirectory/articleDirectory';

export default function main() {
    // 文章页公共处理
    comArticle();

    // 添加友链
    addLinks();
    (() => {
        if ($.__config.links.page.length) {
            import(/* webpackChunkName: "gf-blink" */ /* webpackPrefetch: true */ '../style/gf-blink.css');

            let postBody = $('#cnblogs_post_body'),
                html = '';

            $.each($.__config.links.page, (i) => {
                let list = $.__config.links.page[i];
                if (list.title)
                    html +=
                        '<h1 class="iconfont ' + list.icon + '" style="' + list.style + '"> ' + list.title + '</h1>';

                html += '<div id="links-box">';

                $.each(list.links, (j) => {
                    let linksHtml = linksTemp,
                        data = list.links[j];

                    // 处理模版
                    linksHtml = $.__tools.batchTempReplacement(linksHtml, [
                        ['avatar', typeof data.avatar !== 'undefined' ? data.avatar : ''],
                        ['name', typeof data.name !== 'undefined' ? data.name : ''],
                        ['introduction', typeof data.introduction !== 'undefined' ? data.introduction : ''],
                        ['url', typeof data.url !== 'undefined' ? data.url : ''],
                        [
                            'icon',
                            j % 3 === 0 ? 'icon-zhifeiji' : j % 3 === 1 ? 'icon-like-fill' : 'icon-flashlight-fill',
                        ],
                    ]);
                    html += linksHtml;
                });

                html += '</div>';
            });

            // 插入模版
            let articleSuffixFlg = $('.articleSuffix-flg');
            articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html);
        }
    })();

    // 设置文章目录
    articleDirectory();
}

function addLinks() {
    if ($.__config.links && $.__config.links.page.length) {
        import(LINKS_CSS).catch((error) => console.error('Failed to load links CSS', error));

        let postBody = $('#cnblogs_post_body'),
            html = '';

        $.__config.links.page.forEach((list) => {
            if (list.title) {
                const { icon, style } = list;
                html += `<h1 class="iconfont ${icon}" style="${style}"> ${list.title} </h1>`;
            }

            html += '<div id="links-box">';

            list.links.forEach((data) => {
                const { avatar, name, introduction, url } = data;
                const templateData = [
                    ['avatar', avatar || ''],
                    ['name', name || ''],
                    ['introduction', introduction || ''],
                    ['url', url || ''],
                    ['icon', getIconClass(j)],
                ];
                const processedHtml = processTemplate(linksTemp, templateData);
                html += processedHtml;
            });

            html += '</div>';
        });

        insertHtmlSafely(postBody, html);
    }
}

// 使用文档片段来安全地插入HTML，减少直接操作DOM的次数
function insertHtmlSafely(element, html) {
    const fragment = document.createDocumentFragment();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
    }

    if (element.length) element.before(fragment);
    else element.append(fragment);
}

// 处理模板，替换占位符
function processTemplate(template, data) {
    let processedTemplate = template;
    data.forEach(([key, value]) => {
        processedTemplate = processedTemplate.replace(new RegExp(`{${key}}`, 'g'), value);
    });
    return processedTemplate;
}

// 获取icon类名
function getIconClass(j) {
    if (j % 3 === 0) return 'icon-zhifeiji';
    if (j % 3 === 1) return 'icon-like-fill';
    return 'icon-flashlight-fill';
}
