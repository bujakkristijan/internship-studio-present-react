import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import PopupComponent from './components/popup/PopupComponent';
import SliderBannerComponent from './components/slider-banner/SliderBannerComponent';
import MoreAboutUsComponent from './components/more-about-us/MoreAboutUsComponent';
import DistributionComponent from './components/distribution/DistributionComponent';
import OurOffersComponent from './components/our-offers/OurOffersComponent';
import DvgNumbersComponent from './components/dvg-numbers/DvgNumbersComponent';
import OurProductsComponent from './components/our-products/OurProductsComponent';
import OurBrandsComponent from './components/our-brands/OurBrandsComponent';
import FooterComponent from './components/footer/FooterComponent';

function App() {
  return (
    <div className="App">

      <PopupComponent/>
      
      <HeaderComponent/>
      <SliderBannerComponent/>
      <MoreAboutUsComponent/>
      <DistributionComponent/>
      <OurOffersComponent/>
      <DvgNumbersComponent/>
      <OurProductsComponent/>
      <OurBrandsComponent/>
      <FooterComponent/>
      
    </div>
  );
}

export default App;
