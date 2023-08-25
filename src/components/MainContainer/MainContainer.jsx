import './mainContainer.css'
import {searchIcon} from '../../utilities/icons'
import CardContainer from '../CardContainer/CardContainer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import { menuIcon } from '../../utilities/icons';


const MainContainer = ()=>{

    const {navId} = useSelector((state)=>state.app);

    const [search, setSearch] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

    },[])
// 0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
    const fetchTokenSearchResults = async()=>{
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${search}`);
        const json = await res.json();
        if(json && json?.pairs){
            const sorted = json.pairs.sort((a,b)=>b.priceUsd-a.priceUsd)
            setData(sorted.slice(0,10));
        }
        else{
            setData([]);
        }
        setLoading(false);
    }

    const fetchPairSearchResults = async()=>{
        const res = await fetch(`https://api.dexscreener.com/latest/dex/search/?q=${search}`);
        const json = await res.json();
        if(json && json?.pairs){
            const sorted = json.pairs.sort((a,b)=>b.priceUsd-a.priceUsd)
            setData(sorted.slice(0,10));
        }
        else{
            setData([]);
        }
        setLoading(false);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        if(search.length>0){
            navId==1?fetchTokenSearchResults():fetchPairSearchResults();
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

                <div className='header-p2'>
                    <p className='menu-btn'>{menuIcon}</p>
                    <button className='connect-btn'>
                        <div style={{display:"hidden"}}>
                            <ConnectButton className='connect-btn'/>
                        </div>
                    </button>
                </div>
            </div>

            <div className="content">
                <h4>{
                    navId==1?
                    "Token Search Results"
                    : "Pair Search Results"
                }</h4>

                <div className="cardsContainer">
                {

                    loading? <h1>Loading ... </h1>

                    :data?.length===0 ? <h2>No Data To Show</h2>
                    
                    :data?.length >0 ? data.map((item)=>{
                        return <CardContainer item={item} key={item.fdv}/>
                    })
                    :null
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