// Daftar Film
const moviesData = [
    {
        judul: "Qodrat",
        upload: "2022",
        img1: "/img/cover/qodrat.jpg", //img ketika di foto di klik maka ini muncul sebagai cover
        img2: "/img/cqodrat.jpg", // foto poster
        durasi: "Belum Tersedia",
        trailer: "/video/trailer-kodrat.mp4",
        sinopsis: "Film ini berkisah tentang ustaz ahli rukhiyah bernama Qodrat yang pulang ke pesantren. Ia menemukan makhluk gaib yang mengganggu sebuah keluarga Yasmin",
    },
    {
        judul: "Kalian Pantas Mati",
        upload: "2022",
        img1: "/img/cover/kalianpantasmati.jpeg",
        img2: "/img/ckalianpantasmati.jpg",
        durasi: "Belum Tersedia",
        trailer: "/video/trailer-kalianpantasmati.mp4",
        sinopsis: "Film ini mengisahkan tentang pria indigo, Rakka yang pindah ke rumah pamannya. Ia kemudian harus berhadapan dengan arwah jahat yang membuat beberapa temannya hilang",
    },
    {
        judul: "Inang",
        upload: "2022",
        img1: "/img/cover/inang.jpg",
        img2: "/img/cinang.jpg",
        durasi: "Belum Tersedia",
        trailer: "/video/trailer-inang.mp4",
        sinopsis: "Film ini berkisah tentang Wulan, diperankan oleh Naysila Mirdad yang hamil di luar nikah. Ia kemudian tinggal dengan sebuah keluarga yang ingin mengadopsi anaknya",
    },
    {
        judul: "Mumun",
        upload: "2022",
        img1: "/img/cover/Mumun.jpg",
        img2: "/img/cmumun.jpg",
        durasi: "Belum Tersedia",
        trailer: "/video/trailer-mumun.mp4",
        sinopsis: "Film ini mengisahkan tentang Acha Septriasa yang berperan sebagai Mumun dan meninggal dalam tragedi kecelakaan. Setelah dimakamkan, ternyata tali pocong Mumun lupa dibuka oleh penggali kubur dan menyebabkan arwah Mumun gentayangan",
    },
    {
        judul: "The Nun II",
        upload: "2023",
        img1: "/img/cover/thenun2.jpg",
        img2: "/img/cthenun2.jpg",
        durasi: "Belum Tersedia",
        trailer: "aaaaaa",
        sinopsis: "Film ini akan membawa kita kembali ke tahun 1956 di Prancis, tepat empat tahun tahun setelah kisah Valak yang mengobrak-abrik hidup Suster Irene saat berada di Biara Santo Cartha, Romania",
    },
    {
        judul: "Insidious: The Red Door",
        upload: "2023",
        img1: "/img/cover/insidious-6-everything-we-know.webp",
        img2: "/img/cinsidious.jpg",
        durasi: "Belum Tersedia",
        trailer: "aaaaaa",
        sinopsis: "Dalton (Ty Simpkins) kini sudah beranjak remaja. Ia akan segera pergi berkuliah di salah satu kampus ternama yang sangat Dalton idam-idamkan",
    },
    {
        judul: "The Exorcist: Believer",
        upload: "2023",
        img1: "/img/cover/theexorcism.jpg",
        img2: "/img/ctheexorcist.jpg",
        durasi: "Belum Tersedia",
        trailer: "aaaaaa",
        sinopsis: "Setelah sang istri meninggal, Tanner (Leslie Odom) tinggal bersama putrinya, Angela (Lidya Jewett). Satu waktu, Tanner dibuat geger karena mendapat laporan bahwa Angela dan sahabatnya, Katherine (Olivia O’Neill), hilang di hutan belakang sekolah",
    },
    {
        judul: "Perempuan Bergaun Merah",
        upload: "2022",
        img1: "/img/cover/perempuanbergaunmerah.jpeg",
        img2: "/img/cperempuanbergaunmerah.jpg",
        durasi: "Belum Tersedia",
        trailer: "aaaaaa",
        sinopsis: "Film ini mengangkat kisah mahasiswi introvert bernama Dinda, diperankan oleh Tatjana Saphira. Ia diteror oleh hantu bergaun merah setelah sahabatnya hilang secara misterius",
    }
    // Tambah Film Lainnya Disini
];
// Payment
document.addEventListener("DOMContentLoaded", function () {

    function createOptionsFromArray() {
        const selectElement = document.getElementById("filmSelection");

        if (selectElement) { // Ensure the select element exists
            moviesData.forEach(t => {
                const option = document.createElement("option");
                option.value = t.judul
                option.textContent = t.judul;
                selectElement.appendChild(option);
            });
        }
    }

    createOptionsFromArray();
});

const payment = document.getElementById('paymentForm')
if (payment) {
    payment.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedFilm = document.getElementById('filmSelection').value;

        const cartItems = document.getElementById('cartItems');
        const listItem = document.createElement('li');
        listItem.textContent = selectedFilm;
        listItem.classList.add('bg-dark')
        listItem.classList.add('text-light')
        listItem.classList.add('list-group-item');
        cartItems.appendChild(listItem);
    });
}


const moviesList = document.getElementById("moviesList");

if (moviesList) {
    moviesData.forEach(movie => {
        const article = document.createElement("div");
        article.className = "col-md-3 mb-4";
        article.setAttribute("id", "movie");
        article.setAttribute("data-upload", movie.upload);
        article.setAttribute("data-img1", movie.img1);
        article.setAttribute("data-img2", movie.img2);
        article.setAttribute("data-trailer", movie.trailer);
        article.setAttribute("data-durasi", movie.durasi);
        article.setAttribute("data-judul", movie.judul);
        article.setAttribute("data-sinopsis", movie.sinopsis);
        const card = document.createElement("div");
        card.className = "card bg-dark text-light";
        const img = document.createElement("img");
        img.setAttribute("id", "img");
        img.src = movie.img2;
        img.className = "card-img-top";
        img.alt = movie.judul;
        const cardOverlay = document.createElement("div");
        cardOverlay.className = "card-img-overlay";
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = movie.judul;

        cardOverlay.appendChild(cardTitle);
        card.appendChild(img);
        card.appendChild(cardOverlay);
        article.appendChild(card);

        moviesList.appendChild(article);
    });
}

const movieBlocks = document.querySelectorAll('.col-md-3');
movieBlocks.forEach(movie => {
    movie.addEventListener('click', () => {
        const title = movie.dataset.judul;
        const sinopsis = movie.dataset.sinopsis;
        const durasi = movie.dataset.durasi;
        const upload = movie.dataset.upload;
        const trailer = movie.dataset.trailer;
        const img1 = movie.dataset.img1;
        const img2 = movie.dataset.img2;

        document.getElementById('moviesList').style.display = "none";
        document.getElementById('content').innerHTML += `
            <div id="kartu" class="card bg-dark text-white" style="display: block;" data-trailer="${trailer}">
                <img src="${img1}" class="card-img img-fluid" style="height: 100vh; object-fit: cover;">
                <div class="card-img-overlay">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="${img2}" class="card-img-top img-fluid">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <a href="#" id="haloo" class="btn btn-primary"><i class="fa fa-play"></i> Trailer</a>
                                <a href="payment.html" class="btn btn-primary"><i class="fas fa-shopping-cart"></i> Chart</a>
                                <a href="movie.html" id="bck" class="btn btn-primary">Kembali</a>
                                <h5 id="card-title">${title}</h5>
                                <p class="card-text">${sinopsis}</p>
                                <p class="card-text"><small class="text-muted">Diupload: ${upload}</small></p>
                                <p class="card-text"><small class="text-muted">Durasi : ${durasi}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="anu"></div>
        `;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('content').addEventListener('click', function (event) {
        if (event.target && event.target.id === 'haloo') {
            const parentCard = event.target.closest('#kartu');
            parentCard.style.display = "none";
            const trailer = parentCard.getAttribute('data-trailer');
            const anu = document.getElementById("anu");
            anu.innerHTML = `
                <div id="anu">
                    <div class="embed-responsive embed-responsive-16by9">
                        <video id="video" class="embed-responsive-item" controls autoplay>
                            <source src="${trailer}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <a href="movie.html" id="back" class="btn btn-primary">Kembali</a>
                </div>`;
            const video = document.getElementById("video");
            video.style.display = "block";
            video.onloadeddata = () => {
                video.style.display = "block";
                video.play();
            };
        }
    });

    document.getElementById('content').addEventListener('click', function (event) {
        if (event.target && event.target.id === 'back') {
            const parentCard = event.target.closest('#kartu');
            parentCard.style.display = "block";
            const anu = document.getElementById("anu");
            anu.style.display = "none";
            const video = document.getElementById("video");
            video.pause();
            video.currentTime = 0;
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("haloo");
    const card = document.getElementById("card");
    const video = document.getElementById("video");
    const anu = document.getElementById("anu");
    const back = document.getElementById("back");
    const moviesList = document.getElementById("moviesList");
    const bck = document.getElementById("bck");
    const content = document.getElementById("content");
    if (playButton) {
        playButton.addEventListener("click", function () {
            card.style.display = "none";
            const trailer = card.getAttribute('data-trailer'); // Menggunakan getAttribute untuk mengakses nilai data-trailer
            anu.style.display = "block";
            anu.innerHTML = `<div id="anu">
                <div class="embed-responsive embed-responsive-16by9">
                    <video id="video" class="embed-responsive-item" controls autoplay muted>
                        <source src="${trailer}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <a href="#" id="back" class="btn btn-primary">Kembali</a>
            </div>`;
            video.style.display = "block";
            video.onloadeddata = () => {
                video.style.display = "block";
                video.play();
            };
        });
    }
});
