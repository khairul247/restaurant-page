export default function loadHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear any existing content

    const headline = document.createElement('h1');
    headline.textContent = "ยินดีต้อนรับ";
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "Experience the best food and drinks in town.";
    content.appendChild(description);
}