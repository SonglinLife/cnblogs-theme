/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */
export default function main() {
    function classReg(className) {
        return new RegExp(`(^|\\s+)${className}(\\s+|$)`);
    }

    const hasClass = (elem, c) => elem.classList ? elem.classList.contains(c) : classReg(c).test(elem.className);
    const addClass = (elem, c) => elem.classList ? elem.classList.add(c) : !hasClass(elem, c) && (elem.className += ` ${c}`);
    const removeClass = (elem, c) => elem.classList ? elem.classList.remove(c) : elem.className = elem.className.replace(classReg(c), ' ');

    const toggleClass = (elem, c) => (hasClass(elem, c) ? removeClass : addClass)(elem, c);

    return {
        hasClass,
        addClass,
        removeClass,
        toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass,
    };
}
