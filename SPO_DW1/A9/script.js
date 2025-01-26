document.querySelectorAll('input[type="range"]').forEach(input => {
    input.addEventListener('input', updateBoxRadius);
});

document.getElementById('copy-css').addEventListener('click', copyCSSToClipboard);

function updateBoxRadius() {
    const topLeft = document.getElementById('top-left').value;
    const topRight = document.getElementById('top-right').value;
    const bottomLeft = document.getElementById('bottom-left').value;
    const bottomRight = document.getElementById('bottom-right').value;

    const box = document.getElementById('box');
    box.style.borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;

    document.getElementById('top-left-text').value = `${topLeft}%`;
    document.getElementById('top-right-text').value = `${topRight}%`;
    document.getElementById('bottom-left-text').value = `${bottomLeft}%`;
    document.getElementById('bottom-right-text').value = `${bottomRight}%`;

    const cssOutput = `border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%;`;
    document.getElementById('css-output').innerText = cssOutput;
}

function copyCSSToClipboard() {
    const cssOutput = document.getElementById('css-output').innerText;
    navigator.clipboard.writeText(cssOutput).then(() => {
        alert('CSS copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    