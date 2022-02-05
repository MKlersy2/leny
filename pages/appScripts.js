import React from "react";
import $ from 'jquery';
import mouse from '../styles/components/mouseFollow.module.css';
import effectStyles from '../styles/effect.module.css';
import headStyle from '../styles/components/landing.module.css';
import pricing from '../styles/components/pricing.module.css';


export default class Layout extends React.Component {
    componentDidMount() {
        $(document).on("mousemove", function(e) {
            $(`.${mouse.global}`).css('top', e.clientY).css('left', e.clientX);
        });

        $(`body`).on("mousedown", function(e) {
            if($(e.target).attr('noclick') == 'true') {
              $(`.${mouse.subGlobal}`).css('width', '40px');
              $(`.${mouse.subGlobal}`).css('height', '40px');
            } else if($(e.target).attr('noclickButton') == 'true') {
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
            } else if($(e.target).attr('noclickButton') == 'true') {
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
    
          $("body").on('mouseenter', `.${pricing.button}`, function() {
            $(`.${mouse.global}`).css('width', '30px');
            $(`.${mouse.global}`).css('height', '30px');
    
            $(`.${mouse.subGlobal}`).css('width', '30px');
            $(`.${mouse.subGlobal}`).css('height', '30px');
          });
          $("body").on('mouseleave', `.${pricing.button}`, function() {
            $(`.${mouse.global}`).css('width', '40px');
            $(`.${mouse.global}`).css('height', '40px');
    
            $(`.${mouse.subGlobal}`).css('width', '3px');
            $(`.${mouse.subGlobal}`).css('height', '3px');
          });
    

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
    
    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}