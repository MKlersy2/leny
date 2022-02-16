// ( typeof window !== "undefined" ? window : this, function(  ) {
// })
import $ from 'jquery'
import styles from '/styles/Home.module.css';

export function test() {
    console.log("test");
}

export function lock(o) {
    return $('body').css('overflow-y', 'hidden');
}

export function unlock(o) {
    return $('body').css('overflow-y', 'scroll');
}

export default function defaultFunction() {
    return (<></>);
}

export function rectangleOpen() {
    $(`.${styles.subRectangle}`).attr('points', '0 0 528 0 528 525 0 525');
}

export function rectangleClose() {
    $(`.${styles.subRectangle}`).attr('points', '245 0 528 0 283 525 0 525');
}