const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Looping through images */
for (let i=1;i<6;i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i.toString()+'.jpg');
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => displayedImage.src=e.target.src);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const state = btn.getAttribute('class');
    if (state==='dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
