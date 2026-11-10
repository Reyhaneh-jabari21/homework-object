let users = {
    ali: {
        name: "Ali",
        balance: 250000,
        isActive: true
    },
    sara: {
        name: "Sara",
        balance: 80000,
        isActive: true
    },
    reza: {
        name: "Reza",
        balance: 150000,
        isActive: false
    },
    mina: {
        name: "Mina",
        balance: 400000,
        isActive: true
    }
};

for (let userId in users) {
    let user = users[userId];

    if (user.isActive === true) {
        user.balance += 100000;
        
        user.receivedGift = true;
    } else {
        user.receivedGift = false;
    }
}
console.log(users);
