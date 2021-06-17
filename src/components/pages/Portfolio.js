
const Portfolio = () => {

    return (
        <div>
            <h1 className="display-4">Previous Works</h1>
            <div className="container">
                <div class="content">
                    <div class="card card-main">
                        <img src="./Assets/images/landing_page.PNG" alt="Landing page image"></img>
                        <a href="https://yilunxiao.github.io/Landing-page/" target="_blank">
                        <div class="overlay">
                            <div class="text">Landing Page</div>
                        </div></a>
                    </div>
                    <div class="card">
                        <img src="./Assets/images/weatherApp.PNG" alt="Weather Dashboard image"></img>
                        <a href="https://yilunxiao.github.io/WeatherDashboard/" target="_blank">
                        <div class="overlay">
                            <div class="text">Weather Dashboard</div>
                        </div></a>
                    </div>
                    <div class="card">
                        <img src="./Assets/images/NYTorNOT.PNG" alt="NYT or not image"></img>
                        <a href="https://willsha90.github.io/NYTBestSellerProject/" target="_blank">
                        <div class="overlay">
                            <div class="text">
                                NYT or NOT
                                <div class="description">Test your knowledge on whether or not a book is or is not a New York Times bestseller.</div>
                            </div>
                        </div></a>
                    </div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;