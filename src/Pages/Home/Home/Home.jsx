import Footer from "../../../Components/Footer";
import BannerHome from "../BannerHome/BannerHome";
import Categories from "../Categories/Categories";
import Collections from "../Collections/Collections";


const Home = () => {
    return (
        <div>
            <BannerHome />
            <Categories />
            <Collections />

            <Footer />
        </div>
    );
};

export default Home;