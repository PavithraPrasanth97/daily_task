document.addEventListener('DOMContentLoaded', () => {
    const grids = Array.from(document.querySelectorAll('.grid'));
    const stopButton = document.getElementById('stop-button');
    const gameModal = document.getElementById('gameModal');
    const gameMessage = document.getElementById('gameMessage');
    const closeModal = document.querySelector('.close');
    
    let freezePositions = []; 
    let rowPositions = [];    
    let movingGridIndex = grids.length - 1; 
    let moveDirection = 1;    
    let gridSpeed = 5;        

    
    function getRandomPosition() {
        return Math.floor(Math.random() * (window.innerWidth - 100)); 
    }

    function startMovingGrid(gridIndex) {
        const grid = grids[gridIndex];
        let position = getRandomPosition();  

       
        let rowPosition = 70 + (gridIndex * 30);  

        
        rowPositions[gridIndex] = rowPosition;
        grid.style.position = 'absolute';
        grid.style.left = position + 'px';
        grid.style.top = rowPosition + 'px';  
     
        grid.style.display = 'block';

        
        const moveGrid = () => {
            position += moveDirection * gridSpeed;  

            
            if (position <= 0 || position >= window.innerWidth - 100) {
                moveDirection *= -1;
            }

            grid.style.left = position + 'px'; 

            if (!freezePositions[gridIndex]) {  
                requestAnimationFrame(moveGrid);
            }
        };

        moveGrid();
    }

    
    function stopAndFreezeGrid(gridIndex) {
        const grid = grids[gridIndex];
        freezePositions[gridIndex] = parseInt(grid.style.left); 
        console.log(`Grid ${gridIndex + 1} frozen at position: ${freezePositions[gridIndex]}px`);
    }


    function checkColumnMatch() {
        const firstGridPosition = freezePositions[grids.length - 1]; 
        const currentGridPosition = freezePositions[movingGridIndex];

        const matchThreshold = 0.9; 
        const difference = Math.abs(firstGridPosition - currentGridPosition);
        const allowedDifference = window.innerWidth * (1 - matchThreshold);

        return difference <= allowedDifference;
    }

    
    function showResult(message) {
        gameMessage.textContent = message;
        gameModal.style.display = 'block';
    }


    closeModal.addEventListener('click', () => {
        gameModal.style.display = 'none';
    });

    
    startMovingGrid(movingGridIndex);

   
    stopButton.addEventListener('click', () => {
        if (movingGridIndex >= 0) {
         
            stopAndFreezeGrid(movingGridIndex);

           
            const isMatch = checkColumnMatch();
            if (isMatch) {
                
                if (movingGridIndex === 0) {
                   
                    showResult('You Win! Game Over.');
                } else {
                 
                    movingGridIndex--;
                    startMovingGrid(movingGridIndex);
                }
            } else {
               
                showResult('Game Over! Position mismatch.');
            }
        }
    });
});
