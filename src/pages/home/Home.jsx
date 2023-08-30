import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Header from "../../components/Header";

const Home = () => {
    return (
        <main className='home section'>
            <Header />
            <div className='home__container container grid'>
                <div className='home__content grid'>
                    <Social />
                    <div className='home__img'></div>
                    <Data />
                </div>
            </div>
        </main>
    );
};

export default Home;
