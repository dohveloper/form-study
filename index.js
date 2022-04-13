const form = document.getElementsByTagName("form")[0];

    
form.addEventListener("submit", function (e) {    
    e.preventDefault();
    
    const header = document.querySelector(".mb-4");
    const container = document.querySelector(".container");
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;

    form.style.display = "none";
    header.style.display = "none";

    console.log(container);
    container.innerHTML = `
    <p>name: ${name}</p>
    <p>email: ${email}</p>
    <p>phone: ${phone}</p>`;
}); 
