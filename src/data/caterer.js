import faker from 'faker'

export const Catererlist = Array(8).fill({}).map((value, index) => {
    return {
        id: faker.random.uuid(),
        businessName: faker.company.companyName(),
        contactPerson: faker.name.findName(),
        number: "07035994817",
        email: faker.internet.email(),
        status: 'active'
    };
});
