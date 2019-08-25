$('#link').on('click', event => {
    event.preventDefault()
    window.location = '/add';
    // console.log('working');
});
$('#home').on('click', event => {
    event.preventDefault()
    window.location = '/';
    console.log('working');
});