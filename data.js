
const insuranceProviders = [
{
    name: "ABC Insurance",
    types: ["home", "vehicle"],
    ageLimit: 50,
    coverage: {
    home: {
        basic: {
        coverageAmount: 50000,
        premium: 2000,
        },
        premium: {
        coverageAmount: 100000,
        premium: 3500,
        },
        platinum: {
        coverageAmount: 150000,
        premium: 5000,
        },
    },
    vehicle: {
        basic: {
        coverageAmount: 50000,
        premium: 3000,
        },
        premium: {
        coverageAmount: 100000,
        premium: 5000,
        },
        platinum: {
        coverageAmount: 150000,
        premium: 8000,
        },
    },
    },
},
{
    name: "DEF Insurance",
    types: ["health", "family"],
    ageLimit: 60,
    coverage: {
    health: {
        basic: {
        coverageAmount: 50000,
        premium: 5000,
        },
        premium: {
        coverageAmount: 100000,
        premium: 8000,
        },
        platinum: {
        coverageAmount: 150000,
        premium: 12000,
        },
    },
    family: {
        basic: {
        coverageAmount: 50000,
        premium: 7000,
        },
        premium: {
        coverageAmount: 100000,
        premium: 10000,
        },
        platinum: {
        coverageAmount: 150000,
        premium: 15000,
        },
    },
    },
},
// Add more insurance providers here...
];
      