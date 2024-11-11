import {nanoid} from "nanoid";
import getCurrentDate from "../utils/dateUtil.js";
import NewsCategory from "./newsCategory.js";

export default class News {
    constructor(id, title, summary, publishedDate, imageUrl, author, category) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.publishedDate = publishedDate;
        this.imageUrl = imageUrl;
        this.author = author;
        this.category = category;
    }
}

function getNews() {
    return [
        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://cdn.rri.co.id/berita/Bukittinggi/o/1715917227082-PHOTO-2024-05-12-13-00-02/gl9b5uz4v7ahbtw.jpeg",
            "Admin",
            NewsCategory.TEKNOLOGI),

        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://cdn.rri.co.id/berita/Bukittinggi/o/1715917227082-PHOTO-2024-05-12-13-00-02/gl9b5uz4v7ahbtw.jpeg",
            "Admin",
            NewsCategory.PENDIDIKAN),

        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Vxb5sW9IvPnVs7EEIsdB99i-cV-67vuXhw&s",
            "Admin",
            NewsCategory.BENCANA_ALAM),

        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHb2-nQX2FxM_A-3eMLeijPkd7JBG2b0xvQ&s",
            "Admin",
            NewsCategory.POLITIK),

        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHb2-nQX2FxM_A-3eMLeijPkd7JBG2b0xvQ&s",
            "Admin",
            NewsCategory.HIBURAN),
    ];
}

export {getNews};