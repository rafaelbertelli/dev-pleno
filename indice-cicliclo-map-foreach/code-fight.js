function metroCard(lastNumberOfDays) {
	const months = [
		31, // jan
		28, // feb
		31, // mar
		30, // apr
		31, // may
 		30, // jun
		31, // jul
		31, // aug
		30, // sep
		31, // oct
		30, // nov
		31  // dec
	]

	const days = {};
	console.log(`${lastNumberOfDays} ==============================`);
	months.forEach((elem, index) => {
		if(elem === lastNumberOfDays) {
			days[months[(index+1)%12]] = 1;
		}
	})

	// console.log(days);

	return Object
					.keys(days)
					.map( elem => parseInt(elem) )
					.sort();
	
}

console.log(metroCard(28));
console.log(metroCard(30));
console.log(metroCard(31));