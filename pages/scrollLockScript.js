// ( typeof window !== "undefined" ? window : this, function(  ) {
// })
import $ from 'jquery'

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
