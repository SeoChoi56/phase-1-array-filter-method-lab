// Code your solution here
function findMatching(drivers, name) {
    function nameMatch(match) {
        if(name.toLowerCase() === match.toLowerCase()){
            return true;
        }
    }
    return drivers.filter(nameMatch);
}

function fuzzyMatch(drivers, letter) {
    function initialMatch(match) {
        let checker = ''
        for (let i = 0; i < letter.length; i++ ) {
            checker += match[i]
        }
        if(letter.toLowerCase() === checker.toLowerCase()) {
            return true;
        }
    }
    return drivers.filter(initialMatch)
}

function matchName(drivers, name) {
    function objValueMatch(match) {
        if(name.toLowerCase() === match.name.toLowerCase()) {
            return true
        }
    }
    return drivers.filter(objValueMatch)
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
findMatching(drivers, "Bobby")
fuzzyMatch(drivers, "Sa")