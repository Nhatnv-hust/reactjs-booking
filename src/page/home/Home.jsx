import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import "./Home.css"
import Featured from "../../component/featured/Featured";
import PropertyList from "../../component/propertyList/PropertyList";
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties"
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <div className="homecontainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>

      </div>
    </div>
  )
}

export default Home