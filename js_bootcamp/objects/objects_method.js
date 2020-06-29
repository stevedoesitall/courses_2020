let restaurant = {
    name: `Steve's Place`,
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        console.log(this);
        if (partySize + this.guestCount > this.guestCapacity) {
            return `Party cannot be accomodated`;
        } else {
            return `Party can be acommodated`;
        }
    }
}

console.log(restaurant.checkAvailability(10));