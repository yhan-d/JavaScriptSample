const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software Developer',
    age: 31,
    website:'https://oprea.rocks'
};

console.log(adrian)

const bill = {
    ...adrian,
    fullName :'Bill Gates',
    website : 'https://microsoft.com',
    company : 'Microsoft' 
};

console.log(bill)