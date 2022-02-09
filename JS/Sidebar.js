document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu-btn').onclick = function toggleNav(){
        const sidenav = document.getElementById('mySidenav');
        const menuBtn = document.getElementById('menu-btn-inner');

        if(!sidenav.classList.contains('sidenav-open')){
            sidenav.classList.add('sidenav-open');
            menuBtn.classList.add('open');
        }else{
            sidenav.classList.remove('sidenav-open');
            menuBtn.classList.remove('open');
        }
    }
})
