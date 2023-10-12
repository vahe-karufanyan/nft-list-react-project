import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Properties from './components/nfts/Nfts';
import NftDetails from './components/nftDetails/NftDetails';
import Hero from './components/hero/Hero';
import FeaturedProperties from './components/featuredNfts/FeaturedNfts';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <NavBar />
              <Hero />
              <FeaturedProperties />
              <Footer />
            </>
          }
        />
        <Route
          path='/nfts'
          element={
            <>
              <NavBar />
              <Properties />
              <Footer />
            </>
          }
        />
        <Route
          path='/nftDetails/:id'
          element={
            <>
              <NavBar />
              <NftDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
