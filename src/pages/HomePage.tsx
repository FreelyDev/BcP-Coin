import { useEffect, useState } from 'react';
import Footer from 'components/footer/Footer';
import Home from 'components/sections/Home/Home';
import About from 'components/sections/About/About';
import PlayGame from 'components/sections/PlayGame/PlayGame';
import Tokenomics from 'components/sections/Tokenomics/Tokenomics';
import Coins from 'components/sections/Coins/Coins';
import NeverMiss from 'components/sections/NeverMiss/NeverMiss';
import Loading from 'components/loading/Loading';
import GameBoard from 'components/sections/GameBoard/GameBoard';

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [isLoading4, setIsLoading4] = useState(true);
    const [isLoading5, setIsLoading5] = useState(true);
    const [isLoading6, setIsLoading6] = useState(true);
    const [isLoading7, setIsLoading7] = useState(true);
    useEffect(() => {
        if (!isLoading1 && !isLoading2 && !isLoading3 && !isLoading4 && !isLoading5 && !isLoading6 && !isLoading7 ){
            setIsLoading(false)
        }else{
            setIsLoading(true)
        }

    }, [isLoading1, isLoading2, isLoading3, isLoading4, isLoading5, isLoading6, isLoading7]);
    return (
        <>
        <Loading isLoading = {isLoading}/>
        <div className="sections">
            <Home setIsLoading={setIsLoading1}/>
            <About setIsLoading={setIsLoading2}/>
            <GameBoard setIsLoading={setIsLoading3}/>
            <Coins setIsLoading={setIsLoading4}/>
            <Tokenomics/>
            <PlayGame setIsLoading={setIsLoading5}/>
            <NeverMiss setIsLoading={setIsLoading6}/>
            <Footer setIsLoading={setIsLoading7}/>
            
        </div>

        </>
        
    )
}

export default HomePage;