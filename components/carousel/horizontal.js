import $ from 'jquery';
import effectStyles from '/styles/effect.module.css';
import headStyle from '/styles/components/landing.module.css';
import carouselHorizontal from '/styles/components/carouselHorizontal.module.css';

export function carouselHorizontalFunction() {
    let elementImageHorizontal = $(`.${headStyle.triggerCarousel1}`);
    if(elementImageHorizontal.offset().top + elementImageHorizontal.outerHeight(true) < $(window).scrollTop()) {
      let stepOne = $(`.${headStyle.stepCarousel1} .${headStyle.step1}`);
      $(`.${carouselHorizontal.liste}`).css('height', $(`.${carouselHorizontal.global} #carouselThd`).outerHeight(true));
      
      var differenceHorizontal = (($(window).scrollTop() - $(`.${headStyle.stepCarousel1}`).position().top) / (stepOne.offset().top - $(`.${headStyle.stepCarousel1}`).position().top)) * 100
      if(differenceHorizontal < 100 && differenceHorizontal > 0) {
        $(`.${headStyle.global}.${carouselHorizontal.triggerGlobal}`).addClass(`${carouselHorizontal.globalActive}`);
        $(`.${carouselHorizontal.global} #carouselFst h3`).css("opacity", "1");
        $(`.${carouselHorizontal.global} #carouselFst p`).css("opacity", "1");
        $(`.${carouselHorizontal.liste} div#step1`).removeClass(`${carouselHorizontal.inactive}`);
        $(`.${carouselHorizontal.liste} div#step1`).addClass(`${carouselHorizontal.active}`);
        $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.globalActive}`);
        $(`.${carouselHorizontal.loader}:eq(0)`).addClass(`${carouselHorizontal.loaderActive}`);
        $(`.${carouselHorizontal.step}:eq(0)`).css("height", `${differenceHorizontal}%`);
        $(`.${carouselHorizontal.step}:eq(1)`).css("height", `0`);
        $(`.${carouselHorizontal.step}:eq(2)`).css("height", `0`);
        $(`.${carouselHorizontal.loader}:eq(1)`).removeClass(`${carouselHorizontal.loaderActive}`);
        $(`.${carouselHorizontal.loader}:eq(2)`).removeClass(`${carouselHorizontal.loaderActive}`);
        $(`.${carouselHorizontal.liste} div#step2`).removeClass(`${carouselHorizontal.active}`);
        $(`.${carouselHorizontal.liste} div#step2`).addClass(`${carouselHorizontal.inactive}`);
        $(`.${carouselHorizontal.global} #carouselScd`).removeClass(effectStyles.appear);
        $(`.${carouselHorizontal.global} #carouselFst`).addClass(effectStyles.appear);
        $(`.${carouselHorizontal.global} #carouselFst h3`).addClass(effectStyles.appear);
        $(`.${carouselHorizontal.global} #carouselFst p`).addClass(effectStyles.appear);
      } else if(differenceHorizontal >= 100 && differenceHorizontal <= 200) {
        $(`.${headStyle.global}.${carouselHorizontal.triggerGlobal}`).addClass(`${carouselHorizontal.globalActive}`);
        $(`.${carouselHorizontal.global} #carouselFst h3`).css("opacity", "0");
        $(`.${carouselHorizontal.global} #carouselFst p`).css("opacity", "0");
        $(`.${carouselHorizontal.global} #carouselFst`).removeClass(effectStyles.appear);
        $(`.${carouselHorizontal.global} #carouselFst h3`).removeClass(effectStyles.appear);
        $(`.${carouselHorizontal.global} #carouselFst p`).removeClass(effectStyles.appear);
        $(`.${carouselHorizontal.global} #carouselThd`).removeClass(effectStyles.appear);
        $(`.${carouselHorizontal.global} #carouselScd`).addClass(effectStyles.appear);
        $(`.${carouselHorizontal.step}:eq(0)`).css("height", `100%`);
        $(`.${carouselHorizontal.step}:eq(1)`).css("height", `${differenceHorizontal - 100}%`);
        $(`.${carouselHorizontal.step}:eq(2)`).css("height", `0`);
        $(`.${carouselHorizontal.loader}:eq(0)`).removeClass(`${carouselHorizontal.loaderActive}`);
        $(`.${carouselHorizontal.loader}:eq(1)`).addClass(`${carouselHorizontal.loaderActive}`);
        $(`.${carouselHorizontal.loader}:eq(2)`).removeClass(`${carouselHorizontal.loaderActive}`);
        $(`.${carouselHorizontal.liste} div#step1`).removeClass(`${carouselHorizontal.inactive}`);
        $(`.${carouselHorizontal.liste} div#step1`).addClass(`${carouselHorizontal.active}`);
        $(`.${carouselHorizontal.liste} div#step2`).removeClass(`${carouselHorizontal.inactive}`);
        $(`.${carouselHorizontal.liste} div#step2`).addClass(`${carouselHorizontal.active}`);
        $(`.${carouselHorizontal.liste} div#step3`).removeClass(`${carouselHorizontal.active}`);
        $(`.${carouselHorizontal.liste} div#step3`).addClass(`${carouselHorizontal.inactive}`);
      } else if(differenceHorizontal >= 201) {
        // let elementLimite = $(`.${carouselHorizontal.global} #carouselThd`);
        // if((elementLimite.offset().top + elementLimite.outerHeight(true) >= $(`.${headStyle.triggerCarousel2}`).offset().top) && !($(`.${carouselHorizontal.global}`).offset().top > $(window).scrollTop()) && $(`.${carouselHorizontal.global} #carouselThd`).css("opacity") >= 0.5) {
        let elementLimite = $(`.${carouselHorizontal.triggerGlobal}`);
        if(elementLimite.offset().top + elementLimite.outerHeight(true) <=  $(window).scrollTop() + $(window).outerHeight()) {
          $(`.${headStyle.global}.${carouselHorizontal.triggerGlobal}`).removeClass(`${carouselHorizontal.globalActive}`);
          $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.globalActive}`);
          $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.finished}`);
          $(`.${carouselHorizontal.global} #carouselFst`).removeClass(effectStyles.appear);
          $(`.${carouselHorizontal.global} #carouselFst h3`).removeClass(effectStyles.appear);
        } else {// if($(`.${carouselHorizontal.global}`).offset().top > $(window).scrollTop())  
          $(`.${headStyle.global}.${carouselHorizontal.triggerGlobal}`).addClass(`${carouselHorizontal.globalActive}`);
          $(`.${carouselHorizontal.global} #carouselFst`).removeClass(effectStyles.appear);
          $(`.${carouselHorizontal.global} #carouselFst h3`).removeClass(effectStyles.appear);
          $(`.${carouselHorizontal.global} #carouselFst p`).removeClass(effectStyles.appear);
          $(`.${carouselHorizontal.global} #carouselScd`).removeClass(effectStyles.appear);
          $(`.${carouselHorizontal.global} #carouselThd`).addClass(effectStyles.appear);
          $(`.${carouselHorizontal.liste} div#step1`).removeClass(`${carouselHorizontal.inactive}`);
          $(`.${carouselHorizontal.liste} div#step1`).addClass(`${carouselHorizontal.active}`);
          $(`.${carouselHorizontal.liste} div#step2`).removeClass(`${carouselHorizontal.inactive}`);
          $(`.${carouselHorizontal.liste} div#step2`).addClass(`${carouselHorizontal.active}`);
          $(`.${carouselHorizontal.liste} div#step3`).addClass(`${carouselHorizontal.active}`);
          $(`.${carouselHorizontal.liste} div#step3`).removeClass(`${carouselHorizontal.inactive}`);
          $(`.${carouselHorizontal.loader}:eq(0)`).removeClass(`${carouselHorizontal.loaderActive}`);
          $(`.${carouselHorizontal.loader}:eq(1)`).removeClass(`${carouselHorizontal.loaderActive}`);
          $(`.${carouselHorizontal.loader}:eq(2)`).addClass(`${carouselHorizontal.loaderActive}`);
          $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.globalActive}`);
          $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.finished}`);
        }
        $(`.${carouselHorizontal.step}:eq(0)`).css("height", `100%`);
        $(`.${carouselHorizontal.step}:eq(1)`).css("height", `100%`);
        $(`.${carouselHorizontal.step}:eq(2)`).css("height", `${differenceHorizontal - 200}%`);
      } else if(differenceHorizontal <= 0) {
          $(`.${carouselHorizontal.step}:eq(0)`).css("height", `0%`);
          $(`.${carouselHorizontal.step}:eq(1)`).css("height", `0`);
          $(`.${carouselHorizontal.step}:eq(2)`).css("height", `0`);
      }
    } else {
      // $(`.${carouselHorizontal.triggerGlobal}`).css('background-position-y', '-100%');
      $(`.${headStyle.global}.${carouselHorizontal.triggerGlobal}`).removeClass(`${carouselHorizontal.globalActive}`);
      $(`.${carouselHorizontal.step}:eq(0)`).css("height", `0`);
      $(`.${carouselHorizontal.step}:eq(1)`).css("height", `0`);
      $(`.${carouselHorizontal.step}:eq(2)`).css("height", `0`);
      $(`.${carouselHorizontal.liste} div#step1`).removeClass(`${carouselHorizontal.active}`);
      $(`.${carouselHorizontal.liste} div#step1`).addClass(`${carouselHorizontal.inactive}`);
      $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.globalActive}`);
      $(`.${carouselHorizontal.loader}:eq(0)`).removeClass(`${carouselHorizontal.loaderActive}`);
      $(`.${carouselHorizontal.global} #carouselFst h3`).css("opacity", "");
      $(`.${carouselHorizontal.global} #carouselFst p`).css("opacity", "");
    };
  }