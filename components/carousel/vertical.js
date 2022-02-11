import $ from 'jquery';
import effectStyles from '/styles/effect.module.css';
import headStyle from '/styles/components/landing.module.css';
import carousel from '/styles/components/carousel.module.css';

export function carouselVerticalFunction() {
    let elementImage = $(`.${headStyle.triggerCarousel2}`);
    if(elementImage.offset().top + elementImage.outerHeight(true) < $(window).scrollTop()) {
      let stepOne = $(`.${headStyle.stepCarousel2} .${headStyle.step1}`);
      $(`.${carousel.liste}`).css('height', $(`.${carousel.global} #carouselThd`).outerHeight(true) + $(`.${carousel.listeCenter}`).outerHeight(true));

      var difference = (($(window).scrollTop() - $(`.${headStyle.stepCarousel2}`).position().top) / (stepOne.offset().top - $(`.${headStyle.stepCarousel2}`).position().top)) * 100

      if(difference < 100 && difference > 0) {
        $(`.${headStyle.global}.${carousel.triggerGlobal}`).addClass(`${carousel.globalActive}`);
        $(`.${carousel.global} #carouselFst h3`).css("opacity", "1");
        $(`.${carousel.global} #carouselFst p`).css("opacity", "1");
        $(`.${carousel.liste} div#step1`).removeClass(`${carousel.inactive}`);
        $(`.${carousel.liste} div#step1`).addClass(`${carousel.active}`);
        $(`.${carousel.global}`).addClass(`${carousel.globalActive}`);
        $(`.${carousel.loader}:eq(0)`).addClass(`${carousel.loaderActive}`);
        $(`.${carousel.step}:eq(0)`).css("width", `${difference}%`);
        $(`.${carousel.step}:eq(1)`).css("width", `0`);
        $(`.${carousel.step}:eq(2)`).css("width", `0`);
        $(`.${carousel.loader}:eq(1)`).removeClass(`${carousel.loaderActive}`);
        $(`.${carousel.loader}:eq(2)`).removeClass(`${carousel.loaderActive}`);
        $(`.${carousel.liste} div#step2`).removeClass(`${carousel.active}`);
        $(`.${carousel.liste} div#step2`).addClass(`${carousel.inactive}`);
        $(`.${carousel.global} #carouselScd`).removeClass(effectStyles.appear);
        $(`.${carousel.global} #carouselFst`).addClass(effectStyles.appear);
        $(`.${carousel.global} #carouselFst h3`).addClass(effectStyles.appear);
        $(`.${carousel.global} #carouselFst p`).addClass(effectStyles.appear);

        $(`.${carousel.global} #carouselFst`).removeClass(effectStyles.fromRight);
        $(`.${carousel.global} #carouselFst`).addClass(effectStyles.fromLeft);
        $(`.${carousel.global} #carouselScd`).removeClass(effectStyles.fromLeft);
        $(`.${carousel.global} #carouselScd`).addClass(effectStyles.fromRight);
        $(`.${carousel.global} #carouselThd`).removeClass(effectStyles.fromLeft);
        $(`.${carousel.global} #carouselThd`).addClass(effectStyles.fromRight);


      } else if(difference >= 100 && difference <= 200) {
        $(`.${headStyle.global}.${carousel.triggerGlobal}`).addClass(`${carousel.globalActive}`);
        $(`.${carousel.global} #carouselFst`).removeClass(effectStyles.appear);
        $(`.${carousel.global} #carouselFst h3`).removeClass(effectStyles.appear);
        $(`.${carousel.global} #carouselFst p`).removeClass(effectStyles.appear);
        $(`.${carousel.global} #carouselThd`).removeClass(effectStyles.appear);
        $(`.${carousel.global} #carouselScd`).addClass(effectStyles.appear);
        $(`.${carousel.global}`).addClass(`${carousel.globalActive}`);
        $(`.${carousel.step}:eq(0)`).css("width", `100%`);
        $(`.${carousel.step}:eq(1)`).css("width", `${difference - 100}%`);
        $(`.${carousel.step}:eq(2)`).css("width", `0`);
        $(`.${carousel.loader}:eq(0)`).removeClass(`${carousel.loaderActive}`);
        $(`.${carousel.loader}:eq(1)`).addClass(`${carousel.loaderActive}`);
        $(`.${carousel.loader}:eq(2)`).removeClass(`${carousel.loaderActive}`);
        $(`.${carousel.liste} div#step1`).removeClass(`${carousel.inactive}`);
        $(`.${carousel.liste} div#step1`).addClass(`${carousel.active}`);
        $(`.${carousel.liste} div#step2`).removeClass(`${carousel.inactive}`);
        $(`.${carousel.liste} div#step2`).addClass(`${carousel.active}`);
        $(`.${carousel.liste} div#step3`).removeClass(`${carousel.active}`);
        $(`.${carousel.liste} div#step3`).addClass(`${carousel.inactive}`);

        $(`.${carousel.global} #carouselFst`).removeClass(effectStyles.fromRight);
        $(`.${carousel.global} #carouselFst`).addClass(effectStyles.fromLeft);
        $(`.${carousel.global} #carouselScd`).removeClass(effectStyles.fromRight);
        $(`.${carousel.global} #carouselScd`).addClass(effectStyles.fromLeft);
        $(`.${carousel.global} #carouselThd`).removeClass(effectStyles.fromLeft);
        $(`.${carousel.global} #carouselThd`).addClass(effectStyles.fromRight);

      } else if(difference >= 201) {
        // let elementLimite = $(`.${carousel.global} #carouselThd`);
        // if((elementLimite.offset().top + elementLimite.outerHeight(true) >= $(`.${headStyle.triggerCarousel3}`).offset().top) && !($(`.${carousel.global}`).offset().top > $(window).scrollTop()) && $(`.${carousel.global} #carouselThd`).css("opacity") >= 0.5) {
        let elementLimite = $(`.${carousel.triggerGlobal}`);
        if(elementLimite.offset().top + elementLimite.outerHeight(true) <=  $(window).scrollTop() + $(window).outerHeight()) {
          $(`.${headStyle.global}.${carousel.triggerGlobal}`).removeClass(`${carousel.globalActive}`);
          $(`.${carousel.global}`).removeClass(`${carousel.globalActive}`);
          $(`.${carousel.global}`).addClass(`${carousel.finished}`);
          $(`.${carousel.global} #carouselFst`).removeClass(effectStyles.appear);
          $(`.${carousel.global} #carouselFst h3`).removeClass(effectStyles.appear);
        } else {// if($(`.${carousel.global}`).offset().top > $(window).scrollTop())  
          $(`.${headStyle.global}.${carousel.triggerGlobal}`).addClass(`${carousel.globalActive}`);
          $(`.${carousel.global} #carouselFst`).removeClass(effectStyles.appear);
          $(`.${carousel.global} #carouselFst h3`).removeClass(effectStyles.appear);
          $(`.${carousel.global} #carouselFst p`).removeClass(effectStyles.appear);
          $(`.${carousel.global} #carouselScd`).removeClass(effectStyles.appear);
          $(`.${carousel.global} #carouselThd`).addClass(effectStyles.appear);
          $(`.${carousel.liste} div#step1`).removeClass(`${carousel.inactive}`);
          $(`.${carousel.liste} div#step1`).addClass(`${carousel.active}`);
          $(`.${carousel.liste} div#step2`).removeClass(`${carousel.inactive}`);
          $(`.${carousel.liste} div#step2`).addClass(`${carousel.active}`);
          $(`.${carousel.liste} div#step3`).removeClass(`${carousel.inactive}`);
          $(`.${carousel.liste} div#step3`).addClass(`${carousel.active}`);
          $(`.${carousel.loader}:eq(0)`).removeClass(`${carousel.loaderActive}`);
          $(`.${carousel.loader}:eq(1)`).removeClass(`${carousel.loaderActive}`);
          $(`.${carousel.loader}:eq(2)`).addClass(`${carousel.loaderActive}`);
          $(`.${carousel.global}`).addClass(`${carousel.globalActive}`);
          $(`.${carousel.global}`).removeClass(`${carousel.finished}`);

          $(`.${carousel.global} #carouselFst`).removeClass(effectStyles.fromRight);
          $(`.${carousel.global} #carouselFst`).addClass(effectStyles.fromLeft);
          $(`.${carousel.global} #carouselScd`).removeClass(effectStyles.fromRight);
          $(`.${carousel.global} #carouselScd`).addClass(effectStyles.fromLeft);
          $(`.${carousel.global} #carouselThd`).removeClass(effectStyles.fromRight);
          $(`.${carousel.global} #carouselThd`).addClass(effectStyles.fromLeft);
        }
        $(`.${carousel.step}:eq(0)`).css("width", `100%`);
        $(`.${carousel.step}:eq(1)`).css("width", `100%`);
        $(`.${carousel.step}:eq(2)`).css("width", `${difference - 200}%`);
      } else if(difference <= 0) {
        $(`.${carousel.step}:eq(0)`).css("width", `0`);
        $(`.${carousel.step}:eq(1)`).css("width", `0`);
        $(`.${carousel.step}:eq(2)`).css("width", `0`);
      }
    } else {
      $(`.${headStyle.global}.${carousel.triggerGlobal}`).removeClass(`${carousel.globalActive}`);
      $(`.${carousel.step}:eq(0)`).css("width", `0`);
      $(`.${carousel.step}:eq(1)`).css("width", `0`);
      $(`.${carousel.step}:eq(2)`).css("width", `0`);
      $(`.${carousel.liste} div#step1`).removeClass(`${carousel.active}`);
      $(`.${carousel.liste} div#step1`).addClass(`${carousel.inactive}`);
      $(`.${carousel.global}`).removeClass(`${carousel.globalActive}`);
      $(`.${carousel.loader}:eq(0)`).removeClass(`${carousel.loaderActive}`);
      $(`.${carousel.global} #carouselFst h3`).css("opacity", "");
      $(`.${carousel.global} #carouselFst p`).css("opacity", "");
    };
}