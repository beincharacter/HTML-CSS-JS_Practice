// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '44302e75eemsh41ff8d6de0157a1p181060jsn5fed13fff44e',
// 		'X-RapidAPI-Host': 'redline-redline-zipcode.p.rapidapi.com'
// 	}
// };

// fetch(`https://redline-redline-zipcode.p.rapidapi.com/rest/multi-info.json/${08047}/degrees`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


class Car {
    constructor(name, job) {
        this.name = name,
        this.__job = job
    }

    #getDetails() {
        console.log(this.name + ' ' + this._job + ' ' );
    }
}
let obj1 = new Car('shubham', 'Site Enggineer');
obj1.getDetails();
class NewCar extends Car {
    constructor(name, job, newjob) {
        super(name, job)
        this.newjob = newjob
    }
    getDetails()
    getNewJob() {
        console.log(this.name + ' ' + this.__job + ' but now  ' + this.newjob);
    }
}

let obj2 = new NewCar('shubham', 'Site Enggineer', 'Developer Job');
obj2.getNewJob();