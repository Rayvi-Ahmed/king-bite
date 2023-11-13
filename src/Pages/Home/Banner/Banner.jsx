import img1 from '../../../../Images/cricket-world-cup-2007.avif'
import img2 from '../../../../Images/2003.jpg'
import img3 from '../../../../Images/1999.jpg'
import img4 from '../../../../Images/2015-02.jpg'
import img5 from '../../../../Images/Banner 1.webp'
import img6 from '../../../../Images/CT-2009-02.jpg'
import img7 from '../../../../Images/1987.avif'
import img8 from '../../../../Images/test-cham.webp'
import img9 from '../../../../Images/Australia_at_Champions_Torphy.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Parallax } from 'react-scroll-parallax'

const Banner = () => {
    return (
        <section className=''>
            <div className="bg-[#085251;]">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-gray-50">Provident blanditiis cum exercitationem</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50">Learn more</button>
                    </div>
                </div>
            </div>
            <Parallax speed={-20}>
                <div className="lg:w-[750px] w-5/6  mx-auto -mt-20 rounded-lg shadow-lg lg:-mt-40  bg-yellow-400">
                    <Carousel className='mb-0'>
                        <div>
                            <img src={img7} />

                        </div>
                        <div>
                            <img src={img3} />

                        </div>
                        <div>
                            <img src={img2} />

                        </div>
                        <div>
                            <img src={img1} />

                        </div>
                        <div>
                            <img src={img4} />

                        </div>
                        <div>
                            <img src={img6} />

                        </div>
                        <div>
                            <img src={img5} />

                        </div>
                        <div>
                            <img src={img8} />

                        </div>
                        <div>
                            <img src={img9} />

                        </div>
                    </Carousel>
                </div>
            </Parallax>

        </section>
    );
};

export default Banner;