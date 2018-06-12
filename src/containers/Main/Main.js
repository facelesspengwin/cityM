import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './Main.scss';

import Data from '../../assets/data/content.json';

import TextBlock from '../../components/Content/TextBlock/TextBlock';

class Main extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            beforeChange: function(currentSlide, nextSlide) {
              console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
              console.log("after change", currentSlide);
            }
          };
        return(
            <section className={styles.Main}>
                <Slider {...settings}>
                    <TextBlock title={Data.content.page1.title} desc={Data.content.page1.desc} />
                    <TextBlock title={Data.content.page2.title} desc={Data.content.page2.desc} />
                    <TextBlock title={Data.content.page3.title} desc={Data.content.page3.desc} />            
                </Slider>
            </section>
        );
    }
}

export default Main;