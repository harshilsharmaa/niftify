import './mainContainer.css'
import {searchIcon} from '../../utilities/icons'
import CardContainer from '../CardContainer/CardContainer';
import { useEffect, useState } from 'react';

const MainContainer = ()=>{

    const [search, setSearch] = useState("");
    const [data, setData] = useState(null);

    useEffect(()=>{

    },[])
// 0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
    const fetchSearchResults = async()=>{
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${search}`);
        const json = await res.json();
        console.log(json);
        const sorted = json.pairs.sort((a,b)=>b.priceUsd-a.priceUsd)
        
        setData(sorted.slice(0,10));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(search.length>0){
            fetchSearchResults();
        }
    }

    return (
       <div className='mainContainer'>
            <div className="header">
                <div className="search">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" name="" id="" placeholder='Search'/>
                        <button className='search-btn' type="submit">{searchIcon}</button>
                    </form>
                </div>

                <button className='connect-btn'>Connect</button>
            </div>

            <div className="content">
                <h4>Token Search Results</h4>

                <div className="cardsContainer">
                {
                    
                    data && data.map((item)=>{
                        return <CardContainer item={item} key={item.fdv}/>
                    })
                }
                    
                </div>
            </div>
       </div>
    )
}

export default MainContainer;

// {
//     data && <CardContainer item={data[0]} key={data[0].fdv}/>
// }