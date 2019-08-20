import React, { Component } from 'react'
import Slider from "react-slick"
import PropTypes from 'prop-types'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './styles.css'

const styleSlideDefault = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  centerPadding: "40px",
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: false,
        centerPadding: "0px",
        lazyLoad: false,
        fade: true,
      },
    },
  ],
}
const styleSlideOne = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  pauseOnHover: false,
}
const styleSlideThree = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "center",
  // centerMode: true,
  centerPadding: "40px",
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: false,
        centerPadding: "0px",
        lazyLoad: false,
        fade: true,
      },
    },
  ],
}
export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      listBranches,
      type
    } = this.props
    let styleCarousel;
    if(type == "slideOne"){
      styleCarousel = styleSlideOne;
    }
    else if(type == "slideThree"){
      styleCarousel = styleSlideThree;
    }
    else{
      styleCarousel = styleSlideDefault
    }
    return (
      <div>
        <Slider {...styleCarousel}>
          {listBranches.map((item, index) => {
            return(
              <div>
                <div className="branch-img">
                  <img alt={item.branchName} src={item.imageUrl}/>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
