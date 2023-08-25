import DataCard from "../DataCard/DataCard"
import './cardContianer.css'
import { infoLogo, tokenLogo2, priceLogo } from "../../utilities/icons";

const CardContainer = ({item})=>{
    const {pairCreatedAt, dexId, pairAddress, baseToken, quoteToken, priceNative, priceUsd} = item;
    const basicInfo = {pairCreatedAt, dexId, pairAddress}
    const prices = {priceNative, priceUsd}

    return (
        <div className="cardContianer">
            <DataCard dataObj={basicInfo} heading="Basic Info" logo={infoLogo}/>
            <DataCard dataObj={baseToken} heading="Base Token" logo={tokenLogo2}/>
            <DataCard dataObj={quoteToken} heading="Quote Token" logo={tokenLogo2}/>
            <DataCard dataObj={prices} heading="Prices" logo={priceLogo}/>
        </div>
        )
    }
    
    export default CardContainer