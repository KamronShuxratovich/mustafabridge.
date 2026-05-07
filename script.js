document.getElementById('consultingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your request for a consultation has been sent. We will contact you shortly.');
    this.reset();
});

function openModal(name, img, desc) {
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalImg').src = img;
    document.getElementById('modalDescription').innerText = desc;
    document.getElementById('uniModal').style.display = "block";
}

function closeModal() {
    document.getElementById('uniModal').style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the white box
window.onclick = function(event) {
    let modal = document.getElementById('uniModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}