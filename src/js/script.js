const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const root = document.querySelector(':root');
const defaultDeviceWidth = getComputedStyle(root).getPropertyValue('--deviceWidth');
const defaultDeviceHeight = getComputedStyle(root).getPropertyValue('--deviceHeight');
const currentDeviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
const currentDeviceHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
const deviceWidth = defaultDeviceWidth > currentDeviceWidth ? defaultDeviceWidth : currentDeviceWidth;
const deviceHeight = defaultDeviceHeight > currentDeviceHeight ? defaultDeviceHeight : currentDeviceHeight;

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

root.style.setProperty('--deviceWidth', `${deviceWidth}px`);
root.style.setProperty('--deviceHeight', `${deviceHeight}px`);

console.log({defaultDeviceWidth});
console.log({defaultDeviceHeight});
console.log({deviceWidth});
console.log({deviceHeight});

screen.orientation.addEventListener("change", function() {
    if (screen.orientation.type.includes("portrait")) {
        // Portrait mode
        console.log('Portrait');
    } else {
        // Landscape mode
        console.log('Landscape');
    }
});