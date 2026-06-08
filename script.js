async function getPapers(){
    try{
        const response = await fetch('https://upadhayay.github.io/db.json');
        const data = await response.json();
        
        const papersDiv = document.getElementById('papers');
        for(let paper of data.books){
            const paperDiv = document.createElement('div');
            paperDiv.classList.add('paper');

            paperDiv.innerHTML = `
            <h3>${paper.title}</h3>
            
            <p><strong>Year:</strong> ${paper.year}</p>
            <p><strong>Published?</strong> ${paper.published}</p>
            `;

            papersDiv.appendChild(paperDiv);
        }
    }catch{
        console.error("Error fetching papers");
    }
}
getPapers();