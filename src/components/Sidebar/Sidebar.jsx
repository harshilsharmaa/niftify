import './sidebar.css'
import { logo, tokenLogo, pairLogo, facebookIcon, linkedinIcon, twitterIcon } from '../../utilities/icons';
import { useState } from 'react';

const Sidebar = ()=>{

    const [selected, setSelected] = useState(1);

    const changeNavHandler = (id)=>{
        if(selected!==id){
            setSelected(id);
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
                    <li className={`${selected===1?"nav-li-selected":null}`} onClick={()=>changeNavHandler(1)}>
                        <div className="nav-logo">{tokenLogo}</div>
                        <h4>Token Address</h4>
                    </li>
                    <li className={`${selected===2?"nav-li-selected":null}`} onClick={()=>changeNavHandler(2)}>
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