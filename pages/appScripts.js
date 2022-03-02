import React from "react";
import $ from 'jquery';
import mouse from '../styles/components/mouseFollow.module.css';
import effectStyles from '../styles/effect.module.css';
import headStyle from '../styles/components/landing.module.css';
import header from '/styles/components/header.module.css';


export default class Layout extends React.Component {
    componentDidMount() {
        $(document).on("mousemove", function(e) {
            $(`.${mouse.global}`).css('top', e.clientY).css('left', e.clientX);
        });

        $(`body`).on("mousedown", function(e) {
            if($(e.target).attr('noclick') == 'true') {
              $(`.${mouse.subGlobal}`).css('width', '40px');
              $(`.${mouse.subGlobal}`).css('height', '40px');
            } else if($(e.target).attr('noclickbutton') == 'true') {
              $(`.${mouse.global}`).css('width', '25px');
              $(`.${mouse.global}`).css('height', '25px');
    
              $(`.${mouse.subGlobal}`).css('width', '25px');
              $(`.${mouse.subGlobal}`).css('height', '25px');
            } else {
              $(`.${mouse.global}`).css('width', '25px');
              $(`.${mouse.global}`).css('height', '25px');
    
              $(`.${mouse.subGlobal}`).css('width', '25px');
              $(`.${mouse.subGlobal}`).css('height', '25px');
            }
          });
          $(`body`).on("mouseup", function(e) {
            if($(e.target).attr('noclick') == 'true') {
              $(`.${mouse.subGlobal}`).css('width', '40px');
              $(`.${mouse.subGlobal}`).css('height', '40px');
            } else if($(e.target).attr('noclickbutton') == 'true') {
              $(`.${mouse.global}`).css('width', '30px');
              $(`.${mouse.global}`).css('height', '30px');
    
              $(`.${mouse.subGlobal}`).css('width', '30px');
              $(`.${mouse.subGlobal}`).css('height', '30px');
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
          });
    
          $("body").on('mouseenter', `[clickbutton='true']`, function() {
            $(`.${mouse.global}`).css('width', '30px');
            $(`.${mouse.global}`).css('height', '30px');
    
            $(`.${mouse.subGlobal}`).css('width', '30px');
            $(`.${mouse.subGlobal}`).css('height', '30px');
          });
          $("body").on('mouseleave', `[clickbutton='true']`, function() {
            $(`.${mouse.global}`).css('width', '40px');
            $(`.${mouse.global}`).css('height', '40px');
    
            $(`.${mouse.subGlobal}`).css('width', '3px');
            $(`.${mouse.subGlobal}`).css('height', '3px');
          });

          $("body").on('mouseenter', `[noclickbutton='true']`, function() {
            $(`.${mouse.global}`).css('width', '40px');
            $(`.${mouse.global}`).css('height', '40px');
    
            $(`.${mouse.subGlobal}`).css('width', '40px');
            $(`.${mouse.subGlobal}`).css('height', '40px');
          });
          $("body").on('mouseleave', `[noclickbutton='true']`, function() {
            $(`.${mouse.global}`).css('width', '40px');
            $(`.${mouse.global}`).css('height', '40px');
    
            $(`.${mouse.subGlobal}`).css('width', '3px');
            $(`.${mouse.subGlobal}`).css('height', '3px');
          });
    

          const faders = document.querySelectorAll("[fadein='true']");
          const parallaxs = document.querySelectorAll("[parallaxinit='false']");
    
          const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -10% 0px"
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
        
          let scrollTopPosition = 0;
          
          var parallaxOriginPos = 0;
          var parallaxOriginNeg = 0;
          $(document).on('scroll', function() {
            parallaxs.forEach(parallax => { 
              checkParallax(parallax);
            });
            if(scrollTopPosition > $(window).scrollTop()) {
              $('.'+header.global).css('transform', 'translateY(0)');
            } else {
              if($(window).scrollTop() >= 1) $('.'+header.global).css('transform', 'translateY(-100%)');
            }
            scrollTopPosition = $(window).scrollTop();


            parallaxOriginPos = $(document).scrollTop() * .10;
            parallaxOriginNeg = $(document).scrollTop() * -.10;
            $("div[parallaxorig='true']div[parallaxtop='true']").css("transform", "translateY("+parallaxOriginPos+"px)");
            $("div[parallaxorig='true']div[parallaxbottom='true']").css("transform", "translateY("+parallaxOriginNeg+"px)");

          })
          function checkParallax(parallax) {
            const elementPrincipal = parallax.getBoundingClientRect();
            const topElement = elementPrincipal.top;
            const bottomElement = topElement + elementPrincipal.height;
            
            if(topElement < $(window).outerHeight() && bottomElement > 0) {
              let value = ($(window).innerHeight() - topElement);
              let parallaxY = value*.1;
              let parallaxY2 = value*-.1;
              
              if(parallax.hasAttribute('parallaxtop')) {
                parallax.style.transform = 'translateY('+parallaxY+'px)';
              } else {
                parallax.style.transform = 'translateY('+parallaxY2+'px)';
              }
            }
          }
    }


    componentWillUnmount() {
      $(document).off("scroll");
      $(document).off("mouseenter");
      $(document).off("mouseleave");
    }


    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}