import React from "react";
import $ from 'jquery';
import effectStyles from '../styles/effect.module.css';
import headStyle from '../styles/components/landing.module.css';
import carousel from '../styles/components/carousel.module.css';
import carouselHorizontal from '../styles/components/carouselHorizontal.module.css';

export default class Layout extends React.Component {
    componentDidMount() {

      const faders = document.querySelectorAll("[fadein='true']");
      const sliders = document.querySelectorAll(".slideIn");

      const appearOptions = {
        threshold: 0,
        rootMargin: "-250px 0px -250px 0px"
      };
      
      const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            if(entry.target.getBoundingClientRect().bottom > $(window).innerHeight()/2) {
              entry.target.classList.remove(effectStyles.appear);
            }
          } else {
            if(entry.target.hasAttribute('delay')) {
              setTimeout(() => {
                entry.target.classList.add(effectStyles.appear);
              }, 500);
            } else {
              entry.target.classList.add(effectStyles.appear);
            }
          }; 
        });
      },
      appearOptions);
      faders.forEach(fader => {
        appearOnScroll.observe(fader);
      });
      
      sliders.forEach(slider => {
        appearOnScroll.observe(slider);
      });
      var parallaxY = 0;
      const scrollHorizontal = {};
      $(document).on("scroll", function() {
          parallaxY = $(document).scrollTop() * 0.45;
          $("div[parallax='true']").css("transform", "translateY("+parallaxY+"px)");

          let elementImageHorizontal = $(`.${headStyle.triggerCarousel1}`);
          if(elementImageHorizontal.offset().top + elementImageHorizontal.outerHeight(true) < $(window).scrollTop()) {
            $(`.${carouselHorizontal.liste}`).css('height', $(`.${carouselHorizontal.global} #carouselThd`).outerHeight(true));
            
            let stepOne = $(`.${headStyle.stepCarousel1} .${headStyle.step1}`);
            let stepTwo = $(`.${headStyle.stepCarousel1} .${headStyle.step2}`);
            let stepThree = $(`.${headStyle.stepCarousel1} .${headStyle.step3}`);

            
            
            var differenceHorizontal = (($(window).scrollTop() - $(`.${headStyle.stepCarousel1}`).position().top) / (stepOne.offset().top - $(`.${headStyle.stepCarousel1}`).position().top)) * 100
            if(differenceHorizontal < 100 && differenceHorizontal > 0) {
              $(`.${carouselHorizontal.global} #carouselFst h3`).css("opacity", "1");
              $(`.${carouselHorizontal.global} #carouselFst p`).css("opacity", "1");
              $(`.${carouselHorizontal.liste} div#step1`).removeClass(`${carouselHorizontal.inactive}`);
              $(`.${carouselHorizontal.liste} div#step1`).addClass(`${carouselHorizontal.active}`);
              $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.globalActive}`);
              $(`.${carouselHorizontal.loader}:eq(0)`).addClass(`${carouselHorizontal.loaderActive}`);
              $(`.${carouselHorizontal.step}:eq(0)`).css("height", `${differenceHorizontal}%`);
              $(`.${carouselHorizontal.step}:eq(1)`).css("height", `0`);
              $(`.${carouselHorizontal.loader}:eq(1)`).removeClass(`${carouselHorizontal.loaderActive}`);
              $(`.${carouselHorizontal.liste} div#step2`).removeClass(`${carouselHorizontal.active}`);
              $(`.${carouselHorizontal.liste} div#step2`).addClass(`${carouselHorizontal.inactive}`);
              $(`.${carouselHorizontal.global} #carouselScd`).removeClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst`).addClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst h3`).addClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst p`).addClass(effectStyles.appear);
            } else if(differenceHorizontal >= 100 && differenceHorizontal <= 200) {
              $(`.${carouselHorizontal.global} #carouselFst h3`).css("opacity", "0");
              $(`.${carouselHorizontal.global} #carouselFst p`).css("opacity", "0");
              $(`.${carouselHorizontal.global} #carouselFst`).removeClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst h3`).removeClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst p`).removeClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselThd`).removeClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselScd`).addClass(effectStyles.appear);
              $(`.${carouselHorizontal.liste} div#step2`).removeClass(`${carouselHorizontal.inactive}`);
              $(`.${carouselHorizontal.liste} div#step2`).addClass(`${carouselHorizontal.active}`);
              $(`.${carouselHorizontal.loader}:eq(1)`).addClass(`${carouselHorizontal.loaderActive}`);
              $(`.${carouselHorizontal.step}:eq(1)`).css("height", `${differenceHorizontal - 100}%`);
              $(`.${carouselHorizontal.step}:eq(2)`).css("height", `0`);
              $(`.${carouselHorizontal.loader}:eq(0)`).removeClass(`${carouselHorizontal.loaderActive}`);
              $(`.${carouselHorizontal.loader}:eq(2)`).removeClass(`${carouselHorizontal.loaderActive}`);
              $(`.${carouselHorizontal.liste} div#step3`).removeClass(`${carouselHorizontal.active}`);
              $(`.${carouselHorizontal.liste} div#step3`).addClass(`${carouselHorizontal.inactive}`);
            } else if(differenceHorizontal >= 201) {
              let elementLimite = $(`.${carouselHorizontal.global} #carouselThd`);
              if((elementLimite.offset().top + elementLimite.outerHeight(true) >= $(`.${headStyle.triggerCarousel2}`).offset().top) && !($(`.${carouselHorizontal.global}`).offset().top > $(window).scrollTop()) && $(`.${carouselHorizontal.global} #carouselThd`).css("opacity") == "1") {
                console.log("La box text depasse la suite");
                $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.globalActive}`);
                $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.finished}`);
                scrollHorizontal.scrollLock = true;
              } else {// if($(`.${carouselHorizontal.global}`).offset().top > $(window).scrollTop())  
                $(`.${carouselHorizontal.global} #carouselFst`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselFst h3`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselFst p`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselScd`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselThd`).addClass(effectStyles.appear);
                $(`.${carouselHorizontal.liste} div#step3`).removeClass(`${carouselHorizontal.inactive}`);
                $(`.${carouselHorizontal.liste} div#step3`).addClass(`${carouselHorizontal.active}`);
                $(`.${carouselHorizontal.loader}:eq(1)`).removeClass(`${carouselHorizontal.loaderActive}`);
                $(`.${carouselHorizontal.loader}:eq(2)`).addClass(`${carouselHorizontal.loaderActive}`);
                $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.globalActive}`);
                $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.finished}`);
              }
              $(`.${carouselHorizontal.step}:eq(2)`).css("height", `${differenceHorizontal - 200}%`);
              // }
            } else if(differenceHorizontal <= 0) {
              $(`.${carouselHorizontal.step}:eq(1)`).css("height", `0`);

            }
            //  else if(differenceHorizontal >= 301) {
            //   $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.globalActive}`);
            //   $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.finished}`);

            // }
          } else {
            $(`.${carouselHorizontal.liste} div#step1`).removeClass(`${carouselHorizontal.active}`);
            $(`.${carouselHorizontal.liste} div#step1`).addClass(`${carouselHorizontal.inactive}`);
            $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.globalActive}`);
            $(`.${carouselHorizontal.loader}:eq(0)`).removeClass(`${carouselHorizontal.loaderActive}`);
            $(`.${carouselHorizontal.global} #carouselFst h3`).css("opacity", "");
            $(`.${carouselHorizontal.global} #carouselFst p`).css("opacity", "");
          };

          let elementImage = $(`.${headStyle.triggerCarousel2}`);
          if(elementImage.offset().top + elementImage.outerHeight(true) < $(window).scrollTop()) {
            let stepOne = $(`.${headStyle.stepCarousel2} .${headStyle.step1}`);
            $(`.${carousel.liste}`).css('height', $(`.${carousel.global} #carouselThd`).outerHeight(true) + $(`.${carousel.listeCenter}`).outerHeight(true));


            var difference = (($(window).scrollTop() - $(`.${headStyle.stepCarousel2}`).position().top) / (stepOne.offset().top - $(`.${headStyle.stepCarousel2}`).position().top - 10)) * 100

            if(difference < 100 && difference > 0) {
              $(`.${carousel.global} #carouselFst h3`).css("opacity", "1");
              $(`.${carousel.global} #carouselFst p`).css("opacity", "1");
              $(`.${carousel.liste} div#step1`).removeClass(`${carousel.inactive}`);
              $(`.${carousel.liste} div#step1`).addClass(`${carousel.active}`);
              $(`.${carousel.global}`).addClass(`${carousel.globalActive}`);
              $(`.${carousel.loader}:eq(0)`).addClass(`${carousel.loaderActive}`);
              $(`.${carousel.step}:eq(0)`).css("width", `${difference}%`);
              $(`.${carousel.step}:eq(1)`).css("width", `0`);
              $(`.${carousel.loader}:eq(1)`).removeClass(`${carousel.loaderActive}`);
              $(`.${carousel.liste} div#step2`).removeClass(`${carousel.active}`);
              $(`.${carousel.liste} div#step2`).addClass(`${carousel.inactive}`);
              $(`.${carousel.global} #carouselScd`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselFst`).addClass(effectStyles.appear);
              $(`.${carousel.global} #carouselFst h3`).addClass(effectStyles.appear);
              $(`.${carousel.global} #carouselFst p`).addClass(effectStyles.appear);
            } else if(difference >= 100 && difference <= 200) {
              $(`.${carousel.global} #carouselFst h3`).css("opacity", "0");
              $(`.${carousel.global} #carouselFst p`).css("opacity", "0");
              $(`.${carousel.global} #carouselFst`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselFst h3`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselFst p`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselThd`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselScd`).addClass(effectStyles.appear);
              $(`.${carousel.liste} div#step2`).removeClass(`${carousel.inactive}`);
              $(`.${carousel.liste} div#step2`).addClass(`${carousel.active}`);
              $(`.${carousel.global}`).addClass(`${carousel.globalActive}`);
              $(`.${carousel.loader}:eq(1)`).addClass(`${carousel.loaderActive}`);
              $(`.${carousel.step}:eq(1)`).css("width", `${difference - 100}%`);
              $(`.${carousel.step}:eq(2)`).css("width", `0`);
              $(`.${carousel.loader}:eq(0)`).removeClass(`${carousel.loaderActive}`);
              $(`.${carousel.loader}:eq(2)`).removeClass(`${carousel.loaderActive}`);
              $(`.${carousel.liste} div#step3`).removeClass(`${carousel.active}`);
              $(`.${carousel.liste} div#step3`).addClass(`${carousel.inactive}`);
              // $(`.${carousel.liste}`).css('height', "");
            } else if(difference >= 201 && difference <= 300) {
              // $(`.${carousel.liste}`).css('height', $(`.${carousel.global} #carouselThd`).outerHeight(true) + $(`.${carousel.listeCenter}`).outerHeight(true));
              $(`.${carousel.global} #carouselFst`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselFst h3`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselFst p`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselScd`).removeClass(effectStyles.appear);
              $(`.${carousel.global} #carouselThd`).addClass(effectStyles.appear);
              $(`.${carousel.liste} div#step3`).removeClass(`${carousel.inactive}`);
              $(`.${carousel.liste} div#step3`).addClass(`${carousel.active}`);
              $(`.${carousel.global}`).addClass(`${carousel.globalActive}`);
              $(`.${carousel.loader}:eq(1)`).removeClass(`${carousel.loaderActive}`);
              $(`.${carousel.loader}:eq(2)`).addClass(`${carousel.loaderActive}`);
              $(`.${carousel.step}:eq(2)`).css("width", `${difference - 200}%`);
              $(`.${carousel.global}`).removeClass(`${carousel.finished}`);
            } else if(difference <= 0) {
              $(`.${carousel.step}:eq(1)`).css("height", `0`);

            } else if(difference > 300) {
              $(`.${carousel.global}`).removeClass(`${carousel.globalActive}`);
              $(`.${carousel.global}`).addClass(`${carousel.finished}`);

            }
          } else {
            $(`.${carousel.liste} div#step1`).removeClass(`${carousel.active}`);
            $(`.${carousel.liste} div#step1`).addClass(`${carousel.inactive}`);
            $(`.${carousel.global}`).removeClass(`${carousel.globalActive}`);
            $(`.${carousel.loader}:eq(0)`).removeClass(`${carousel.loaderActive}`);
          };
      });
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}