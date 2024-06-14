import '../style/books.css';
import booksTemp from '../template/books.html';
import comArticle from './common/com-article';

export default function main() {
    comArticle();
    // 书单页处理
    if ($.__config.bookList.length) {
        import(/* webpackChunkName: "gf-blink" */ /* webpackPrefetch: true */ '../style/gf-blink.css');

        const postBody = $('#cnblogs_post_body');
        const articleSuffixFlg = $('.articleSuffix-flg');
        let html = '';
        function createScoreHTML(score) {
            return (
                `<i class="iconfont icon-star-full"></i>`.repeat(Math.floor(score)) +
                (score % 1 > 0 ? '<i class="iconfont icon-star-half"></i>' : '') +
                `<i class="iconfont icon-icon-star"></i>`.repeat(5 - Math.ceil(score))
            );
        }
        function createInfoHTML(book) {
            return Object.entries({
                formerName: '原　名',
                author: '作　者',
                translator: '译　者',
                press: '出版社',
                year: '出版年',
                scenarist: '编　剧',
                star: '主　演',
                type: '类　型',
                productionCountry: '制片国家/地区',
                language: '语　言',
                releaseDate: '上映日期',
                filmLength: '片　长',
                alias: '别　名',
            }).reduce((acc, [key, label]) => {
                if (book[key]) acc += `<span title="${book[key]}">${label}：${book[key]}</span><br>`;
                return acc;
            }, '');
        }

        $.__config.bookList.forEach((list) => {
            if (list.title) html += `<h1 class="iconfont ${list.icon}">${list.title}</h1>`;
            html += '<div class="book-cards">';
            list.books.forEach((book) => {
                const cardHtml = booksTemp
                    .replace('cover', book.cover || '')
                    .replace('name', book.name || '')
                    .replace('readDate', book.readDate || '')
                    .replace('readPercentage', book.readPercentage || '')
                    .replace('scoreHtml', createScoreHTML(book.score))
                    .replace('infoHtml', createInfoHTML(book));
                html += cardHtml;
            });
            html += '</div>';
        });
        articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html);
    }
}
