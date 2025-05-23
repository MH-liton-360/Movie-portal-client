import banner_01 from "../assets/deadpool-2-movie-2018-poster-a2.jpg"
import banner_02 from "../assets/ariel-and-flounder-cc.jpg"
import banner_03 from "../assets/Drumboys.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full pt-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={banner_01}
                    className="w-full h-[500px]" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={banner_02}
                    className="w-full h-[500px]" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={banner_03}
                    className="w-full h-[500px]" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;