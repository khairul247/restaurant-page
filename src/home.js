export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Enjoy our delicious food in a cozy atmosphere!';
    
    content.appendChild(heading);
    content.appendChild(paragraph);
}