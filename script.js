let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
let rollCount = parseInt(localStorage.getItem('rollCount')) || 0;

let noviceRollerCompleted = JSON.parse(localStorage.getItem('noviceRollerCompleted')) || false;
let experiencedGamblerCompleted = JSON.parse(localStorage.getItem('experiencedGamblerCompleted')) || false;
let diceMasterCompleted = JSON.parse(localStorage.getItem('diceMasterCompleted')) || false;
let pointTycoonCompleted = JSON.parse(localStorage.getItem('pointTycoonCompleted')) || false;

let frequentRollerCompleted = JSON.parse(localStorage.getItem('frequentRollerCompleted')) || false;
let addictedRollerCompleted = JSON.parse(localStorage.getItem('addictedRollerCompleted')) || false;
let obsessiveRollerCompleted = JSON.parse(localStorage.getItem('obsessiveRollerCompleted')) || false;
let endlessRollerCompleted = JSON.parse(localStorage.getItem('endlessRollerCompleted')) || false;

let yahtzeeCompleted = JSON.parse(localStorage.getItem('yahtzeeCompleted')) || false;
let largeStraightCompleted = JSON.parse(localStorage.getItem('largeStraightCompleted')) || false;
let smallStraightCompleted = JSON.parse(localStorage.getItem('smallStraightCompleted')) || false;
let fullHouseCompleted = JSON.parse(localStorage.getItem('fullHouseCompleted')) || false;
let fourOfAKindCompleted = JSON.parse(localStorage.getItem('fourOfAKindCompleted')) || false;
let threeOfAKindCompleted = JSON.parse(localStorage.getItem('threeOfAKindCompleted')) || false;
let twoPairCompleted = JSON.parse(localStorage.getItem('twoPairCompleted')) || false;
let onePairCompleted = JSON.parse(localStorage.getItem('onePairCompleted')) || false;

function loadAchievements() {
    noviceRollerCompleted = JSON.parse(localStorage.getItem('noviceRollerCompleted')) || false;
    experiencedGamblerCompleted = JSON.parse(localStorage.getItem('experiencedGamblerCompleted')) || false;
    diceMasterCompleted = JSON.parse(localStorage.getItem('diceMasterCompleted')) || false;
    pointTycoonCompleted = JSON.parse(localStorage.getItem('pointTycoonCompleted')) || false;

    frequentRollerCompleted = JSON.parse(localStorage.getItem('frequentRollerCompleted')) || false;
    addictedRollerCompleted = JSON.parse(localStorage.getItem('addictedRollerCompleted')) || false;
    obsessiveRollerCompleted = JSON.parse(localStorage.getItem('obsessiveRollerCompleted')) || false;
    endlessRollerCompleted = JSON.parse(localStorage.getItem('endlessRollerCompleted')) || false;

    yahtzeeCompleted = JSON.parse(localStorage.getItem('yahtzeeCompleted')) || false;
    largeStraightCompleted = JSON.parse(localStorage.getItem('largeStraightCompleted')) || false;
    smallStraightCompleted = JSON.parse(localStorage.getItem('smallStraightCompleted')) || false;
    fullHouseCompleted = JSON.parse(localStorage.getItem('fullHouseCompleted')) || false;
    fourOfAKindCompleted = JSON.parse(localStorage.getItem('fourOfAKindCompleted')) || false;
    threeOfAKindCompleted = JSON.parse(localStorage.getItem('threeOfAKindCompleted')) || false;
    twoPairCompleted = JSON.parse(localStorage.getItem('twoPairCompleted')) || false;
    onePairCompleted = JSON.parse(localStorage.getItem('onePairCompleted')) || false;
}

function checkAchievements(rollType) {
    if (!noviceRollerCompleted && totalPoints >= 100) {
        noviceRollerCompleted = true;
        localStorage.setItem('noviceRollerCompleted', true);
        console.log('Achievement Unlocked: Novice Roller');
    }
    if (!experiencedGamblerCompleted && totalPoints >= 1000) {
        experiencedGamblerCompleted = true;
        localStorage.setItem('experiencedGamblerCompleted', true);
        console.log('Achievement Unlocked: Experienced Gambler');
    }
    if (!diceMasterCompleted && totalPoints >= 10000) {
        diceMasterCompleted = true;
        localStorage.setItem('diceMasterCompleted', true);
        console.log('Achievement Unlocked: Dice Master');
    }
    if (!pointTycoonCompleted && totalPoints >= 100000) {
        pointTycoonCompleted = true;
        localStorage.setItem('pointTycoonCompleted', true);
        console.log('Achievement Unlocked: Point Tycoon');
    }

    if (!frequentRollerCompleted && rollCount >= 100) {
        frequentRollerCompleted = true;
        localStorage.setItem('frequentRollerCompleted', true);
        console.log('Achievement Unlocked: Frequent Roller');
    }
    if (!addictedRollerCompleted && rollCount >= 1000) {
        addictedRollerCompleted = true;
        localStorage.setItem('addictedRollerCompleted', true);
        console.log('Achievement Unlocked: Addicted Roller');
    }
    if (!obsessiveRollerCompleted && rollCount >= 10000) {
        obsessiveRollerCompleted = true;
        localStorage.setItem('obsessiveRollerCompleted', true);
        console.log('Achievement Unlocked: Obsessive Roller');
    }
    if (!endlessRollerCompleted && rollCount >= 100000) {
        endlessRollerCompleted = true;
        localStorage.setItem('endlessRollerCompleted', true);
        console.log('Achievement Unlocked: Endless Roller');
    }

    if (!yahtzeeCompleted && rollType === 'Yahtzee') {
        yahtzeeCompleted = true;
        localStorage.setItem('yahtzeeCompleted', true);
        console.log('Achievement Unlocked: Yahtzee!');
    }
    if (!largeStraightCompleted && rollType === 'Large Straight') {
        largeStraightCompleted = true;
        localStorage.setItem('largeStraightCompleted', true);
        console.log('Achievement Unlocked: Big Ladder');
    }
    if (!smallStraightCompleted && rollType === 'Small Straight') {
        smallStraightCompleted = true;
        localStorage.setItem('smallStraightCompleted', true);
        console.log('Achievement Unlocked: Small Ladder');
    }
    if (!fullHouseCompleted && rollType === 'Full House') {
        fullHouseCompleted = true;
        localStorage.setItem('fullHouseCompleted', true);
        console.log('Achievement Unlocked: Full House Fun');
    }
    if (!fourOfAKindCompleted && rollType === '4 of a Kind') {
        fourOfAKindCompleted = true;
        localStorage.setItem('fourOfAKindCompleted', true);
        console.log('Achievement Unlocked: Quadruple Threat');
    }
    if (!threeOfAKindCompleted && rollType === '3 of a Kind') {
        threeOfAKindCompleted = true;
        localStorage.setItem('threeOfAKindCompleted', true);
        console.log('Achievement Unlocked: Triple Trouble');
    }
    if (!twoPairCompleted && rollType === '2 Pair') {
        twoPairCompleted = true;
        localStorage.setItem('twoPairCompleted', true);
        console.log('Achievement Unlocked: Double Vision');
    }
    if (!onePairCompleted && rollType === '1 Pair') {
        onePairCompleted = true;
        localStorage.setItem('onePairCompleted', true);
        console.log('Achievement Unlocked: Just a Pair');
    }
    renderAchievements();
}

function renderAchievements() {
    const achievementsListDiv = document.getElementById('achievementsList');
    if (achievementsListDiv) {
        achievementsListDiv.innerHTML = ''; // Clear previous content

        const renderAchievementItem = (id, name, description, completed) => {
            const status = completed ? 'Completed' : 'Not Completed';
            const statusClass = completed ? 'achievement-completed' : 'achievement-not-completed';
            return `
                <div class="achievement-item">
                    <span class="achievement-name">${name}</span>:
                    <span class="achievement-description">${description}</span>
                    <span class="${statusClass}">(${status})</span>
                </div>
            `;
        };

        achievementsListDiv.innerHTML += renderAchievementItem('noviceRoller', 'Novice Roller', 'Reach 100 total points.', noviceRollerCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('experiencedGambler', 'Experienced Gambler', 'Reach 1,000 total points.', experiencedGamblerCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('diceMaster', 'Dice Master', 'Reach 10,000 total points.', diceMasterCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('pointTycoon', 'Point Tycoon', 'Reach 100,000 total points.', pointTycoonCompleted);

        achievementsListDiv.innerHTML += renderAchievementItem('frequentRoller', 'Frequent Roller', 'Roll the dice 100 times.', frequentRollerCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('addictedRoller', 'Addicted Roller', 'Roll the dice 1,000 times.', addictedRollerCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('obsessiveRoller', 'Obsessive Roller', 'Roll the dice 10,000 times.', obsessiveRollerCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('endlessRoller', 'Endless Roller', 'Roll the dice 100,000 times.', endlessRollerCompleted);

        achievementsListDiv.innerHTML += renderAchievementItem('yahtzee', 'Yahtzee!', 'Roll a Yahtzee (Five of a Kind).', yahtzeeCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('largeStraight', 'Big Ladder', 'Roll a Large Straight.', largeStraightCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('smallStraight', 'Small Ladder', 'Roll a Small Straight.', smallStraightCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('fullHouse', 'Full House Fun', 'Roll a Full House.', fullHouseCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('fourOfAKind', 'Quadruple Threat', 'Roll a 4 of a Kind.', fourOfAKindCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('threeOfAKind', 'Triple Trouble', 'Roll a 3 of a Kind.', threeOfAKindCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('twoPair', 'Double Vision', 'Roll a 2 Pair.', twoPairCompleted);
        achievementsListDiv.innerHTML += renderAchievementItem('onePair', 'Just a Pair', 'Roll a 1 Pair.', onePairCompleted);
    }
}
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