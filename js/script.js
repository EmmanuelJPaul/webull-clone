const toggleSidebar = document.getElementById('toggle-sidebar'),
    main = document.getElementsByTagName('main')[0],
    sideBar = document.getElementsByTagName('aside')[0];

toggleSidebar.addEventListener('click', e => {
    sideBar.classList.toggle('show');
})
main.addEventListener('click', e => {
    sideBar.classList.remove('show');
})
