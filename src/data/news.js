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
            "https://cdns.klimg.com/mav-prod-resized/720x/webp/newsCover/2023/11/28/1701137059166-3pn5s.jpeg",
            "Admin",
            NewsCategory.TEKNOLOGI),

        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://cdns.klimg.com/mav-prod-resized/720x/webp/newsCover/2023/11/28/1701137059166-3pn5s.jpeg",
            "Admin",
            NewsCategory.PENDIDIKAN),

        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://cdns.klimg.com/mav-prod-resized/720x/webp/newsCover/2023/11/28/1701137059166-3pn5s.jpeg",
            "Admin",
            NewsCategory.BENCANA_ALAM),

        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://cdns.klimg.com/mav-prod-resized/720x/webp/newsCover/2023/11/28/1701137059166-3pn5s.jpeg",
            "Admin",
            NewsCategory.POLITIK),

        new News(
            nanoid(),
            "Dampak Negatif Merusak Kelestarian Lingkungan, Timbulkan Banyak Bencana",
            "Perlu diketahui bahwa kelestarian lingkungan adalah aspek penting yang harus menjadi perhatian seluruh masyarakat. Semua lapisan masyarakat, mulai dari individu, keluarga, hingga lembaga pemerintah dan bisnis, memiliki peran penting dalam mendukung kelestarian lingkungan.",
            getCurrentDate(),
            "https://cdns.klimg.com/mav-prod-resized/720x/webp/newsCover/2023/11/28/1701137059166-3pn5s.jpeg",
            "Admin",
            NewsCategory.HIBURAN),
    ];
}

export {getNews};