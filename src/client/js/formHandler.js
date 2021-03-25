import {validate} from './validateURL'
const axios = require('axios');

const handle = (e) => {
    e.preventDefault()
    //grab url input from user
    let input = document.getElementById('userInput').value;
    //check url against regex, if returns true grab data from server and update UI
    if (validate(input)) {
        axios({
            method: 'post',
            url: 'http://localhost:5050/analysis',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({input}),
        })
        .then((res) => {
            console.log(res)
            document.querySelector('#results').classList.remove('hidden');
            
            document.querySelector('.heading').innerHTML = `<h2>Results</h2><br><p>URL submitted: ${input}`;
            
            document.querySelector('#irony').innerHTML = `<p>Irony: ${res.data.irony}</p>`;
            document.querySelector('#subjectivity').innerHTML = `<p>Subjectivity: ${res.data.subjectivity}</p>`;
            document.querySelector('#confidence').innerHTML = `<p>Confidence: ${res.data.confidence}</p>`;
            document.querySelector('#score').innerHTML = ` <p>Score: ${get_score(res.data.score_tag)}</p>`;
            document.querySelector('#agreement').innerHTML = `<p>Agreement: ${res.data.agreement}</p>`;
        })
        
    } else {
        alert('Please enter a valid url')
    }
}

//switch case to handle output for score tag
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
                    score = 'Neutral';
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

