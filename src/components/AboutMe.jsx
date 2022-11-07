import '../AboutMe.css'

function AboutMe() {
    return (
        
        <main className='about'>
            <section className="about-me"><h1>About Me</h1></section>
                <section className="container">
                    <div className="content">
                        <img className="img-about"src="../image/about.jpg" alt="" />
                        <p>Saya adalah Himawan Ihza Pradana, mahasiswa semester 5 Universitas Jember. Di Universitas Jember, saya adalah mahasiswa Fakultas Ilmu Komputer Program Studi Teknologi Informasi.
                            Di semester ini, saya sedang mengikuti Program Kampus Merdeka yaitu Studi Independent Bersertifikat di Skilvul Tech#4Impact. Di program tersebut, saya mengikuti learning track Front End Web Development. 
                            Harapan saya setelah mengikuti program Kampus Merdeka MSIB ini yaitu saya bisa menjadi seorang web developer khususnya Front End dan bisa magang di semester selanjutnya.
                        </p>
                    </div>
            </section>
        </main>
    
    )
};

export default AboutMe;