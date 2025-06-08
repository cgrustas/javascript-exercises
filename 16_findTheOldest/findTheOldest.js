const findTheOldest = function(people) {
    return people.reduce((person, oldest) => age(person) > age(oldest) ? person : oldest, 
        people[0]);
};

function age(person) {
    if (!('yearOfDeath' in person)) person['yearOfDeath'] = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
