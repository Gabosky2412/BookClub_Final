    import Slider from "react-slick";
    import ADD from "../imgs/ADD.png";
    import ADMDT from "../imgs/ADMDT.png";
    import RYJ from "../imgs/RYJ.png";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    export default function CustomSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full w-3/12 mb-12 shadow-2xl border border-black">
        <Slider {...settings}>
            <div>
            <img src={ADMDT} alt="Andres" className="w-full" />
            </div>
            <div>
            <img src={ADD} alt="Example" className="w-full" />
            </div>
            <div>
            <img src={RYJ} alt="Logo" className="w-full" />
            </div>
        </Slider>
        </div>
    );
    }
