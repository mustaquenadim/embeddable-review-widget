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
const reviewInput = document.createElement('input');
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
