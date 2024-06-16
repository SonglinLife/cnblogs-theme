/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:19
 * ----------------------------------------------
 * @describe: banner背景切换处理
 */

await $.__tools.dynamicLoadingJs($.__config.default.gsap).catch((e) => console.error('gsap.js', e));
export default function main(id, images, cols, time, sortDirection, startIndex) {
    const bgMain = document.getElementById(id);
    const parts = [];
    let isAnimating = false;
    const animOptions = { duration: 2.3, ease: Power4.easeInOut };
    const imgPreload = images.map((src) => new Image()).forEach((img) => (img.src = src));

    // 创建列DOM结构
    for (let col = 0; col < cols; col++) {
        const part = createPartElement(images[startIndex]);
        bgMain.appendChild(part);
        parts.push(part);
    }

    function createPartElement(src) {
        const part = document.createElement('div');
        part.className = 'part';
        const section = document.createElement('div');
        section.className = 'section';
        const img = document.createElement('img');
        img.src = src;
        section.appendChild(img);
        part.style.setProperty('--x', `-${(100 / cols) * col}vw`);
        part.appendChild(section);
        return part;
    }

    function updateImageInPart(part, src) {
        const nextSection = document.createElement('div');
        nextSection.className = 'section';
        const img = document.createElement('img');
        img.src = src;
        nextSection.appendChild(img);
        return nextSection;
    }

    function animatePart(part, next, directionUp) {
        const animFunc = directionUp ? animateUp : animateDown;
        animFunc(part, next);
    }

    function animateUp(part, next) {
        part.appendChild(next);
        gsap.to(part, { ...animOptions, y: `-${bgMain.offsetHeight}px` }).then(() => {
            part.removeChild(part.firstChild);
            gsap.to(part, { duration: 0, y: 0 });
        });
    }

    function animateDown(part, next) {
        part.prepend(next);
        gsap.set(part, { y: `-${bgMain.offsetHeight}px` });
        gsap.to(part, { ...animOptions, y: 0 }).then(() => {
            part.removeChild(part.lastChild);
            isAnimating = false;
        });
    }

    function advanceImage(dir) {
        if (!isAnimating) {
            isAnimating = true;
            startIndex = (startIndex + dir + images.length) % images.length;
            parts.forEach((part, index) => {
                const nextSection = updateImageInPart(part, images[startIndex]);
                animatePart(part, nextSection, (index - Math.max(0, dir)) % 2 === 0);
            });
        }
    }

    // 定时执行动画
    setInterval(() => advanceImage(sortDirection), time);
}
