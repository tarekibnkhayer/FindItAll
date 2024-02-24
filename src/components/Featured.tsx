import Image from "next/image";
import bike from "../../public/bike.jpg";
import computer from "../../public/computer.jpg";
import watch from "../../public/watch.jpg";

const Slider = () => {
    return (
        <div className="carousel w-full xl:h-[630px]">
        <div id="slide1" className="carousel-item relative w-full">
          <Image  src={bike} alt="bike photo" className="w-full h-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full xl:h-[630px]">
          <Image  src={computer}  alt="computer" className="w-full h-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full xl:h-[630px]">
          <Image   src={watch} alt="watch" className="w-full h-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Slider;