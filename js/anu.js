// Data array untuk card (ganti data sesuai kebutuhan)
const moviesData = [
    {
        judul: "Qodrat",
        upload: "2022",
        img1: "/img/cover/qodrat.jpg", //img ketika di foto di klik maka ini muncul sebagai cover
        img2: "/img/cqodrat.jpg", // foto poster
        durasi: "Belum Tersedia",
        sinopsis: "Film ini berkisah tentang ustaz ahli rukhiyah bernama Qodrat yang pulang ke pesantren. Ia menemukan makhluk gaib yang mengganggu sebuah keluarga Yasmin",
    },
    {
        judul: "Kalian Pantas Mati",
        upload: "2022",
        img1: "/img/cover/kalianpantasmati.jpeg",
        img2: "/img/ckalianpantasmati.jpg",
        durasi: "Belum Tersedia",
        sinopsis: "Film ini mengisahkan tentang pria indigo, Rakka yang pindah ke rumah pamannya. Ia kemudian harus berhadapan dengan arwah jahat yang membuat beberapa temannya hilang",
    },
    {
        judul: "Inang",
        upload: "2022",
        img1: "/img/cover/inang.jpg",
        img2: "/img/cinang.jpg",
        durasi: "Belum Tersedia",
        sinopsis: "Film ini berkisah tentang Wulan, diperankan oleh Naysila Mirdad yang hamil di luar nikah. Ia kemudian tinggal dengan sebuah keluarga yang ingin mengadopsi anaknya",
    },
    {
        judul: "Mumun",
        upload: "2022",
        img1: "/img/cover/Mumun.jpg",
        img2: "/img/cmumun.jpg",
        durasi: "Belum Tersedia",
        sinopsis: "Film ini mengisahkan tentang Acha Septriasa yang berperan sebagai Mumun dan meninggal dalam tragedi kecelakaan. Setelah dimakamkan, ternyata tali pocong Mumun lupa dibuka oleh penggali kubur dan menyebabkan arwah Mumun gentayangan",
    },
    {
        judul: "The Nun II",
        upload: "2023",
        img1: "/img/cover/thenun2.jpg",
        img2: "/img/cthenun2.jpg",
        durasi: "Belum Tersedia",
        sinopsis: "Film ini akan membawa kita kembali ke tahun 1956 di Prancis, tepat empat tahun tahun setelah kisah Valak yang mengobrak-abrik hidup Suster Irene saat berada di Biara Santo Cartha, Romania",
    },
    {
        judul: "Insidious: The Red Door",
        upload: "2023",
        img1: "/img/cover/insidious-6-everything-we-know.webp",
        img2: "/img/cinsidious.jpg",
        durasi: "Belum Tersedia",
        sinopsis: "Dalton (Ty Simpkins) kini sudah beranjak remaja. Ia akan segera pergi berkuliah di salah satu kampus ternama yang sangat Dalton idam-idamkan",
    },
    {
        judul: "The Exorcist: Believer",
        upload: "2023",
        img1: "/img/cover/theexorcism.jpg", 
        img2: "/img/ctheexorcist.jpg",
        durasi: "Belum Tersedia",
        sinopsis: "Setelah sang istri meninggal, Tanner (Leslie Odom) tinggal bersama putrinya, Angela (Lidya Jewett). Satu waktu, Tanner dibuat geger karena mendapat laporan bahwa Angela dan sahabatnya, Katherine (Olivia O’Neill), hilang di hutan belakang sekolah",
    },
    {
        judul: "Perempuan Bergaun Merah",
        upload: "2022",
        img1: "/img/cover/perempuanbergaunmerah.jpeg",
        img2: "/img/cperempuanbergaunmerah.jpg",
        durasi: "Belum Tersedia",
        sinopsis: "Film ini mengangkat kisah mahasiswi introvert bernama Dinda, diperankan oleh Tatjana Saphira. Ia diteror oleh hantu bergaun merah setelah sahabatnya hilang secara misterius",
    }
    // Tambah Film Lainnya Disini
];

// Loop untuk menambahkan card ke dalam container
const cardContainer = document.getElementById('cardContainer');
moviesData.forEach((card) => {
    const cardHTML = `
                <div class="col-md-3 mb-4">
                    <div class="card bg-dark text-light">
                        <img src="${card.img2}" class="card-img-top" alt="...">
                        <div class="card-img-overlay">
                            <p class="card-title">${card.judul}</p>
                        </div>
                    </div>
                </div>
            `;
    cardContainer.innerHTML += cardHTML;
});