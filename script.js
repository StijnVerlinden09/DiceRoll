let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
let rollCount = parseInt(localStorage.getItem('rollCount')) || 0;

const achievements = [
    { id: 'noviceRoller', name: 'Novice Roller', description: 'Reach 100 total points.', condition: (rollType = null) => totalPoints >= 100, completed: false },
    { id: 'experiencedGambler', name: 'Experienced Gambler', description: 'Reach 1,000 total points.', condition: (rollType = null) => totalPoints >= 1000, completed: false },
    { id: 'diceMaster', name: 'Dice Master', description: 'Reach 10,000 total points.', condition: (rollType = null) => totalPoints >= 10000, completed: false },
    { id: 'frequentRoller', name: 'Frequent Roller', description: 'Roll the dice 100 times.', condition: (rollType = null) => rollCount >= 100, completed: false },
    { id: 'addictedRoller', name: 'Addicted Roller', description: 'Roll the dice 1,000 times.', condition: (rollType = null) => rollCount >= 1000, completed: false },
    { id: 'obsessiveRoller', name: 'Obsessive Roller', description: 'Roll the dice 10,000 times.', condition: (rollType = null) => rollCount >= 10000, completed: false },
    // rollType-based remain unchanged
    { id: 'yahtzee', name: 'Yahtzee!', description: 'Roll a Yahtzee (Five of a Kind).', condition: (rollType) => rollType === 'Yahtzee', completed: false },
    { id: 'largeStraight', name: 'Big Ladder', description: 'Roll a Large Straight.', condition: (rollType) => rollType === 'Large Straight', completed: false },
    { id: 'smallStraight', name: 'Small Ladder', description: 'Roll a Small Straight.', condition: (rollType) => rollType === 'Small Straight', completed: false },
    { id: 'fullHouse', name: 'Full House Fun', description: 'Roll a Full House.', condition: (rollType) => rollType === 'Full House', completed: false },
    { id: 'fourOfAKind', name: 'Quadruple Threat', description: 'Roll a 4 of a Kind.', condition: (rollType) => rollType === '4 of a Kind', completed: false },
    { id: 'threeOfAKind', name: 'Triple Trouble', description: 'Roll a 3 of a Kind.', condition: (rollType) => rollType === '3 of a Kind', completed: false },
    { id: 'twoPair', name: 'Double Vision', description: 'Roll a 2 Pair.', condition: (rollType) => rollType === '2 Pair', completed: false },
    { id: 'onePair', name: 'Just a Pair', description: 'Roll a 1 Pair.', condition: (rollType) => rollType === '1 Pair', completed: false },
];

function loadAchievements() {
    const savedAchievements = JSON.parse(localStorage.getItem('achievements'));
    if (savedAchievements) {
        achievements.forEach(achievement => {
            const saved = savedAchievements.find(sa => sa.id === achievement.id);
            if (saved) {
                achievement.completed = saved.completed;
            }
        });
    }
}

function saveAchievements() {
    localStorage.setItem('achievements', JSON.stringify(achievements.map(a => ({ id: a.id, completed: a.completed }))));
}

function checkAchievements(rollType) {
    achievements.forEach(achievement => {
        if (!achievement.completed && achievement.condition(rollType)) {
            achievement.completed = true;
            saveAchievements();
            console.log(`Achievement Unlocked: ${achievement.name}`);
        }
    });
    renderAchievements();
}

function renderAchievements() {
    const achievementsListDiv = document.getElementById('achievementsList');
    if (achievementsListDiv) {
        achievementsListDiv.innerHTML = ''; // Clear previous content
        achievements.forEach(achievement => {
            const status = achievement.completed ? 'Completed' : 'Not Completed';
            const statusClass = achievement.completed ? 'achievement-completed' : 'achievement-not-completed';
            const achievementHtml = `
                <div class="achievement-item">
                    <span class="achievement-name">${achievement.name}</span>: 
                    <span class="achievement-description">${achievement.description}</span>
                    <span class="${statusClass}">(${status})</span>
                </div>
            `;
            achievementsListDiv.innerHTML += achievementHtml;
        });
    }
}

// Helper to roll a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Map roll type to points
function getPoints(type) {
    switch (type) {
        case "Yahtzee": return 7;
        case "Large Straight": return 6;
        case "Small Straight": return 5;
        case "Full House": return 4;
        case "4 of a Kind": return 3;
        case "3 of a Kind": return 2;
        case "2 Pair": return 2;
        case "1 Pair": return 1;
        default: return 0;
    }
}

// Categorize the roll (your existing function)
function rollDice(values) {
    if (!Array.isArray(values) || values.length !== 5) {
        return "Invalid input: Must be an array of 5 numbers.";
    }
    if (values.some(val => !Number.isInteger(val) || val < 1 || val > 6)) {
        return "Invalid input: Values must be integers between 1 and 6.";
    }
    const counts = {};
    for (const value of values) {
        counts[value] = (counts[value] || 0) + 1;
    }
    const countValues = Object.values(counts).sort((a, b) => b - a);
    if (countValues[0] === 5) {
        return "Yahtzee";
    }

    // Check for straights first (Large then Small)
    const sorted = [...new Set(values)].sort((a, b) => a - b).join('');
    if (sorted === '12345' || sorted === '23456') {
        return "Large Straight";
    } else if (
        sorted.includes('1234') ||
        sorted.includes('2345') ||
        sorted.includes('3456')
    ) {
        return "Small Straight";
    }

    // Then check for other combinations based on counts
    if (countValues[0] === 4) {
        return "4 of a Kind";
    } else if (countValues[0] === 3 && countValues[1] === 2) {
        return "Full House";
    } else if (countValues[0] === 3) {
        return "3 of a Kind";
    } else if (countValues[0] === 2 && countValues[1] === 2) {
        return "2 Pair";
    } else if (countValues[0] === 2) {
        return "1 Pair";
    } else {
        return "Nothing";
    }
}

function getDiceIconHtml(value) {
    switch (value) {
        case 1: return '<i class="fa-solid fa-dice-one"></i>';
        case 2: return '<i class="fa-solid fa-dice-two"></i>';
        case 3: return '<i class="fa-solid fa-dice-three"></i>';
        case 4: return '<i class="fa-solid fa-dice-four"></i>';
        case 5: return '<i class="fa-solid fa-dice-five"></i>';
        case 6: return '<i class="fa-solid fa-dice-six"></i>';
        default: return '';
    }
}

// Main function to roll and update DOM
function rollDiceAndShow() {
    console.log("rollDiceAndShow called");
    const rollBtn = document.getElementById('rollBtn');
    const diceValuesDiv = document.getElementById('diceValues');
    const rollPointsSpan = document.getElementById('rollPoints');
    const rollTypeSpan = document.getElementById('rollType');
    const currentRollPointsSpan = document.getElementById('currentRollPoints');
    const rollCounterSpan = document.getElementById('rollCounter');

    // Disable the button immediately
    rollBtn.disabled = true;
    rollBtn.textContent = "Rolling...";

    rollCount++; // Increment roll counter
    localStorage.setItem('rollCount', rollCount); // Save to local storage

    // Generate the actual dice values once
    const finalDice = Array.from({ length: 5 }, () => getRandomInt(1, 6));

    let animationInterval = setInterval(() => {
        const randomDice = Array.from({ length: 5 }, () => getRandomInt(1, 6));
        if (diceValuesDiv) {
            diceValuesDiv.innerHTML = randomDice.map(getDiceIconHtml).join(' ');
        }
    }, 100); // Update every 100ms for a rolling effect

    setTimeout(() => {
        clearInterval(animationInterval);

        // Display the final dice values
        if (diceValuesDiv) {
            diceValuesDiv.innerHTML = finalDice.map(getDiceIconHtml).join(' ');
        }

        // Determine roll type and points based on final dice
        let rollType = rollDice(finalDice);
        let points = getPoints(rollType);

        totalPoints += points; // Add current roll points to total
        localStorage.setItem('totalPoints', totalPoints); // Save to local storage

        // Update DOM with final results
        if (rollPointsSpan) {
            rollPointsSpan.textContent = totalPoints;
        }
        if (rollTypeSpan) {
            rollTypeSpan.textContent = rollType;
        }
        if (currentRollPointsSpan) {
            currentRollPointsSpan.textContent = points;
        }
        if (rollCounterSpan) {
            rollCounterSpan.textContent = rollCount;
        }

        checkAchievements(rollType); // Check for achievements after each roll

        // Re-enable the button
        rollBtn.disabled = false;
        rollBtn.textContent = "Roll Dices";
    }, 2000); // Show final result after 2 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    totalPoints = Number(localStorage.getItem('totalPoints'));
    if (isNaN(totalPoints)) totalPoints = 0;

    rollCount = Number(localStorage.getItem('rollCount'));
    if (isNaN(rollCount)) rollCount = 0;

    loadAchievements(); // Load achievements on page load
    if (document.getElementById('rollPoints')) {
        document.getElementById('rollPoints').textContent = totalPoints;
    }
    if (document.getElementById('rollCounter')) {
        document.getElementById('rollCounter').textContent = rollCount;
    }

    // Attach event listener to the roll button
    const rollBtn = document.getElementById('rollBtn');
    if (rollBtn) {
        rollBtn.addEventListener('click', rollDiceAndShow);
    }
});