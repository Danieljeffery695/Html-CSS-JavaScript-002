const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".close");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
sideMenu.style.display = "none";
})

themeToggler.addEventListener("click", () => {
document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");
})

Order.forEach(order => {
    const tr = document.createElement("tr");
    const trContent =`
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Detail</td>
    ` ;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
});