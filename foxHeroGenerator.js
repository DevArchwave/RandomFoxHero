import fetch from 'node-fetch';

function getRandomFoxName() {
    const foxNames = ['Foxy', 'Red', 'Swift', 'Snow', 'Shadow', 'Blaze', 'Sky', 'Frost', 'Amber', 'Dusk'];
    const randomIndex = Math.floor(Math.random() * foxNames.length);
    return foxNames[randomIndex];
}

function generateFoxExperience() {
    return Math.floor(Math.random() * 1001); //Number between 0 and 1000.
}

function foxTitle(exp) {
    let classification;
    switch (true) {
        case (exp <= 100):
            classification = 'Newborn';
            break;
        case (exp <= 200):
            classification = 'Kit';
            break;
        case (exp <= 300):
            classification = 'Goober';
            break;
        case (exp <= 400):
            classification = 'Young';
            break;
        case (exp <= 500):
            classification = 'Adult';
            break;
        case (exp <= 600):
            classification = 'Experienced';
            break;
        case (exp <= 700):
            classification = 'Senior';
            break;
        case (exp <= 800):
            classification = 'Elder';
            break;
        case (exp <= 900):
            classification = 'Ancient';
            break;
        case (exp <= 1000):
            classification = 'Legendary';
            break;
        default:
            classification = 'Unknown';
    }
    return classification;
}

async function getRandomFoxHero() {
    try {
        const response = await fetch('https://randomfox.ca/floof/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const thisFoxName = getRandomFoxName();
        const thisFoxTitle = foxTitle(generateFoxExperience());
        const article = ['A', 'E', 'I', 'O', 'U'].includes(thisFoxTitle[0]) ? 'an' : 'a'; //grammar, shrug
        console.log(`The fox hero '${thisFoxName}' is ${article} ${thisFoxTitle} level fox. Take good care of them on your coding adventures!`);
        console.log(data.image);
    } catch (error) {
        console.error('We encountered a problem generating your fox:', error);
    }
}

getRandomFoxHero();