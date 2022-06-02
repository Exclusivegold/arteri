import React from "react";
import First from "../Components/First";
import Second from "../Components/Second";
import Thirdpage from "../Components/Third";
import Fourth from "../Components/Fourth";
import Fifth from "../Components/Fifth";
import Footer from "../Components/Footer";

const Content = () => {
    return(
        <div>
            <First/>
            <Second/>
            <br/>
            <br/>
            <Thirdpage/>
            <Fourth/>
            <Fifth/>
            <Footer/>
        </div>

    );
};
export default Content;