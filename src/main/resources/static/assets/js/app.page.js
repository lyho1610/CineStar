class AppPage {
    static drawMovie(obj) {
        let str = `
            <div class="slide-item" style="width: 240px;">
                <div class="movie-item n_2d hide">
                    <div class="movie-pic">
                        <img class="lazyload" alt="${obj.title}" src="${obj.fileUrl}">
                    </div>
                    <div class="movie-txt">
                        <h3>${obj.title}</h3>
                    </div>
                    <div class="movie-over">
                        <a href="https://cinestar.com.vn/phim/3e9eeda9-2fef-427b-a1ad-ea0a4d5b440f">
                            <p>${obj.description}</p>
                            <span class="atc" style="display: block;">...</span>
                            <span class="detail-link">Chi tiết</span>
                        </a>
                        <a class="cart-btn fontsize13"
                           href="https://cinestar.com.vn/lichchieu/3e9eeda9-2fef-427b-a1ad-ea0a4d5b440f">
                           Mua vé
                       </a>
                    </div>
                </div>
            </div>
        `;

        return str;
    }
}