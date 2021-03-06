import React from "react";
import $ from 'jquery';
import headStyle from '../styles/components/landing.module.css';
import {carouselHorizontalFunction} from '/components/carousel/horizontal';
import {carouselVerticalFunction} from '/components/carousel/vertical';



export default class Layout extends React.Component {
  
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      window.scrollTo(0, 0);
    })
      window.scrollTo(0, 0);
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
      var parallaxY = 0;
      var parallaxY2 = 0;
      $(document).on("scroll", function() {
        
        const image = $(`.${headStyle.image}`);
        const imageHidden = $(`.${headStyle.imageHidden}`);
        const imageMid = image.offset().top;
        
        if($(window).scrollTop() > imageMid) {
          const imageBottom = image.offset().top + image.outerHeight(true) - $(window).scrollTop();
          const imageStart = (imageMid - $(window).scrollTop()) * -1;

          let pourcentage = imageStart / imageBottom;
          imageHidden.css("opacity", pourcentage);
        } else {
          imageHidden.css("opacity", "0");
        }


        parallaxY = $(document).scrollTop() * .30;
        parallaxY2 = $(document).scrollTop() * -.20;
          $("div[parallaxinit='true']div[parallaxtop='true']").css("transform", "translateY("+parallaxY+"px)");
          $("div[parallaxinit='true']div[parallaxbottom='true']").css("transform", "translateY("+parallaxY2+"px)");

        carouselHorizontalFunction();
        carouselVerticalFunction();

      });
      carouselHorizontalFunction();
      carouselVerticalFunction();


      var animationToFill = document.querySelector("[animationto='fill']"),
      animationToTordu = document.querySelector("[animationto='tordu']");

      $('body').on('mouseenter', "[animationtype='hover']", function() { 
        console.log(animationToFill)
        animationToFill.beginElement();
      });
      $('body').on('mouseleave', "[animationtype='hover']", function() { 
        console.log(animationToTordu)
        animationToTordu.beginElement();
      });

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