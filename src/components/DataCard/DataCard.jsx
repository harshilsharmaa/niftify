import "./DataCard.css"

const DataCard = ({ dataObj, heading, logo }) => {

    return (
        <div className="dataCard">
            <div className="card-heading">
                <h4>{heading}</h4>
            </div>

            <div className="data">

                {
                    Object.entries(dataObj).map((item) => {
                        return <div className="value">
                            <div className="left">
                                <p>{item[0]}</p>
                            </div>
                            <div className="right">
                                {
                                    item[0]==="pairAddress" || item[0]==="address" ?<p>{item[1].substr(0,8)}...</p>
                                    :<p>{item[1]}</p>
                                }
                            </div>
                        </div>
                   })
                }

            </div>

            <div className="info">
                {logo}
            </div>
        </div>
    )
}

export default DataCard
