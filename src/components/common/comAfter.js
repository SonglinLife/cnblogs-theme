/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 后置公共处理
 */
import progress from '../progress/progress';
import title from '../title/title';
import footer from '../footer/footer';
import rtMenu from '../rtMenu/rtMenu';
import blogIcon from '../blogIcon/blogIcon';
import dayNight from '../dayNight/dayNight';
import console from '../console/console';

export default function main() {
    // 页脚
    footer();

    // 右下角菜单
    rtMenu();

    // 日/夜模式
    dayNight();

    // 进度条
    progress();

    // 背景动效
    (async () => {
        for (const [key, config] of Object.entries($.__config.animate.background)) {
            if (config.enable) {
                const module = await import(/* webpackChunkName: "background-[request]" */ `../background/${key}`);
                const backgroundEffect = module.default;
                backgroundEffect(config.options || {});
            }
        }
    })();

    // 鼠标动效
    (async () => {
        for (const [key, config] of Object.entries($.__config.animate.mouse)) {
            if (config.enable) {
                const module = await import(/* webpackChunkName: "mouse-[request]" */ `../mouse/${key}`);
                const mouse = module.default;
                mouse(config.options);
            }
        }
    })();

    // 网站图标
    blogIcon();

    // 页面title
    title();

    // 控制台输出
    console();
}
