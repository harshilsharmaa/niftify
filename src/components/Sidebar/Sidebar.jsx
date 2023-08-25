import './sidebar.css'
import { logo, tokenLogo, pairLogo, facebookIcon, linkedinIcon, twitterIcon } from '../../utilities/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleNavId } from '../../utilities/slices/appSlice';

const Sidebar = ()=>{

    const {navId} = useSelector((state)=>state.app);

    console.log(navId);

    const dispatch = useDispatch();

    const changeNavHandler = (id)=>{
        if(navId!==id){
            dispatch(toogleNavId());
        }
    }

    return (
        <div className="sidebar">
            <div>
            
            <div className="head">
                <div className="logo">{logo}</div>
                <h3>NFTify</h3>
            </div>

            <div className="nav">
                <ul>
                    <li className={`${navId==1?"nav-li-selected":null}`} onClick={()=>changeNavHandler(1)}>
                        <div className="nav-logo">{tokenLogo}</div>
                        <h4>Token Address</h4>
                    </li>
                    <li className={`${navId==2?"nav-li-selected":null}`} onClick={()=>changeNavHandler(2)}>
                        <div className="nav-logo">{pairLogo}</div>
                        <h4>Pair Address</h4>
                    </li>
                </ul>
            </div>

            </div>

            <div className="social-media">
                <span>{facebookIcon}</span>
                <span>{linkedinIcon}</span>
                <span>{twitterIcon}</span>
            </div>
        </div>
    )
}

export default Sidebar;