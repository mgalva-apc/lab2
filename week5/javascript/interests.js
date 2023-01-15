var modalBtn = document.getElementById("berry-button1");
var modal = document.getElementById("berry-modal");
modalBtn.addEventListener('click', function() { modal.showModal() } );
var cancelBtn = document.getElementById("berry-cancel");
cancelBtn.addEventListener('click', function() { modal.close()} );