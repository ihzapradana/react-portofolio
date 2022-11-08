import '../Profile.css'

function Profile() {
    return (
        <div className="container-profile">
            <section className="left-container">
            <div className="photo-contact">
                <div className="tempat-foto">
                    <div className="foto">
                        <img src="./image/himawan2.jpeg" alt="himawan" />
                    </div>
                </div>
                <h1>Contact Me :</h1>
                <button className="contact-btn"><a href="https://www.linkedin.com/in/h-iprada" target="_blank" style={{color: "black"}}>LinkedIn</a></button>
                <button className="contact-btn"><a href="https://github.com/ihzapradana" target="_blank" style={{color: "black"}}>Github</a></button>
            </div>
            </section>

            <section className="content-profle">
            <div className="skil">
                <h1>My Skills In Programming</h1>
                <ol className="kemampuan">
                    <li> 1. python = intermediet</li>
                    <li>2. HTML = intermediet</li>
                    <li>3. CSS = intermediet</li>
                    <li>4. Javascript = intermediet</li>
                    <li>5. PHP = beginner</li>
                    <li>6. Dart = intermediet</li>
                </ol>
            </div>
            <br />
            <h1>Projects That Have Been Created</h1>
            <p>Beberapa project yang telah saya buat diantaranya :</p>
            <ol className="projek">
                <li>1. Kalkulator sederhana menggunakan python.</li>
                <li>2. Membuat sistem pencatatan untuk kasir menggunakan python.</li>
                <li>3. Membuat website summy.id</li>
                <li>4. Membuat sebuah aplikasi mobile "MicroJ menggunakan Dart</li>
            </ol>
            </section>
        </div>
    )
};

export default Profile;