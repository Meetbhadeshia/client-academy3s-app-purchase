import "./banner.css";

function Banner(props) {
    return (
        <div className="banner">
            <div className="banner-inner">
                <img src="/images/banner.jpg" alt="banner" /> {/* banner image */}
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <h1 className="page-title">{props.title}</h1>
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>{props.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;