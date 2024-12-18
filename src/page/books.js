import '../style/books.css';
import booksTemp from '../template/books.html';
import articleDirectory from '../components/articleDirectory/articleDirectory';
import comArticle from './common/com-article';

export default function main() {
    // 文章页公共处理
    comArticle();

    // 书单页处理
    if ($.__config.bookList.length) {
        import(/* webpackChunkName: "gf-blink" */ '../style/gf-blink.css');

        let postBody = $('#cnblogs_post_body'),
            html = '';
        const infoObj = {
            formerName: '原　名：',
            author: '作　者：',
            translator: '译　者：',
            press: '出版社：',
            year: '出版年：',
            direct: '导　演: ',
            scenarist: '编　剧: ',
            star: '主　演: ',
            type: '类　型: ',
            productionCountry: '制片国家/地区: ',
            language: '语　言: ',
            releaseDate: '上映日期: ',
            filmLength: '片　长: ',
            alias: '别　名: ',
        };

        $.__config.bookList.forEach((list) => {
            if (list.title) html += `<h1 class="iconfont ${list.icon}">${list.title}</h1>`;
            html += '<div class="book-cards">';
            list.books.forEach((book) => {
                let cardHtml = booksTemp,
                    scoreHtml = '',
                    infoHtml = '';

                if (book?.score > 0) {
                    const fullStars = Math.floor(book.score);
                    const halfStar = book.score > fullStars ? '<i class="iconfont icon-star-half"></i>' : '';
                    const emptyStars = `<i class="iconfont icon-icon-star"></i>`.repeat(5 - fullStars);
                    scoreHtml = `<i class="iconfont icon-star-full"></i>`.repeat(fullStars) + halfStar + emptyStars;
                } else {
                    scoreHtml = `<i class="iconfont icon-icon-star"></i>`.repeat(5);
                }

                Object.entries(infoObj).forEach(([key, value]) => {
                    if (book?.[key]) infoHtml += `<span title="${book?.[key]}">${value} ${book?.[key]}</span><br>`;
                });

                cardHtml = $.__tools.batchTempReplacement(cardHtml, [
                    ['cover', book.cover || ''],
                    ['name', book.name || ''],
                    ['readDate', book?.readDate || ''],
                    ['readDateStyle', book?.readDate ? 'initial;' : 'none'],
                    ['readPercentage', book?.readPercentage || ''],
                    ['readPercentageStyle', book?.readPercentage ? 'initial;' : 'none'],
                    ['scoreHtml', scoreHtml],
                    ['infoHtml', infoHtml],
                ]);
                html += cardHtml;
            });
            html += '</div>';
        });
        let articleSuffixFlg = $('.articleSuffix-flg');
        articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html);
    }

    // 设置文章目录
    articleDirectory();
}
