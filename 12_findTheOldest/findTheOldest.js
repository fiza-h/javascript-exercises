const findTheOldest = function(Arr) {
    const currentDate = new Date();
    const oldestPerson = Arr.reduce((oldest, current) => {
    const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentDate.getFullYear() - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : currentDate.getFullYear() - current.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
