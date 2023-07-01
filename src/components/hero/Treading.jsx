import { Title } from '../common/Title'
import { Card_lg } from '../common/Card_lg'

import { treading } from '../assets/data/data'

import Slider from "react-slick";

export function Treading() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    };

    return (
        <div>
            <section className='treading hero'>
                <Title title='Treading' />
                <Slider {...settings}>
                    {treading.map((item, i) => (

                        <div className='box card m-5'>
                            <div className='mr-5'>
                                <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
                            </div>
                        </div>
                    ))}
                </Slider>

            </section>
        </div>
    )
}
