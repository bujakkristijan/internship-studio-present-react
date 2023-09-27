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
      
    </div>
  );
}

export default App;
