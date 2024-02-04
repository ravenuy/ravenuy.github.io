document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const coordinatesText = document.getElementById('coordinates');
    const copySuccessText = document.getElementById('copy-success');

    function generateRandomCoordinate() {
        const x = Math.floor(Math.random() * 12) + 1;
        const y = Math.floor(Math.random() * 12) + 1;
        return { x, y };
    }

    function initializeGrid() {
        for (let i = 1; i <= 12; i++) {
            for (let j = 1; j <= 12; j++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                gridContainer.appendChild(cell);
            }
        }
    }

    function highlightCoordinate(x, y) {
        const cells = document.querySelectorAll('.grid-cell');
        cells.forEach(cell => {
            cell.classList.remove('highlight');
        });

        const index = (y - 1) * 12 + (x - 1);
        cells[index].classList.add('highlight');
    }

    initializeGrid();

    generateBtn.addEventListener('click', function() {
        const { x, y } = generateRandomCoordinate();
        coordinatesText.innerText = `Coordinates: X=${x}, Y=${y}`;
        highlightCoordinate(x, y);
    });

    copyBtn.addEventListener('click', function() {
        const textToCopy = "1 small passive";
        
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);

        // Select and copy the content
        tempInput.select();
        document.execCommand('copy');

        // Remove the temporary input
        document.body.removeChild(tempInput);

        // Display success text
        copySuccessText.innerText = `"${textToCopy}" copied`;
        copySuccessText.style.color = 'red';
        copySuccessText.style.display = 'block';

        // Hide the success text after a few seconds (optional)
        setTimeout(() => {
            copySuccessText.style.display = 'none';
        }, 3000);
    });
});
