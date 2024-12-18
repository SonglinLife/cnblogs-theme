/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:23
 * ----------------------------------------------
 * @describe: 文章信息
 */

export default function main(postDescText) {
    const regexps = [
        /.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/,
        /.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/,
        /.*posted\s*@\s*([0-9\-:\s]{16}).*/,
    ];

    const match = regexps.find((regexp) => postDescText.match(regexp));

    const [, date, vnum, cnum, tnum] = match;

    return {
        date: date || '1970-01-01 00:00',
        vnum: vnum || '0',
        cnum: cnum || '0',
        tnum: tnum || $('#digg_count').text() || '0',
    };
}
