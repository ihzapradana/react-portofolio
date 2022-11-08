import '../Blog.css'

function Blog() {
    return (
        <>
            <h1 className='judul-blog'>My Articles</h1>
            <div className="content1">
            <p>Nama saya adalah <span style={{color: "#1c51b4"}}>Himawan Ihza Pradana</span>, Mahasiswa semester 5 Universitas Jember yang saat ini sedang mengikuti program Kampus Merdeka
                di Skilvul #Tech4Impact dengan learning track Front End Web Development. Alasan saya mengikuti program Kampus Merdeka
                di Skilvul #Tech4Impact dengan learning track Front End Web Development adalah karena semenjak semester 3 saya mulai minat untuk mendalami website,
                dan karena di semester itu juga mulai dikenalkan dengan website pada mata kuliah pemrograman berbasis website. Saya memilih Front End karena
                saya lebih suka ngoding untuk membuat sebuah tampilan atau dengan kata lain saya lebih suka dengan hal-hal yang berbau seni, seperti musik dan 
                salah satunya adalah seni visual berupa tampilan website.
            </p>
            <img className='img-content' src="./image/about-removebg-preview.png" alt="foto himawan" width="300" />
        </div>

        <div className="content2">
            <img className='img-content' src="./image/block-img2-removebg-preview.png"alt=" foto himawan" width="300" />
            <p><span style={{color: "#1c51b4"}}>Harapan saya</span> setelah mengikuti program Kampus Merdeka di Skilvul #Tech4Impact dengan learning track Front End Web Development ini, 
                saya ingin di semester 6 nanti bisa diterima magang di salah satu perusahaan terkemuka di Indonesia. Oleh karena itu, dalam proses 
                mengikuti program Kampus Merdeka di Skilvul #Tech4Impact dengan learning track Front End Web Development ini saya berkomitmen untuk 
                bersungguh-sungguh dalam belajar agar bisa mengiplementasikan apa yang telah para intruktur dan mentor ajarkan ke dalam sebuah pekerjaan yang nyata
                dan menghasilkan uang. Selama masih menjadi mahasiswa, saya ingin sekali bisa menghasilkan uang dengan hasil kerja keras saya, terutama dalam bidang
                Teknologi khususnya membuat sebuah website. Oleh karena itu, saya harus belajar dengan sungguh-sungguh dalam SIB di Skilvul ini agar saya
                nanti bisa magang dan bisa menjadi seorang Freelancer selama masih kuliah. 
            </p>
        </div>
        </>
    )
};

export default Blog;