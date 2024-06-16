/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:22
 * ----------------------------------------------
 * @describe: loading 处理
 */
import { rebound, Spinner } from 'exports-loader?exports=rebound,Spinner!../../vendor/loading/loading';

export default function main() {
    let loading = function () {
        let that = this;
        this.config = $?.__config?.loading || {
            rebound: {
                tension: 16,
                friction: 5,
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    background: '#f0f0f0',
                    stroke: '#272633',
                    base: null,
                    child: '#272633',
                },
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false,
            },
        };
        this.spring = null;
        this.spinner = null;
        this.initRebound = () => {
            let settings = that.config.rebound;

            let springSystem = new rebound.SpringSystem();

            that.spring = springSystem.createSpring(settings.tension, settings.friction);
        };
        this.initSpinner = () => {
            let settings = that.config.spinner;

            that.spinner = new Spinner(settings);
        };
        this.start = () => {
            $('#blog-news').prepend('<div id="loading"></div>');
            that.initRebound();
            that.initSpinner();
            that.spinner.init(that.spring, true);
        };
        this.stop = () => {
            $('body').css('overflow', 'auto');
            that.spinner.setComplete();
            $('div#loading').hide();
            $('a[name="top"]').hide();
        };
    };
    return new loading();
}
