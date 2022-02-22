function revewWidget() {
    var Container = document.createElement('div');
    Container.classList.add('container');
    var reviewWidget = document.createElement('div');
    reviewWidget.classList.add('review');
    // widget header - row 1
    var widgetHeader = document.createElement('div');
    widgetHeader.classList.add('widget-header');
    widgetHeader.innerHTML = '<h3>Customer Reviews</h3>';
    // widget header - row 2
    var reviewsCounter = document.createElement('div');
    reviewsCounter.classList.add('reviews-counter');
    var totalReviews = document.createElement('div');
    totalReviews.classList.add('total-reviews');
    totalReviews.innerHTML = "\n    <div>\n      <div>Stars</div>\n      <p>Based on 1 review</p>\n    </div>\n  ";
    reviewsCounter.appendChild(totalReviews);
    var ratingStats = document.createElement('div');
    ratingStats.classList.add('rating-stats');
    var ratingStatsList = document.createElement('ul');
    ratingStatsList.classList.add('rating-stats-list');
    var ratingStatsListItem = document.createElement('li');
    ratingStatsListItem.classList.add('rating-stats-list-item');
    ratingStatsListItem.innerHTML = "\n    percentage of 5 stars\n  ";
    ratingStatsList.appendChild(ratingStatsListItem);
    ratingStats.appendChild(ratingStatsList);
    totalReviews.appendChild(ratingStats);
    var writeReviewBtn = document.createElement('div');
    writeReviewBtn.classList.add('write-review-btn');
    writeReviewBtn.innerHTML = "\n    <button id='toggle-form-btn'>Write a review</button>\n  ";
    reviewsCounter.appendChild(writeReviewBtn);
    widgetHeader.appendChild(reviewsCounter);
    // widget header - row 3
    var reviewsFilter = document.createElement('div');
    reviewsFilter.classList.add('reviews-filter');
    var reviewsFilterSelection = document.createElement('select');
    reviewsFilterSelection.classList.add('reviews-filter-selection');
    reviewsFilterSelection.innerHTML = "\n    <option value=\"\">Most Recent</option>\n    <option value=\"\">Highest Rating</option>\n    <option value=\"\">Lowest Rating</option>\n    <option value=\"\">Only Pictures</option>\n    <option value=\"\">Pictures First</option>\n    <option value=\"\">Videos First</option>\n    <option value=\"\">Most Helpful</option>\n  ";
    reviewsFilter.appendChild(reviewsFilterSelection);
    widgetHeader.appendChild(reviewsFilter);
    // widgets form
    var widgetForm = document.createElement('div');
    widgetForm.classList.add('widget-form');
    widgetForm.id = 'review-form';
    widgetForm.innerHTML = "\n    <form>\n      <div class=\"form-group\">\n        <label for=\"reviewer-name\">Name (displayed publicly like...)</label>\n        <input type=\"text\" class=\"form-control\" id=\"reviewer-name\" placeholder=\"Enter your name (public)\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"reviewer-email\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"reviewer-email\" placeholder=\"Enter your email (private)\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"reviewer-rating\">Rating</label>\n        star rating\n      </div>\n      <div class=\"form-group\">\n        <label for=\"review-title\">Review Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"review-title\" placeholder=\"Give your review a title\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"reviewer-review\">Review</label>\n        <textarea class=\"form-control\" id=\"reviewer-review\" placeholder=\"Write your comments here\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <span>Picture/Video (optional)</span>\n        <label for=\"review-picture-video\" class=\"custom-file-upload\">Picture/Video (optional)</label>\n        <input type=\"file\" class=\"form-control-file\" id=\"review-picture-video\">\n      </div>\n      <button type=\"submit\" class=\"submit-btn\">Submit Review</button>\n    </form>\n  ";
    // widget body
    var widgetBody = document.createElement('div');
    widgetBody.classList.add('widget-body');
    var singleReview = document.createElement('div');
    singleReview.classList.add('single-review');
    var reviewHeader = document.createElement('div');
    reviewHeader.classList.add('review-header');
    // left-section
    var userProfilePic = document.createElement('div');
    userProfilePic.classList.add('user-image');
    userProfilePic.innerHTML = "\n    <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII=\" alt=\"profile-pic\" />\n  ";
    reviewHeader.appendChild(userProfilePic);
    // right section
    var rightSection = document.createElement('div');
    rightSection.classList.add('read-review-right');
    rightSection.innerHTML = "\n    <div class=\"user-review-rating\">\n    <p>stars</p>\n    </div>\n    <h4>Anonymous</h4>\n  ";
    reviewHeader.appendChild(rightSection);
    singleReview.appendChild(reviewHeader);
    var reviewText = document.createElement('div');
    reviewText.classList.add('review-text', 'w-24');
    reviewText.innerHTML = "\n    <div>\n      <h4>Hello</h4>\n      <p class='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam.</p>\n    </div>\n  ";
    singleReview.appendChild(reviewText);
    widgetBody.innerHTML +=
        singleReview.outerHTML +
            singleReview.outerHTML +
            singleReview.outerHTML +
            singleReview.outerHTML +
            singleReview.outerHTML;
    // view all button
    var viewAll = document.createElement('button');
    viewAll.classList.add('view-all-btn');
    viewAll.innerHTML = "\n    <a href=\"#\">View all reviews</a>\n  ";
    widgetBody.appendChild(viewAll);
    reviewWidget.appendChild(widgetHeader);
    reviewWidget.appendChild(widgetForm);
    reviewWidget.appendChild(widgetBody);
    Container.appendChild(reviewWidget);
    document.body.appendChild(Container);
    // stylesheet
    var tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    // document.head.innerHTML += `
    // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    // `;
    //   document.head.innerHTML += `
    //   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>`;
    var styleTag = document.createElement('style');
    document.head.appendChild(styleTag);
    styleTag.innerHTML = "\n  .container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px;\n    }\n  }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px;\n    }\n  }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px;\n    }\n  }\n  .review {\n    border: 1px solid #e6e6e6;\n    padding: 20px;\n  }\n  .widget-header {\n    display: flex;\n    flex-direction: column;\n  }\n  .reviews-counter {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .total-reviews {\n    display: flex;\n    flex-direction: row;\n  }\n  .reviews-filter {\n    display: flex;\n    flex-direction: row;\n    justify-content: end;\n    padding-bottom: 10px;\n  }\n  #review-form {\n    display: none;\n  }\n  .widget-form {\n    border-top: 1px solid #e6e6e6;\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n    padding-bottom: 15px;\n  }\n  .form-group {\n    display: flex;\n    flex-direction: column;\n  }\n  .form-group label {\n    font-size: 0.625rem;\n    margin: 20px 3px 5px 0;\n  }\n  .form-control {\n    width: 100%;\n  }\n  .custom-file-upload {\n    width: 100px;\n    height: 100px;\n    border: 1px solid #ccc;\n    display: inline-block;\n    padding: 6px 12px;\n    cursor: pointer;\n}\n  input[type=\"file\"] {\n    display: none;\n}\n.submit-btn {\n  display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border: 0;\n    padding: 01rem 1rem;\n    cursor: pointer;\n    font-size: 1rem;\n    letter-spacing: 0.1rem;\n    text-decoration: none;\n    color: #fff;\n    background-color: #121212;\n}\n  .single-review {\n    padding-top: 20px;\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid #e6e6e6;\n  }\n  .review-header {\n    display: flex;\n    flex-direction: row;\n  }\n  .review-header .read-review-right .user-review {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-content: space-between;\n  }\n  .review-header p {\n    margin: 0;\n  }\n  .review-header .user-image img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: #ccc;\n    top: 0;\n    margin-right: 10px;\n  }\n  .single-review h4 {\n    margin: 0;\n  }\n.view-all-btn {\n  appearance: none;\n  background-color: transparent;\n  border: 2px solid #1A1A1A;\n  border-radius: 15px;\n  box-sizing: border-box;\n  color: #3B3B3B !important;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: normal;\n  margin: 0;\n  min-height: 60px;\n  min-width: 0;\n  outline: none;\n  padding: 16px 24px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  will-change: transform;\n}\n\n.view-all-btn:disabled {\n  pointer-events: none;\n}\n\n.view-all-btn:hover {\n  color: #fff;\n  background-color: #1A1A1A;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  transform: translateY(-2px);\n}\n\n.view-all-btn:active {\n  box-shadow: none;\n  transform: translateY(0);\n}\n\n.view-all-btn a {\n  text-decoration: none;\n}\n  ";
    var toggleFormBtn = document.getElementById('toggle-form-btn');
    toggleFormBtn.addEventListener('click', handleToggleForm);
    var reviewForm = document.getElementById('review-form');
    reviewForm.style.display = 'none';
    function handleToggleForm() {
        console.log('clicked');
        if (reviewForm.style.display === 'none') {
            reviewForm.style.display = 'block';
        }
        else {
            reviewForm.style.display = 'none';
        }
    }
}
function embeddableWidget() {
    console.log('give a review');
    var Container = document.createElement('div');
    Container.classList.add('container');
    var reviewWidget = document.createElement('div');
    reviewWidget.classList.add('review');
    // top-section
    var topSection = document.createElement('div');
    topSection.classList.add('top-section');
    // top-section-left
    var reviewsCount = document.createElement('div');
    reviewsCount.classList.add('reviews-count');
    reviewsCount.innerText = '14 Reviews';
    topSection.appendChild(reviewsCount);
    // top-section-right
    var loginBtn = document.createElement('button');
    loginBtn.classList.add('login-btn');
    loginBtn.textContent = 'Login';
    topSection.appendChild(loginBtn);
    reviewWidget.appendChild(topSection);
    // end top-section
    // post-review
    var postReview = document.createElement('div');
    postReview.classList.add('post-review');
    // left-section
    var leftSection = document.createElement('div');
    leftSection.classList.add('user-image');
    leftSection.innerHTML = "\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII=\" alt=\"profile-pic\" />\n  ";
    postReview.appendChild(leftSection);
    // review input section
    var reviewInput = document.createElement('textarea');
    reviewInput.classList.add('review-input');
    reviewInput.setAttribute('type', 'text');
    reviewInput.setAttribute('placeholder', 'Write your review here');
    postReview.appendChild(reviewInput);
    reviewWidget.appendChild(postReview);
    // end post-review
    // read-reviews
    var readReviews = document.createElement('div');
    readReviews.classList.add('read-reviews');
    // single review
    var singleReview = document.createElement('div');
    singleReview.classList.add('single-review');
    // left-section
    var userProfilePic = document.createElement('div');
    userProfilePic.classList.add('user-image');
    userProfilePic.innerHTML = "\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII=\" alt=\"profile-pic\" />\n  ";
    singleReview.appendChild(userProfilePic);
    // right section
    var rightSection = document.createElement('div');
    rightSection.classList.add('read-review-right');
    rightSection.innerHTML = "\n  <div class=\"user-review\">\n  <h4>John Doe</h4>\n  <p>Verified</p>\n  </div>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at molestie ipsum, nec aliquet tortor. Donec mattis orci aliquam lorem</p>";
    // singleReview.appendChild(leftSection);
    singleReview.appendChild(rightSection);
    readReviews.appendChild(singleReview);
    reviewWidget.appendChild(readReviews);
    // end read-reviews
    Container.appendChild(reviewWidget);
    document.body.appendChild(Container);
    // stylesheet
    var styleTag = document.createElement('style');
    document.head.appendChild(styleTag);
    styleTag.innerHTML = "\n  .container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px;\n    }\n  }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px;\n    }\n  }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px;\n    }\n  }\n  .review {\n    width: 100%;\n    height: auto;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .top-section, .post-review, .read-reviews .single-review {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .top-section {\n    margin-bottom: 20px;\n  }\n  .top-section .login-btn {\n    background-color: #fff;\n    border: 1px solid #e5e5e5;\n    border-radius: 5px;\n    padding: 10px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n  }\n  .review-input {\n    width: 100%;\n    height: auto;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n  .user-image img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: #ccc;\n    top: 0;\n    margin-right: 10px;\n  }\n  .read-review-right {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  .user-review h4 {\n    font-size: 16px;\n    font-weight: 600;\n    margin-bottom: 5px;\n  }\n  .user-review p {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    font-weight: 400;\n    color: #999;\n  }\n  ";
}
// embeddableWidget();
revewWidget();
