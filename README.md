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
- [Extended Features](#extended-features)
- [My Learning](#my-learning)
	- [How to use multiple media queries?](#how-to-use-multiple-media-queries)
    - [How to access CSS variables using javascript?](#how-to-access-css-variables-using-javascript)
    - [How to change CSS variable value using javascript?](#how-to-change-css-variable-value-using-javascript)
    - [How to detect if the device is in portrait or landscape mode?](#how-to-detect-if-the-device-is-in-portrait-or-landscape-mode)
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

### EXTENDED FEATURES

- Responsive design
- Custom CSS variables
- Manipulation of CSS variables using JavaScript
- Device orientation detection

<br/>

### MY LEARNING

#### How to use multiple media queries?

  ```css
  @media only screen and (max-width: 480px) {
  
  }
  
  @media screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
  
  }
  
  @media screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
  
  }
  ```
  
#### How to access CSS variables using javascript?
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

#### How to change CSS variable value using javascript?
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

#### How to detect if the device is in portrait or landscape mode?
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

#### 🔗 [LIVE SITE LINK](https://montasim.github.io/login-and-register-page/)

<br/>

### CREDIT

- [Codehal](https://www.youtube.com/watch?v=p1GmFCGuVjw)

<br/>
<br/>
<br/>
<br/>

<!-- feel free to contact me text start -->
<div align="center"> 
    <img loading="lazy" width="21" src="./media/icons/link.png" alt="postbox icon" />
    <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=385&height=21&lines=FEEL+FREE+TO+CONTACT+ME+ANYTIME" alt="feel free to contact me" />
</div>
<!-- feel free to contact me text end -->

<br/>

<!-- social media links start -->
<table align="center">
    <thead align="center">
        <tr>
            <th>
                <a href="https://www.linkedin.com/in/montasim" title="linkedin.com/in/montasim">
                    <img loading="lazy" alt="LinkedIn icon" src="https://cdn.simpleicons.org/linkedin/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://www.github.com/montasim" title="github.com/montasim">
                    <img loading="lazy" alt="GitHub icon" src="https://cdn.simpleicons.org/github/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://stackoverflow.com/users/20348607/montasim" title="stackoverflow.com/users/20348607/montasim">
                    <img loading="lazy" alt="StackOverflow icon" src="https://cdn.simpleicons.org/stackoverflow/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://montasim-dev.web.app/" title="montasim-dev.web.app">
                    <img loading="lazy" alt="web icon" src="https://cdn.simpleicons.org/googlechrome/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="mailto:montasimmamun@gmail.com" title="montasimmamun@gmail.com">
                    <img loading="lazy" alt="Gmail icon" src="https://cdn.simpleicons.org/gmail/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://www.facebook.com/montasimmamun/" title="facebook.com/montasimmamun">
                    <img loading="lazy" alt="Facebook icon" src="https://cdn.simpleicons.org/facebook/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://twitter.com/montasimmamun" title="twitter.com/montasimmamun">
                    <img loading="lazy" alt="Twitter icon" src="https://cdn.simpleicons.org/twitter/EB008B" width="35px">
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
