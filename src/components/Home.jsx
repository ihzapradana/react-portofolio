import '../home.css'

function Home() {
    return (
        <section className="home-teks">
            <div className="home-teks-aja">
                <h1>Hi...I'm <span>Himawan</span> <br />
                    Ihza Pradana
                </h1>
                <a href="./profile">Explore Me</a>
            </div>
            <div className="home-image">
                <div className="home-image-bungkus">
                    <img src="./image/himawan2.jpeg" alt="Gambar Himawan" />
                </div>
            </div>
        
        </section> 
    )
};

export default Home;