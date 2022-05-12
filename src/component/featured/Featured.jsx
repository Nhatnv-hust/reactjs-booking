import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="	https://cdn.luxstay.com/home/location/location_1_1559734709.png" alt="" className="featuresImg"/>
            <div className="featuredTitle">
                <h1>HaNoi</h1>
                <h2>1523 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src=" https://cdn.luxstay.com/home/location/location_5_1559735011.png" alt="" className="featuresImg"/>
            <div className="featuredTitle">
                <h1>HoChiMinh City</h1>
                <h2>1763 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="	https://cdn.luxstay.com/home/location/location_4_1559786177.png" alt="" className="featuresImg"/>
            <div className="featuredTitle">
                <h1>DaLat</h1>
                <h2>994 properties</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured