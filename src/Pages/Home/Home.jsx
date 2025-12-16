import React from 'react'
import NewFooter from '../../components/footer/NewFooter'
import Header from '../../components/navbar/Header'
import Carousel from './Carousel'
import FAQs from './FAQs'
import Testimonals from './Testimonals'
import TyreBrands from './TyreBrands'
import Model from './Model'
import PopularTyreBrands from './PopularTyreBrands'
import Find from './Find'

const Home = () => {
    return (
        < >
            <Header />
            <Carousel />
            <Find/>
            <TyreBrands />
            {/* <PopularTyreBrands /> */}
            <Model />
            <Testimonals />
            <FAQs />
            <NewFooter />
        </>
    )
}

export default Home
