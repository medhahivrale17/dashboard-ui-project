function loadComponent(id, file){

fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});

}

loadComponent("sidebar-container","../components/sidebar.html");

loadComponent("header-container","../components/header.html");
