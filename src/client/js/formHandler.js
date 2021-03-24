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
            

            document.querySelector('.info').innerHTML = 
            `<p>URL submitted: <br>${input}<br><br><br>
             <p>Irony: ${res.irony}</p><br>
             <p>Segment: ${res.subjectivity}</p><br>
             <p>Confidence: ${res.confidence}</p><br>
             <p>Score: ${get_score(res.score_tag)}</p><br>
             <p>Agreement: ${res.agreement}</p>`

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