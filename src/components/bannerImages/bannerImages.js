/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:19
 * ----------------------------------------------
 * @describe: banner背景切换处理
 */

await $.__tools.dynamicLoadingJs($.__config.default.gsap).catch((e) => console.error('gsap.js', e));
export default function main(id, images, cols, time, sort, current) {
    const bgMain = document.getElementById(id);
    const parts = [];
    let playing = false;
    const animOptions = { duration: 2.3, ease: Power4.easeInOut };

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    for (let col = 0; col < cols; col++) {
        const part = document.createElement('div');
        part.className = 'part';
        const el = document.createElement('div');
        el.className = 'section';
        const img = document.createElement('img');
        img.src = images[current];
        el.appendChild(img);
        part.style.setProperty('--x', `${(-100 / cols) * col}vw`);
        part.appendChild(el);
        bgMain.appendChild(part);
        parts.push(part);
    }

    function go(dir) {
        if (playing) return;
        playing = true;
        current = (current + dir + images.length) % images.length;
        const bgMainHeight = bgMain.offsetHeight;
        parts.forEach((part, p) => {
            const next = document.createElement('div');
            next.className = 'section';
            const img = document.createElement('img');
            img.src = images[current];
            next.appendChild(img);

            if ((p - Math.max(0, dir)) % 2 === 0) up(part, next, bgMainHeight);
            else down(part, next, bgMainHeight);
        });
    }

    function up(part, next, height) {
        part.appendChild(next);
        gsap.to(part, { ...animOptions, y: -height }).then(() => {
            part.children[0].remove();
            gsap.to(part, { duration: 0, y: 0 });
            playing = false;
        });
    }

    function down(part, next, height) {
        part.prepend(next);
        gsap.to(part, { duration: 0, y: -height });
        gsap.to(part, { ...animOptions, y: 0 }).then(() => {
            part.children[1].remove();
            playing = false;
        });
    }

    setInterval(() => go(sort), time);
}
