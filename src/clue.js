// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jean',
        lastName: 'Alvarez',
        occupation: 'Entrepreneur',
        age: 22,
        description: 'Latino Male, Brown Eyes',
        image: 'image',
        color: 'Dark'
    },
    {
        firstName: 'Emily',
        lastName: 'Johnson',
        occupation: 'Software Engineer',
        age: 28,
        description: 'Caucasian Female, Blue Eyes',
        image: 'image',
        color: 'Fair'
    },
    {
        firstName: 'Raj',
        lastName: 'Patel',
        occupation: 'Doctor',
        age: 35,
        description: 'South Asian Male, Black Hair',
        image: 'image',
        color: 'Medium'
    },
    {
        firstName: 'Maria',
        lastName: 'Garcia',
        occupation: 'Artist',
        age: 30,
        description: 'Hispanic Female, Green Eyes',
        image: 'image',
        color: 'Olive'
    },
    {
        firstName: 'Alex',
        lastName: 'Wang',
        occupation: 'Architect',
        age: 40,
        description: 'Asian Male, Glasses',
        image: 'image',
        color: 'Light'
    },
    {
        firstName: 'Liam',
        lastName: 'Wilson',
        occupation: 'Writer',
        age: 45,
        description: 'Caucasian Male, Beard',
        image: 'image',
        color: 'Pale'
    }
];


// Rooms Array

const roomsArray = [
    {
        name: 'living-room'
    },
    {
        name: 'kitchen'
    },
    {
        name: 'bedroom'
    },
    {
        name: 'bathroom'
    },
    {
        name: 'dining-room'
    },
    {
        name: 'study'
    },
    {
        name: 'library'
    },
    {
        name: 'conservatory'
    },
    {
        name: 'ballroom'
    },
    {
        name: 'billiard-room'
    },
    {
        name: 'lounge'
    },
    {
        name: 'hall'
    },
    {
        name: 'cellar'
    },
    {
        name: 'attic'
    },
    {
        name: 'garage'
    }
];


// Weapons Array

const weaponsArray = [
    {
        name: 'knife',
        weight: 2
    },
    {
        name: 'revolver',
        weight: 5
    },
    {
        name: 'lead pipe',
        weight: 4
    },
    {
        name: 'candlestick',
        weight: 3
    },
    {
        name: 'wrench',
        weight: 3.5
    },
    {
        name: 'rope',
        weight: 1.5
    },
    {
        name: 'poison',
        weight: 0.5
    },
    {
        name: 'bat',
        weight: 3.2
    },
    {
        name: 'trophy',
        weight: 4.5
    }
];



// ITERATION 2

function selectRandom(arr) {
    if (arr.length === 0){
        return undefined;
    }

    const randNum = Math.floor(Math.random() * arr.length);

    return arr[randNum];

}

function pickMystery() {
  
    const suspect = selectRandom(suspectsArray);
    const weapon = selectRandom(weaponsArray);
    const room = selectRandom(roomsArray);
  
    return {
      suspect,
      weapon,
      room,
    };
  }


// ITERATION 3

function revealMystery(envelope) {

    const { suspect, weapon, room } = envelope;

    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}
