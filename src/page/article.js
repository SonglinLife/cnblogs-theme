import comArticle from './common/com-article';
import imgBox from '../components/imgBox/imgBox';
await $.__tools.dynamicLoadingJs($.__config.default.iconfont).catch((e) => console.error('iconfont.js', e));

export default function main() {
    // 文章页公共处理
    comArticle();

    // 图片灯箱处理
    imgBox();
}
