import Footer from '../Component/Footer/Footer';
import Hero from '../Component/Hero/Hero';
import Navbar from '../Component/Navber/Navbar';
import Taskmaster from '../Component/TaskMaster/Taskmaster';
import Testimonial from '../Component/Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Taskmaster></Taskmaster>
            <Testimonial/>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;