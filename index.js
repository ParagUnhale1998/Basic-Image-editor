const blurInput = document.getElementById('blur');
const contrastInput = document.getElementById('contrast');
const hueRotateInput = document.getElementById('hue-rotate');
const sepiaInput = document.getElementById('sepia');
const brightnessInput = document.getElementById('brightness');
const saturateInput = document.getElementById('saturate');
const noFlipRadio = document.getElementById('no-flip');
const flipXRadio = document.getElementById('flip-x');
const flipYRadio = document.getElementById('flip-y');
const downloadBTN = document.getElementById('download-button');
const uploadButton = document.getElementById('upload-buttons');
let image = document.getElementById('chosen-image')


uploadButton.addEventListener('change', (event) => {
  // Do something when a file is selected
  document.querySelector(".image-container").style.display = "block";
  downloadBTN.style.display = "block";
  const file = event.target.files[0];
                // this
  const imageURL  = URL.createObjectURL(file);
  image.src = imageURL;
                //   or
//   if (file.type.match('image.*')) {
//     const reader = new FileReader();
    
//     reader.addEventListener('load', (event) => {
//         image.src = event.target.result;
//     });
    
//     reader.readAsDataURL(file);
// }
});



// add event listeners to the filter elements
blurInput.addEventListener('input', () => {
    image.style.filter = `blur(${blurInput.value}px)`;
  });
  
  contrastInput.addEventListener('input', () => {
    image.style.filter = `contrast(${contrastInput.value}%)`;
  });
  
  hueRotateInput.addEventListener('input', () => {
    image.style.filter = `hue-rotate(${hueRotateInput.value}deg)`;
  });
  
  sepiaInput.addEventListener('input', () => {
    image.style.filter = `sepia(${sepiaInput.value}%)`;
  });
  
  brightnessInput.addEventListener('input', () => {
    image.style.filter = `brightness(${brightnessInput.value}%)`;
  });

  saturateInput.addEventListener('input', () => {
    image.style.filter = `saturate(${saturateInput.value}%)`;
  });
  // add event listeners to the flip radio buttons
  noFlipRadio.addEventListener('click', () => {
    image.style.transform = 'none';
  });
  
  flipXRadio.addEventListener('click', () => {
    image.style.transform = 'scaleX(-1)';
  });
  
  flipYRadio.addEventListener('click', () => {
    image.style.transform = 'scaleY(-1)';
  });

// for downloading the image
  downloadBTN.addEventListener('click', () => {
    const uploadfile = document.getElementById('upload-buttons').files[0];
    const imageURL  = URL.createObjectURL(uploadfile);
    const link = document.createElement('a');
    link.download = `myImage.png`;
    link.href = imageURL;
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
  })
