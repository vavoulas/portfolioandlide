var i = 0;
var images = [];

var time = 1500;
images[0] = 'images/img1.jpg';
images[1] = 'images/img2.jpeg';
images[2] = 'images/img3.jpeg';
images[3] = 'images/img4.jpeg';
images[4] = 'images/img5.jpeg';






function changeImage() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;


    } else {
        i = 0;

    }
    setTimeout("changeImage()", time);

}

changeImage();