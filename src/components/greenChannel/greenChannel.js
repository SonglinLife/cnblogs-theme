/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:22
 * ----------------------------------------------
 * @describe: 文章底部信息按钮处理
 */
import '../../style/customBtn.css';

export default function main() {
    const buttons = [
        {
            id: 'green_channel_digg',
            text: '推荐该文',
            className: 'custom-btn btn-11',
        },
        {
            id: 'green_channel_follow',
            text: '关注博主',
            className: 'custom-btn btn-9',
        },
        {
            id: 'green_channel_favorite',
            text: '收藏本文',
            className: 'custom-btn btn-7',
        },
        {
            id: 'green_channel_weibo',
            text: '分享微博',
            className: 'custom-btn btn-15',
        },
        {
            id: 'green_channel_wechat',
            text: '分享微信',
            className: 'custom-btn btn-13',
        },
    ];

    buttons.forEach((button) => {
        $.__timeIds[`${button.id}TId`] = window.setInterval(() => {
            const element = $(`#${button.id}`);
            if (element.length) {
                element.after(
                    `<button class="${button.className}" onclick="${element.attr('onclick')}">
                    <span>${button.text}</span>
                    </button>`
                );
                $.__tools.clearIntervalTimeId($.__timeIds[`${button.id}TId`]);
            }
        }, 1000);
    });
}
