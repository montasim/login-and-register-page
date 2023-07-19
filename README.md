<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=24&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=378&height=40&lines=LOGIN+AND+REGISTRATION+PAGE" alt="LOGIN AND REGISTRATION PAGE" />

<!-- repository summary badges start -->
<div>
    <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/montasim/login-and-register-page?&labelColor=EB008B&color=00B8B5">
    <img alt="goto badge" src="https://img.shields.io/github/search/montasim/login-and-register-page/goto?&labelColor=EB008B&color=00B8B5">
    <img alt="GitHub repo file count" src="https://img.shields.io/github/directory-file-count/montasim/login-and-register-page?&labelColor=EB008B&color=00B8B5">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/montasim/login-and-register-page?&labelColor=EB008B&color=00B8B5">
    <img alt="GitHub" src="https://img.shields.io/github/license/montasim/login-and-register-page?&labelColor=EB008B&color=00B8B5">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/montasim/login-and-register-page?&labelColor=EB008B&color=00B8B5">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/montasim/login-and-register-page?&labelColor=EB008B&color=00B8B5">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/montasim/login-and-register-page?&labelColor=EB008B&color=00B8B5">
</div>
<!-- repository summary badges end -->

<br/>
<br/>

## CONTENTS:
- [Used Technology](#used-technology)
- [Used Colors](#used-colors)
- [Used Resources](#used-resources)
- [My Learning](#my-learning)
- [Live Site Link](#-live-site-link)
- [Credit](#credit)

<br/>

<details>
    <summary> PREVIEW </summary>
    <br/>
    <img loading="lazy" alt="Index page" src="./src/media/images/preview/index.png" />
    <img loading="lazy" alt="Login page" src="./src/media/images/preview/login.png" />
    <img loading="lazy" alt="Register page" src="./src/media/images/preview/register.png" />
</details>

<br/>

### USED TECHNOLOGY

- HTML
- CSS
- JAVASCRIPT

<br/>

### USED COLORS

| Color      | Hex                                                          |
|------------|--------------------------------------------------------------|
| White      | ![#0a192f](https://via.placeholder.com/10/fff?text=+) `#fff` |
| Navy | ![#112240](https://via.placeholder.com/10/162938?text=+) `#162938` |

<br/>

### USED RESOURCES

- [WALLPAPER](./src/media/images/background.jpg)
- [ICONS](https://ionic.io/ionicons)
  - CLOSE ICON `<ion-icon name="close"></ion-icon>`
  - USER ICON `<ion-icon name="person"></ion-icon>`
  - EMAIL ICON `<ion-icon name="mail"></ion-icon>`
  - PASSWORD ICON `<ion-icon name="lock-closed"></ion-icon>`

<br/>

### MY LEARNING

- HOW TO USE MULTIPLE MEDIA QUERY

  ```css
  @media only screen and (max-width: 480px) {
  
  }
  
  @media screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
  
  }
  
  @media screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
  
  }
  ```
  
- HOW TO ACCESS CSS VARIABLE USING JAVASCRIPT
  ```css
  :root {
      --deviceWidth: 375px;
      --deviceHeight: 667px;
  }
  ```
  ```javascript
  const root = document.querySelector(':root');
  const defaultDeviceWidth = getComputedStyle(root).getPropertyValue('--deviceWidth');
  const defaultDeviceHeight = getComputedStyle(root).getPropertyValue('--deviceHeight');
  
  console.log({defaultDeviceWidth});
  console.log({defaultDeviceHeight});
  ```

- HOW TO CHANGE CSS VARIABLE VALUE USING JAVASCRIPT
  ```css
  :root {
      --deviceWidth: 375px;
      --deviceHeight: 667px;
  }
  ```
  ```javascript
  const root = document.querySelector(':root');
  
  root.style.setProperty('--deviceWidth', '480px');
  root.style.setProperty('--deviceHeight', '768px');
  
  console.log({deviceWidth});
  console.log({deviceHeight});
  ```

- HOW TO DETECT IF DEVICE IS ON PORTRAIT OR LANDSCAPE MODE?
  ```javascript
  screen.orientation.addEventListener("change", function() {
      if (screen.orientation.type.includes("portrait")) {
          // Portrait mode
          console.log('Portrait');
      } else {
          // Landscape mode
          console.log('Landscape');
      }
  });
  ```
<br/>

#### 🔗 [LIVE SITE LINK](http://montasim-dev.web.app/login-and-register-page/)

<br/>

### CREDIT

- [Codehal](https://www.youtube.com/watch?v=p1GmFCGuVjw)

<br/>

<br/>
<br/>
<br/>
<br/>

<!-- feel free to contact me text start -->
<div> 
    <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=370&height=21&lines=FEEL+FREE+TO+CONTACT+ME+ANYTIME" alt="feel free to contact me svg" />
</div>
<!-- feel free to contact me text end -->

<br/>

<!-- social media links start -->
<table>
    <thead align="center">
        <tr>
            <th>
                <a href="https://www.linkedin.com/in/montasim">
                    <img alt="Linkedin icon" src="https://cdn.simpleicons.org/linkedin" width="35px">
                </a>
            </th>
            <th>
                <a href="https://www.github.com/montasim">
                    <img alt="GitHub icon" src="https://cdn.simpleicons.org/github/white" width="35px">
                </a>
            </th>
            <th>
                <a href="https://stackoverflow.com/users/20348607/montasim">
                    <img alt="StackOverflow icon" src="https://cdn.simpleicons.org/stackoverflow" width="35px">
                </a>
            </th>
            <th>
                <a href="https://montasim-dev.web.app/">
                    <img alt="web icon" src="https://cdn.simpleicons.org/googlechrome" width="35px">
                </a>
            </th>
            <th>
                <a href="mailto:montasimmamun@gmail.com">
                    <img alt="Gmail icon" src="https://cdn.simpleicons.org/gmail" width="35px">
                </a>
            </th>
            <th>
                <a href="https://www.facebook.com/montasimmamun/">
                    <img alt="Facebook icon" src="https://cdn.simpleicons.org/facebook" width="35px">
                </a>
            </th>
            <th>
                <a href="https://twitter.com/montasimmamun">
                    <img alt="Twitter icon" src="https://cdn.simpleicons.org/twitter" width="35px">
                </a>
            </th>
        </tr>
    </thead>
</table>
<!-- social media links end -->
<!-- connect with me end -->

<br/>
<br/>
<br/>
