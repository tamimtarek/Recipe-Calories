
import PropTypes from 'prop-types';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[550px] w-[100%] lg:rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/QPJ1dVk/Rectangle-1.jpg)' }}>
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Discover an exceptional cooking<br /> class tailored for you!</h1>
                        <p className="mb-5">Indulge in Culinary Delights. Whip Up Gourmet Creations. Unlock Flavorful Recipes. Master the Art <br /> of Cooking. Savor Exquisite Dishes. Discover Epicurean Adventures.</p>
                        <div>
                        <button class="btn bg-[#0BE58A] rounded-full text-lg font-semibold m-4 border-none">Explore Now</button>
                        <button class="btn btn-outline hover:bg-transparent  text-white font-normal rounded-full text-lg">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;