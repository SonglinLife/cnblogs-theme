/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:27
 * ----------------------------------------------
 * @describe: 友链页处理
 */
import comArticle from './common/com-article';
import '../style/links.css';
import linksTemp from '../template/links.html';

export default function main() {
    // 文章页公共处理
    comArticle();

    // 添加友链
    if ($.__config.links.page.length) {
        import(/* webpackChunkName: "gf-blink" */ /* webpackPrefetch: true */ '../style/gf-blink.css');

        const postBody = $('#cnblogs_post_body');
        const articleSuffixFlg = $('.articleSuffix-flg');

        // 生成友链的html
        const generateLinkHtml = (link, index) => {
            const { avatar = '', name = '', introduction = '', url = '' } = link;
            const icons = ['icon-zhifeiji', 'icon-like_fill', 'icon-flashlight_fill'];
            const icon = icons[index % icons.length];
            return $.__tools.batchTempReplacement(linksTemp, [
                ['avatar', avatar],
                ['name', name],
                ['introduction', introduction],
                ['url', url],
                ['icon', icon],
            ]);
        };

        // 生成完整的友链分类的html
        const generateSectionHtml = (data) => {
            const { title, icon, style, links } = data;
            const sectionTitle = title ? `<h1 class="iconfont ${icon}" style="${style}">${title}</h1>` : '';
            const linksHtml = links.map(generateLinkHtml).join('');
            return `${sectionTitle}<div id="links-box">${linksHtml}</div>`;
        };

        const linksHtml = $.__config.links.page.map(generateSectionHtml).join('');

        // 插入模版
        articleSuffixFlg.length ? articleSuffixFlg.before(linksHtml) : postBody.append(linksHtml);
    }
}
