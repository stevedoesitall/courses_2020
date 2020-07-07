const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach(num => {
        sum += num
    })
    const average = sum / numbers.length
    return `The average of ${thing} is ${average}`
}

console.log(calculateAverage('js class', 50, 90, 100, 100, 100))


const printTeam = (team, coach, ...players) => {
    let playerList = ''
    players.forEach((player, index) => {
        //players.join(',' ' ') --> This would've been cleaner
        index !== players.length - 1 ? playerList += player + ', ' : playerList += player
    })
    return `
        Team: ${team}
        Coach: ${coach}
        Players: ${playerList}
    `
}

console.log(printTeam('Liberty', 'Some Person', 'Larry', 'Monica', 'Shawn'))