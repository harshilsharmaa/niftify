import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import './body.css'

const Body = () => {
    return (
        <div className="body">
            <Sidebar />
            <MainContainer />
        </div>
    )
}

export default Body;