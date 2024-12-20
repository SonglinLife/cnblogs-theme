/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:21
 * ----------------------------------------------
 * @describe: 控制台输出处理
 */

export default function main() {
    // 输出默认版权信息
    let github = [
        '\n %c %c %c CnblogsTheme-GitHub %c  %c https://github.com/wangyang0210/cnblogs-theme %c \n\n',
        'background: #fadfa3; padding:5px 0;',
        'background: #fadfa3; padding:5px 0;',
        'color: #fadfa3; background: #030307; padding:5px 0;',
        'background: #fadfa3; padding:5px 0;',
        'background: #FCEDC9; color:#030307; padding:5px 0;',
        'background: #fadfa3; padding:5px 0;',
    ];
    window.console.log.apply(console, github);
    const consoleListData = $.__config.consoleList;
    if (consoleListData.length) {
        consoleListData.forEach((item) => {
            console.log(`\n%c${item.name}%c${item.url}\n`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; color:#000;padding:5px 0;');
        });
    }
}
