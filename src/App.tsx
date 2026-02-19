import Navbar from "./components/navbar/Navbar.tsx";
import Banner from "./components/banner/Banner.tsx";
import Menu from "./components/menu/Menu.tsx";
import WhyusSection from "./components/whyus/WhyusSection.tsx";
import CoffeBanner from "./components/coffebanner/CoffeBanner.tsx";
import Comment from "./components/comment/Comment.tsx";
import NewsLetter from "./components/newsletter/NewsLetter.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Menu/>
            <WhyusSection/>
            <CoffeBanner/>
            <Comment/>
            <NewsLetter/>
            <Footer/>
        </>
    );
}

export default App;