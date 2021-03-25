import {validate} from './validateURL'

const handle = (e) => {
    e.preventDefault()

    let input = document.getElementById('userInput').value;

    if (validate(input)) {
        fetch('http://localhost:5050/analysis', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({input}),
        }).then((res) => res.json())
        .then((res) => {
            document.querySelector('#results').classList.remove('hidden');
            
            document.querySelector('.heading').innerHTML = `<h2>Results</h2><br><p>URL submitted: ${input}`;
            
            document.querySelector('#irony').innerHTML = `<p>Irony: ${res.irony}</p>`;
            document.querySelector('#subjectivity').innerHTML = `<p>Subjectivity: ${res.subjectivity}</p>`;
            document.querySelector('#confidence').innerHTML = `<p>Confidence: ${res.confidence}</p>`;
            document.querySelector('#score').innerHTML = ` <p>Score: ${get_score(res.score_tag)}</p>`;
            document.querySelector('#agreement').innerHTML = `<p>Agreement: ${res.agreement}</p>`;
        })
        
    } else {
        alert('Please enter a valid url')
    }
}

const get_score = (str) => {
    let score = '';
            switch(str) {
                case 'P+':
                    score = 'Strong positive';
                    break;
                case 'P':
                    score = 'Positive';
                    break;
                case 'NEU':
                    score = 'Nuetral';
                    break;
                case 'N':
                    score = 'Negative';
                case 'N+':
                    score = 'Strong negative';
                    break;
                case 'NONE':
                    score = 'Without sentiment';
                    break;
            }
            return score;
}

export {handle}