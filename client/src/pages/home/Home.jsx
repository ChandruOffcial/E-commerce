import Banner from "../../components/Banner/Banner"
import ClientReview from "../../components/ClientReview/ClientReview"
import NewArrival from "../../components/NewArrival/NewArrival"
import Services from "../../components/Services/Services"
import SupperOffer from "../../components/SuperOffer/SupperOffer"
// import Card from "../../components/Card/Card"
import TopCollectio from "../../components/collection/TopCollectio"


const Home = () => {
    return (
        <>
            <Banner />
            <TopCollectio />
            <Services />
            <SupperOffer />
            <NewArrival />
            <ClientReview />
        </>
    )
}

export default Home