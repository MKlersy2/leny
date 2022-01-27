import React from "react";
import $ from 'jquery';
import effectStyles from '../styles/effect.module.css';
import headStyle from '../styles/components/landing.module.css';
import carousel from '../styles/components/carousel.module.css';
import carouselHorizontal from '../styles/components/carouselHorizontal.module.css';
import mouse from '../styles/components/mouseFollow.module.css';

export default class Layout extends React.Component {
    componentDidMount() {

      $(document).on("mousemove", function(e) {
        $(`.${mouse.global}`).css('top', e.clientY).css('left', e.clientX);
      });



      $(`body`).on("mousedown", function(e) {
        if($(e.target).attr('noclick') == 'true') {
          $(`.${mouse.subGlobal}`).css('width', '40px');
          $(`.${mouse.subGlobal}`).css('height', '40px');
        } else {
          $(`.${mouse.global}`).css('width', '25px');
          $(`.${mouse.global}`).css('height', '25px');

          $(`.${mouse.subGlobal}`).css('width', '25px');
          $(`.${mouse.subGlobal}`).css('height', '25px');
        }
      });
      $(`body`).on("mouseup", function(e) {
        console.log($(e.target))
        if($(e.target).attr('noclick') == 'true') {
          $(`.${mouse.subGlobal}`).css('width', '40px');
          $(`.${mouse.subGlobal}`).css('height', '40px');
        } else {
          $(`.${mouse.global}`).css('width', '40px');
          $(`.${mouse.global}`).css('height', '40px');
  
          $(`.${mouse.subGlobal}`).css('width', '3px');
          $(`.${mouse.subGlobal}`).css('height', '3px');
        }
      });

      $("body").on('mouseenter', `.${headStyle.image}`, function() {
        $(`.${mouse.subGlobal}`).css('width', '40px');
        $(`.${mouse.subGlobal}`).css('height', '40px');
      });
      $("body").on('mouseleave', `.${headStyle.image}`, function() {
        $(`.${mouse.subGlobal}`).css('width', '3px');
        $(`.${mouse.subGlobal}`).css('height', '3px');
      })

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
      $(document).on("scroll", function() {

        const image = $(`.${headStyle.image}`);
        const imageHidden = $(`.${headStyle.imageHidden}`);
        const imageMid = image.offset().top;
        
        if($(window).scrollTop() > imageMid) {
          const imageBottom = image.offset().top + image.outerHeight(true) - $(window).scrollTop();
          const imageStart = (imageMid - $(window).scrollTop()) * -1;

          console.log(imageStart, imageBottom);
          let pourcentage = imageStart / imageBottom;
          console.log(pourcentage);
          imageHidden.css("opacity", pourcentage);
        } else {
          imageHidden.css("opacity", "0");
        }

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
              $(`.${carouselHorizontal.global} #carouselFst .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "1");
              $(`.${carouselHorizontal.global} #carouselScd .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "0");
              $(`.${carouselHorizontal.global} #carouselThd .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "0");
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
              $(`.${carouselHorizontal.global} #carouselFst .${carouselHorizontal.geodeGlobal}`).addClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst p`).addClass(effectStyles.appear);
            } else if(differenceHorizontal >= 100 && differenceHorizontal <= 200) {
              $(`.${carouselHorizontal.global} #carouselFst h3`).css("opacity", "0");
              $(`.${carouselHorizontal.global} #carouselFst p`).css("opacity", "0");
              $(`.${carouselHorizontal.global} #carouselFst`).removeClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst h3`).removeClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst .${carouselHorizontal.geodeGlobal}`).removeClass(effectStyles.appear);
              $(`.${carouselHorizontal.global} #carouselFst .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "0");
              $(`.${carouselHorizontal.global} #carouselScd .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "1");
              $(`.${carouselHorizontal.global} #carouselThd .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "0");
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
                $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.globalActive}`);
                $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.finished}`);
              } else {// if($(`.${carouselHorizontal.global}`).offset().top > $(window).scrollTop())  
                $(`.${carouselHorizontal.global} #carouselFst`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselFst h3`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselFst .${carouselHorizontal.geodeGlobal}`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselFst p`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselScd`).removeClass(effectStyles.appear);
                $(`.${carouselHorizontal.global} #carouselThd`).addClass(effectStyles.appear);
                $(`.${carouselHorizontal.liste} div#step3`).removeClass(`${carouselHorizontal.inactive}`);
                $(`.${carouselHorizontal.liste} div#step3`).addClass(`${carouselHorizontal.active}`);
                $(`.${carouselHorizontal.global} #carouselFst .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "0");
                $(`.${carouselHorizontal.global} #carouselScd .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "0");
                $(`.${carouselHorizontal.global} #carouselThd .${carouselHorizontal.geodeBigGlobal}`).css("opacity", "1");
                $(`.${carouselHorizontal.loader}:eq(1)`).removeClass(`${carouselHorizontal.loaderActive}`);
                $(`.${carouselHorizontal.loader}:eq(2)`).addClass(`${carouselHorizontal.loaderActive}`);
                $(`.${carouselHorizontal.global}`).addClass(`${carouselHorizontal.globalActive}`);
                $(`.${carouselHorizontal.global}`).removeClass(`${carouselHorizontal.finished}`);
              }
              $(`.${carouselHorizontal.step}:eq(2)`).css("height", `${differenceHorizontal - 200}%`);
            } else if(differenceHorizontal <= 0) {
              $(`.${carouselHorizontal.step}:eq(1)`).css("height", `0`);
              $(`.${carouselHorizontal.step}:eq(0)`).css("height", `0%`);
            }
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
            } else if(difference >= 201) {

              let elementLimite = $(`.${carousel.global} #carouselThd`);
              if((elementLimite.offset().top + elementLimite.outerHeight(true) >= $(`.${headStyle.triggerCarousel3}`).offset().top) && !($(`.${carousel.global}`).offset().top > $(window).scrollTop()) && $(`.${carousel.global} #carouselThd`).css("opacity") == "1") {
                $(`.${carousel.global}`).removeClass(`${carousel.globalActive}`);
                $(`.${carousel.global}`).addClass(`${carousel.finished}`);
              } else {// if($(`.${carousel.global}`).offset().top > $(window).scrollTop())  
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
                $(`.${carousel.global}`).removeClass(`${carousel.finished}`);
              }
              $(`.${carousel.step}:eq(2)`).css("width", `${difference - 200}%`);
            } else if(difference <= 0) {
              $(`.${carousel.step}:eq(1)`).css("height", `0`);

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