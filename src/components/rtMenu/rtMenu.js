/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 右下角菜单处理
 */
import rtMenuTemp from '../../template/rtMenu.html';

export default function main() {
    $('#blog-news').prepend(rtMenuTemp);
    const rightMenu = $('#rightMenu');

   // 公共事件
    rightMenu.find('i').on('mouseover', function(){
          if (typeof $(this).attr('banmv') === 'undefined') {
            const rotate = (angle, duration, callback) => $(this).rotate({ animateTo: angle, duration, callback });
            rotate(-60, 250, () => {
              rotate(60, 250, () => {
                rotate(-30, 150, () => {
                  rotate(30, 150, () => {
                    rotate(0, 100);
                  });
                });
              });
            });
          }
        });

    rightMenu.find('.rightMenuItem').on({
      mouseover: function () { $(this).find('.rightMenuSpan').stop().fadeIn(300)},
      mouseout: function () { $(this).find('.rightMenuSpan').stop().fadeOut(300) },
    });

    // 上下滚动
   $('#toUpDown').click(function () {
        const ac = $(this).attr('data');
        const downScrollDom = $($.__config.rtMenu.downScrollDom);
        const downScroll = ac === 'down'
            ? (downScrollDom.length ? downScrollDom.offset().top + 10 : $(document).height() - $(window).height())
            : 0;
        $.__tools.actScroll(downScroll, 900);
   });

  $.__event.scroll.handle.push(() => {
      const toUpDown = $('#toUpDown');
      const toUpDownI = $('#toUpDownI');
      const toUpDownSpan = $('.toUpDownSpan');

      const docScroll = $(document).scrollTop();
      const homeScroll = $('#home').offset().top - 40;
      const isScrolledPastHome = homeScroll <= docScroll;
      toUpDownI.rotate({ animateTo: isScrolledPastHome ? 0 : -180 });
      toUpDown.attr('data', isScrolledPastHome ? 'up' : 'down');
      toUpDownSpan.text(isScrolledPastHome ? '返回顶部' : '跳至底部');
  });

    // 设置
     let angle = 0;
      setInterval(() => {
          angle = (angle + 7) % 360;
          $('#rightMenuSite i').rotate(angle);
      }, 30);

      $('#rightMenuSite').click(function () {
          const isClicked = $(this).attr('clickflg') === 'true';
          $('#rightMenuSite .rightMenuSpan').text(isClicked ? '点击关闭' : '点击开启');
          $(this).attr('clickflg', isClicked ? 'false' : 'true');
          $('#rightMenu .hideRightMenu').slideToggle(350);
      });

    // 关注
    $.__timeIds.followTId = window.setInterval(() => {
        const followObj = $('#p_b_follow');
        if (followObj.length > 0) {
            const clickStr = followObj.text() ? $('#p_b_follow a').attr('onclick') : '';
            if (clickStr.includes('unfollow')) {
                const attention = $('#attention');
                attention.attr('onclick', clickStr.replace('unfollow', 'follow')).attr('clickflg', 'false');
                attention.find('.rightMenuSpan').text('关注');
                attention.find('i').removeClass('icon-follower').addClass('icon-unfollower');
            }
            $.__tools.clearIntervalTimeId($.__timeIds.followTId);
        }
    }, 1000);

    // 二维码
    if ($.__config.rtMenu.qrCode) $('#rightGzh').show().find('.ds-gzh img').attr('src', $.__config.rtMenu.qrCode);

    // 打赏
    if ($.__config.rtMenu.reward.alipay || $.__config.rtMenu.reward.wechatpay) {
        $('#rightDashang').show();
        $.__config.rtMenu.reward.alipay && $('#rightDashang .ds-alipay').show().find('img').attr('src', $.__config.rtMenu.reward.alipay);
        $.__config.rtMenu.reward.wechatpay && $('#rightDashang .ds-wecat').show().find('img').attr('src', $.__config.rtMenu.reward.wechatpay);
    }

   // 文章目录 || 主页
  if ($.__status.pageType !== 'home') {
      const rtaDirectory = $('#rtaDirectory');
      rtaDirectory.show();
      rtaDirectory.click(() => {
        const articleDirectory = $('#articleDirectory');
        if (articleDirectory.length) articleDirectory.toggle(300);
      });

      const rightMenuHome = $('#rightMenuHome');
      rightMenuHome.show();
      rightMenuHome.click(() => window.location.href = $.__status.homeUrl);
    };


    // 更新
    if (window.isBlogOwner && window.isLogined && $.__tools.getVersion()) {
        $('#update').show();
        $('#update').click(() => window.open(localStorage.getItem('repoUrl')));
        console.log('\n   %c ୧(๑•̀◡•́๑)૭ 新版本已经发布了,快点击下方链接查看吧~ \n', 'color: #fefefe;text-shadow: 0 0 0.5em #0ae642, 0 0 0.2em #5c5c5c;');
        console.log(`\n %c ${localStorage.getItem('version')}  %c  ${localStorage.getItem('repoUrl')} `, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; color:#000;padding:5px 0;');
    }


    // 点赞
     $.__timeIds.diggitTId = window.setInterval(() => {
            let diggit = $('.diggit');
            if (diggit.length > 0) {
                diggit.prepend('<i class="iconfont icon-dianzan"></i>');

                let rightDiggit = $('#rightDiggit');
                let rightMenuSpan = rightDiggit.find('.rightMenuSpan');
                $.__config.articleContent.diggit &&
                    $.__tools
                        .dynamicLoadingJs($.__config.default.mojs)
                        .then(() => {
                            const RADIUS = 28;
                            const circle = new mojs.Shape({
                                left: 0,
                                top: 0,
                                stroke: '#FF9C00',
                                strokeWidth: { [2 * RADIUS]: 0 },
                                fill: 'none',
                                scale: { 0: 1, easing: 'quad.out' },
                                radius: RADIUS,
                                duration: 450,
                            });

                            const burst = new mojs.Burst({
                                left: 0,
                                top: 0,
                                radius: { 0: 50 },
                                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                                delay: 300,
                                children: {
                                    duration: 750,
                                    radius: { 0: 'rand(5, 25)' },
                                    shape: ['circle', 'rect', 'polygon'],
                                    fill: ['#1abc9c', '#2ecc71', '#00cec9', '#3498db', '#9b59b6', '#fdcb6e', '#f1c40f', '#e67e22', '#e74c3c', '#e84393'],
                                    degreeShift: 'rand(-90, 90)',
                                    delay: 'stagger(0, 40)',
                                },
                                opacity: 0.6,
                                count: 10,
                            });

                            burst.el.style.zIndex = 999999;
                            const timeline = new mojs.Timeline({ speed: 1.5 });

                            timeline.add(burst, circle);

                            $(document).on('click touchend', '.diggit, #rightDiggit', function (e) {
                                const coords = { x: e.pageX, y: e.pageY };
                                burst.tune(coords);
                                circle.tune(coords);
                                timeline.replay();
                            });
                        })
                        .catch((e) => console.error('rtMenu-mo.js: ', e));
                rightDiggit.attr('onclick', diggit.attr('onclick'));
                rightMenuSpan.text($('#digg_count').text());

                rightDiggit.show().click(() => clickHdl($(this), rightMenuSpan, $('#digg_count').text()));

                $.__tools.clearIntervalTimeId($.__timeIds.diggitTId);
            }
        }, 1000);

        // 踩
        $.__timeIds.buryitTId = window.setInterval(() => {
            const buryit = $('.buryit');
            if (buryit.length > 0) {
                buryit.prepend('<i class="iconfont icon-buzan"></i>');

                const rightBuryit = $('#rightBuryit');
                const rightMenuSpan = rightBuryit.find('.rightMenuSpan');

                rightBuryit.attr('onclick', buryit.attr('onclick'));
                rightMenuSpan.text($('#bury_count').text());

                rightBuryit.show().click(() => clickHdl($(this), rightMenuSpan, $('#bury_count').text()));

                $.__tools.clearIntervalTimeId($.__timeIds.buryitTId);
            }
        }, 1000);

        // 处理顶踩数值更新
        function clickHdl(obj, subObj, cun) {
            if (obj.attr('clickflg') === 'false') {
                obj.attr('clickflg', 'true');
                subObj.text('提交中');
                let counter = 0;
                const intervalId = setInterval(() => {
                    subObj.text(`${counter % 2 === 0 ? '提交中' : '更新中'}.${'.'.repeat(counter % 3)}`);
                    counter++;
                    if (counter >= 6) {
                        clearInterval(intervalId);
                        subObj.text(finalText);
                        obj.attr('clickflg', 'false');
                    }
                }, 300);
            }
        }

}
