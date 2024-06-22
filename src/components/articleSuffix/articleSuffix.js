/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:18
 * ----------------------------------------------
 * @describe: 文章后缀处理
 */
import '../../style/articleSuffix.css';
import suffixTemp from '../../template/articleSuffix.html';

export default function main() {
    // 图片
    let imgUrl = $.__config.articleSuffix.imgUrl
        ? $.__config.articleSuffix.imgUrl
        : $.__config.info.avatar
        ? $.__config.info.avatar
        : $.__config.default.avatar;

    // 本文作者 & 本文链接
    let articleAuthor = $('#articleAuthor');
    let articleSource = $('#articleSource');
    let author = articleAuthor.length ? articleAuthor.val() : $.__config.info.name,
        source = articleSource.length ? articleSource.val() : $.__status.url,
        homeUrl = articleSource.length ? articleSource.val() : $.__status.homeUrl,
        origin = articleAuthor.length || articleSource.length ? '原' : '本';

    // 关于博主
    let aboutHtml =
        $.__config.articleSuffix.aboutHtml ||
        `评论和私信会在第一时间回复。或者<a href="https://msg.cnblogs.com/msg/send/${$.__status.user}" target="_blank">直接私信</a>我。`;

    // 版权声明
    let copyrightHtml =
        $.__config.articleSuffix.copyrightHtml ||
        `本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" alt="BY-NC-SA" title="BY-NC-SA" target="_blank">BY-NC-SA</a> 许可协议。转载请注明出处！`;

    // 声援博主
    let supportHtml =
        $.__config.articleSuffix.supportHtml ||
        `如果您觉得文章对您有帮助，可以点击文章右下角<strong><span style="color: #ff0000; font-size: 12pt;">【<a id="post-up" onclick="votePost('${$.__status.articleId} ',\'Digg\')" href="javascript:void(0);">推荐</a>】</span></strong>一下。`;

    let re = [
        ['origin', origin],
        ['imgUrl', imgUrl],
        ['homeUrl', homeUrl],
        ['author', author],
        ['source', source],
        ['aboutHtml', aboutHtml],
        ['copyrightHtml', copyrightHtml],
        ['supportHtml', supportHtml],
    ];
    let suffixHtml = $.__tools.batchTempReplacement(suffixTemp, re);
    $('#cnblogs_post_body').append(suffixHtml);

    // 版权声明 - COPY
    const config = $.__config.articleSuffix.copyText;
    const { enable, length, copyright = copyrightHtml } = config;

    if (enable) {
        const separator = '———————————————————————————————————————————————';
        const newline = '\n';
        const htmlSeparator = `<br />\n${separator}<br />\n`;

        document.body.addEventListener('copy', (event) => {
            const selection = window.getSelection().toString();
            if (selection && selection.length > length) {
                event.preventDefault();
                const clipboardData = event.clipboardData || window.clipboardData;

                if (clipboardData) {
                    const cleanedCopyright = copyright.replace(/<\/?.+?>/g, '').replace(/ /g, '');
                    const htmlData = `${selection}${htmlSeparator}${copyright}<br />\n作者：${author}<br />\n原文链接：${source}<br />\n`;
                    const textData = `${selection}${newline}${separator}${newline}${cleanedCopyright}${newline}作者：${author}${newline}原文链接：${source}${newline}`;

                    clipboardData.setData('text/html', htmlData);
                    clipboardData.setData('text/plain', textData);
                }
            }
        });
    }
}
