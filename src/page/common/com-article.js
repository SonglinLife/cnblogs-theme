/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:26
 * ----------------------------------------------
 * @describe: 文章页公共处理部分
 * 由于书单页、友链页等部分页面基础是文章页，所以共通部分提取至此来处理
 */
import articleInfo from '../../components/articleInfo/articleInfo';
import comment from '../../components/comment/comment';
import articleSuffix from '../../components/articleSuffix/articleSuffix';
import articleDirectory from '../../components/articleDirectory/articleDirectory';
import greenChannel from '../../components/greenChannel/greenChannel';

export default function main() {
    /**
     * 设置文章banner动效
     */

    $.__config.animate.articleBanner.enable &&
        import(/* webpackChunkName: "nh-banner-animation" */ '../../style/nhBannerAnimation.css');

    /**
     * 清除文章页冲突样式
     */
    const postMain = $('#main');
    const elementsToModify = postMain.find('.cnblogs-markdown, .cnblogs-post-body');
    elementsToModify.removeClass('cnblogs-markdown cnblogs-post-body');
    // 延迟删除类名
    [...Array(11).keys()].forEach((i) => {
        setTimeout(() => {
            elementsToModify.removeClass('cnblogs-markdown cnblogs-post-body');
        }, i * 500);
    });

    // 设置文章信息
    articleInfo();

    // 设置文章目录
    articleDirectory();

    // 设置文章底部信息按钮
    greenChannel();

    // 设置文章后缀
    articleSuffix();

    // 设置评论框
    comment();
}
