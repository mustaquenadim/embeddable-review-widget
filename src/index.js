function revewWidget() {
  const Container = document.createElement('div');
  Container.classList.add('container');

  const reviewWidget = document.createElement('div');
  reviewWidget.classList.add('review');

  // widget header - row 1
  const widgetHeader = document.createElement('div');
  widgetHeader.classList.add('widget-header');
  widgetHeader.innerHTML = '<h3>Customer Reviews</h3>';

  // widget header - row 2
  const reviewsCounter = document.createElement('div');
  reviewsCounter.classList.add('reviews-counter');

  const totalReviews = document.createElement('div');
  totalReviews.classList.add('total-reviews');
  totalReviews.innerHTML = `
    <div>
      <div>Stars</div>
      <p>Based on 1 review</p>
    </div>
  `;

  reviewsCounter.appendChild(totalReviews);

  const ratingStats = document.createElement('div');
  ratingStats.classList.add('rating-stats');

  const ratingStatsList = document.createElement('ul');
  ratingStatsList.classList.add('rating-stats-list');

  const ratingStatsListItem = document.createElement('li');
  ratingStatsListItem.classList.add('rating-stats-list-item');
  ratingStatsListItem.innerHTML = `
    percentage of 5 stars
  `;

  ratingStatsList.appendChild(ratingStatsListItem);
  ratingStats.appendChild(ratingStatsList);
  totalReviews.appendChild(ratingStats);

  const writeReviewBtn = document.createElement('div');
  writeReviewBtn.classList.add('write-review-btn');
  writeReviewBtn.innerHTML = `
    <button id='toggle-form-btn'>Write a review</button>
  `;

  reviewsCounter.appendChild(writeReviewBtn);
  widgetHeader.appendChild(reviewsCounter);

  // widget header - row 3
  const reviewsFilter = document.createElement('div');
  reviewsFilter.classList.add('reviews-filter');
  const reviewsFilterSelection = document.createElement('select');
  reviewsFilterSelection.classList.add('reviews-filter-selection');
  reviewsFilterSelection.innerHTML = `
    <option value="">Most Recent</option>
    <option value="">Highest Rating</option>
    <option value="">Lowest Rating</option>
    <option value="">Only Pictures</option>
    <option value="">Pictures First</option>
    <option value="">Videos First</option>
    <option value="">Most Helpful</option>
  `;
  reviewsFilter.appendChild(reviewsFilterSelection);

  widgetHeader.appendChild(reviewsFilter);

  // widgets form
  const widgetForm = document.createElement('div');
  widgetForm.classList.add('widget-form');
  widgetForm.id = 'review-form';
  widgetForm.innerHTML = `
    <form>
      <div class="form-group">
        <label for="reviewer-name">Name (displayed publicly like...)</label>
        <input type="text" class="form-control" id="reviewer-name" placeholder="Enter your name (public)">
      </div>
      <div class="form-group">
        <label for="reviewer-email">Email</label>
        <input type="email" class="form-control" id="reviewer-email" placeholder="Enter your email (private)">
      </div>
      <div class="form-group">
        <label for="reviewer-rating">Rating</label>
        star rating
      </div>
      <div class="form-group">
        <label for="review-title">Review Title</label>
        <input type="text" class="form-control" id="review-title" placeholder="Give your review a title">
      </div>
      <div class="form-group">
        <label for="reviewer-review">Review</label>
        <textarea class="form-control" id="reviewer-review" placeholder="Write your comments here" rows="3"></textarea>
      </div>
      <div class="form-group">
        <span>Picture/Video (optional)</span>
        <label for="review-picture-video" class="custom-file-upload">Picture/Video (optional)</label>
        <input type="file" class="form-control-file" id="review-picture-video">
      </div>
      <button type="submit" class="submit-btn">Submit Review</button>
    </form>
  `;

  // widget body
  const widgetBody = document.createElement('div');
  widgetBody.classList.add('widget-body');

  const singleReview = document.createElement('div');
  singleReview.classList.add('single-review');

  const reviewHeader = document.createElement('div');
  reviewHeader.classList.add('review-header');

  // left-section
  const userProfilePic = document.createElement('div');
  userProfilePic.classList.add('user-image');
  userProfilePic.innerHTML = `
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII=" alt="profile-pic" />
  `;

  reviewHeader.appendChild(userProfilePic);

  // right section
  const rightSection = document.createElement('div');
  rightSection.classList.add('read-review-right');
  rightSection.innerHTML = `
    <div class="user-review-rating">
    <p>stars</p>
    </div>
    <h4>Anonymous</h4>
  `;
  reviewHeader.appendChild(rightSection);

  singleReview.appendChild(reviewHeader);

  const reviewText = document.createElement('div');
  reviewText.classList.add('review-text', 'w-24');
  reviewText.innerHTML = `
    <div>
      <h4>Hello</h4>
      <p class='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam.</p>
    </div>
  `;

  singleReview.appendChild(reviewText);

  widgetBody.innerHTML +=
    singleReview.outerHTML +
    singleReview.outerHTML +
    singleReview.outerHTML +
    singleReview.outerHTML +
    singleReview.outerHTML;

  // view all button
  const viewAll = document.createElement('button');
  viewAll.classList.add('view-all-btn');
  viewAll.innerHTML = `
    <a href="#">View all reviews</a>
  `;

  widgetBody.appendChild(viewAll);

  reviewWidget.appendChild(widgetHeader);
  reviewWidget.appendChild(widgetForm);
  reviewWidget.appendChild(widgetBody);

  Container.appendChild(reviewWidget);
  document.getElementById('revew-widget').appendChild(Container);

  // stylesheet
  const tailwindScript = document.createElement('script');
  tailwindScript.src = 'https://cdn.tailwindcss.com';

  // document.head.innerHTML += `
  // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  // `;
  //   document.head.innerHTML += `
  //   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>`;

  const styleTag = document.createElement('style');
  document.head.appendChild(styleTag);
  styleTag.innerHTML = `
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .review {
    border: 1px solid #e6e6e6;
    padding: 20px;
  }
  .widget-header {
    display: flex;
    flex-direction: column;
  }
  .reviews-counter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .total-reviews {
    display: flex;
    flex-direction: row;
  }
  .reviews-filter {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-bottom: 10px;
  }
  #review-form {
    display: none;
  }
  .widget-form {
    border-top: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 15px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  .form-group label {
    font-size: 0.625rem;
    margin: 20px 3px 5px 0;
  }
  .form-control {
    width: 100%;
  }
  .custom-file-upload {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
  input[type="file"] {
    display: none;
}
.submit-btn {
  display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 0;
    padding: 01rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    text-decoration: none;
    color: #fff;
    background-color: #121212;
  }
  .single-review {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e6e6e6;
  }
  .review-header {
    display: flex;
    flex-direction: row;
  }
  .review-header .read-review-right .user-review {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
  .review-header p {
    margin: 0;
  }
  .review-header .user-image img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    top: 0;
    margin-right: 10px;
  }
  .single-review h4 {
    margin: 0;
  }
.view-all-btn {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B !important;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

.view-all-btn:disabled {
  pointer-events: none;
}

.view-all-btn:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.view-all-btn:active {
  box-shadow: none;
  transform: translateY(0);
}

.view-all-btn a {
  text-decoration: none;
}
  `;

  const toggleFormBtn = document.getElementById('toggle-form-btn');
  toggleFormBtn.addEventListener('click', handleToggleForm);

  const reviewForm = document.getElementById('review-form');
  reviewForm.style.display = 'none';

  function handleToggleForm() {
    console.log('clicked');
    if (reviewForm.style.display === 'none') {
      reviewForm.style.display = 'block';
    } else {
      reviewForm.style.display = 'none';
    }
  }
}

function embeddableWidget() {
  console.log('give a review');

  const Container = document.createElement('div');
  Container.classList.add('container');

  const reviewWidget = document.createElement('div');
  reviewWidget.classList.add('review');

  // top-section
  const topSection = document.createElement('div');
  topSection.classList.add('top-section');

  // top-section-left
  const reviewsCount = document.createElement('div');
  reviewsCount.classList.add('reviews-count');
  reviewsCount.innerText = '14 Reviews';
  topSection.appendChild(reviewsCount);

  // top-section-right
  const loginBtn = document.createElement('button');
  loginBtn.classList.add('login-btn');
  loginBtn.textContent = 'Login';
  topSection.appendChild(loginBtn);
  reviewWidget.appendChild(topSection);
  // end top-section

  // post-review
  const postReview = document.createElement('div');
  postReview.classList.add('post-review');

  // left-section
  const leftSection = document.createElement('div');
  leftSection.classList.add('user-image');
  leftSection.innerHTML = `
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII=" alt="profile-pic" />
  `;
  postReview.appendChild(leftSection);

  // review input section
  const reviewInput = document.createElement('textarea');
  reviewInput.classList.add('review-input');
  reviewInput.setAttribute('type', 'text');
  reviewInput.setAttribute('placeholder', 'Write your review here');
  postReview.appendChild(reviewInput);

  reviewWidget.appendChild(postReview);
  // end post-review

  // read-reviews
  const readReviews = document.createElement('div');
  readReviews.classList.add('read-reviews');

  // single review
  const singleReview = document.createElement('div');
  singleReview.classList.add('single-review');
  // left-section
  const userProfilePic = document.createElement('div');
  userProfilePic.classList.add('user-image');
  userProfilePic.innerHTML = `
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII=" alt="profile-pic" />
  `;
  singleReview.appendChild(userProfilePic);

  // right section
  const rightSection = document.createElement('div');
  rightSection.classList.add('read-review-right');
  rightSection.innerHTML = `
  <div class="user-review">
  <h4>John Doe</h4>
  <p>Verified</p>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at molestie ipsum, nec aliquet tortor. Donec mattis orci aliquam lorem</p>`;

  // singleReview.appendChild(leftSection);
  singleReview.appendChild(rightSection);

  readReviews.appendChild(singleReview);

  reviewWidget.appendChild(readReviews);
  // end read-reviews
  Container.appendChild(reviewWidget);
  document.body.appendChild(Container);

  // stylesheet
  const styleTag = document.createElement('style');
  document.head.appendChild(styleTag);
  styleTag.innerHTML = `
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .review {
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .top-section, .post-review, .read-reviews .single-review {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .top-section {
    margin-bottom: 20px;
  }
  .top-section .login-btn {
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 10px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
  .review-input {
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  .user-image img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    top: 0;
    margin-right: 10px;
  }
  .read-review-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .user-review h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .user-review p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 400;
    color: #999;
  }
  `;
}

// embeddableWidget();
revewWidget();
