import '../Profile.css'
import List from './List'

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
                <List data={['1. python = intermediet', 
                            '2. HTML = intermediet',
                            '3. CSS = intermediet',
                            '4. Javascript = intermediet',
                            '5. PHP = beginner',
                            '6. Dart = intermediet']} />
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