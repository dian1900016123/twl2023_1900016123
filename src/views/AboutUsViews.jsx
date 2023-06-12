import React from 'react';

const AboutUsLibrary = () => {
  return (
    <section className="about-us-library">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/library.jpg"
              alt="Library"
              className="about-us-image"
            />
          </div>
          <div className="col-md-6">
            <h3 className="about-us-subtitle">VISI</h3>
            <p className="about-us-description">
              Menjadi Perpustakaan terkemuka dalam penyelenggaraan pendidikan tinggi yang berkeunggulan di bidang ilmu pengetahuan, teknologi dan seni (IPTEK) serta keimanan dan ketaqwaan (IMTAQ) dalam upaya menegakkan wacana keilmuan dan keislaman.
            </p>
            <h3 className="about-us-subtitle">MISI</h3>
            <p className="about-us-description">
              Menyediakan sarana sumber-sumber informasi ilmu pengetahuan, teknologi, sosial dan seni bagi sivitas akademika
              Menyediakan sarana sumber-sumber kajian keislaman dan kemuhammadiyahaan
              Memberi layanan informasi keilmuan yang dapat memperluas kegiatan belajar-mengajar dan penelitian.
              Mengembangkan upaya pemberdayaan informasi yang telah dimiliki perpustakaan untuk civitas akademika, alumni dan masyarakat dalam kaitannya dengan konsep belajar seumur hidup
              Pembangunan jaringan informasi pada perguruan tinggi baik ditingkat nasional maupun internasional
              Pengembangan system perpustakaan digital dalam rangka mengelola dan melestarikan informasi ilmu pengetahuan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsLibrary;
