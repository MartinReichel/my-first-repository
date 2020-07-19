let currentPhoto = 0;
let imagesData = [
    {
        photo: '1.jpg',
        title: 'iMac',
        description: 'Relativně výkonný počítač, často stále s HDD.'
    },

    {
        photo: '2.jpg',
        title: 'Macbook Air',
        description: 'Lehký přenosný notebook.'
    },

    {
        photo: '3.jpg',
        title: 'Aktivní pracoviště',
        description: 'Takto vypadá pracovní stůl počítačového natšence.'
    },

    {
        photo: '4.jpg',
        title: 'iPad',
        description: 'I tablet může někomu stačit k životu.'
    },

    {
        photo: '5.jpg',
        title: 'Macbook Air + iPhone',
        description: 'IT vybavení běžného člověka.'
    },
];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('.thumbnail-container div').remove('.this-arrow');
    $(`*[data-number="${photoNumber}"]`).parent().prepend('<div class="this-arrow"></div>');
}

let i = 0;
imagesData.forEach((data) => {
    $('.thumbnail-container').append(`<div style="position: relative"><div class="hidden-title">${data.title}<div class="hidden-arrow"></div></div><img src="${data.photo}" class="thumbnail" data-number="${i}"></img></div>`);
    i++;
});

loadPhoto(currentPhoto);

$('.thumbnail').click((event) => {
    currentPhoto = $(event.target).attr('data-number');
    loadPhoto(currentPhoto);
});

$('#right-arrow').click(() => {
    currentPhoto++;
    currentPhoto = currentPhoto % 5;
    loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
    currentPhoto--;
    currentPhoto = (currentPhoto + 5) % 5;
    loadPhoto(currentPhoto);
});

$('.text-container').hover(() => {
    $('#photo-description').text(imagesData[currentPhoto].description);
}, () => {
    $('#photo-description').text("");
});

$('.thumbnail').hover((event) => {
    $(event.target).parent().children('.hidden-title').css('visibility', 'unset');
}, (event) => {
    $(event.target).parent().children('.hidden-title').css('visibility', 'hidden');
});