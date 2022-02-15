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
leftSection.innerHTML = "\n<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII=\" alt=\"profile-pic\" />\n";
postReview.appendChild(leftSection);
// review input section
var reviewInput = document.createElement('input');
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
userProfilePic.innerHTML = "\n<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII=\" alt=\"profile-pic\" />\n";
singleReview.appendChild(userProfilePic);
// right section
var rightSection = document.createElement('div');
rightSection.classList.add('read-review-right');
rightSection.innerHTML = "\n<div class=\"user-review\">\n<h4>John Doe</h4>\n<p>Verified</p>\n</div>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at molestie ipsum, nec aliquet tortor. Donec mattis orci aliquam lorem</p>";
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
styleTag.innerHTML = "\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.review {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-section, .post-review, .read-reviews .single-review {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.top-section {\n  margin-bottom: 20px;\n}\n.top-section .login-btn {\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 5px;\n  padding: 10px;\n  color: #000;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.review-input {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.user-image img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #ccc;\n  top: 0;\n  margin-right: 10px;\n}\n.read-review-right {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.user-review h4 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.user-review p {\n  margin-top: 0;\n}\n";
