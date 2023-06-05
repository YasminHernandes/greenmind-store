import { faker } from '@faker-js/faker'

export const person = [
  {
    id: 1,
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    img: faker.image.avatar()
  },
  {
    id: 2,
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    img: faker.image.avatar()
  },
  {
    id: 3,
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    img: faker.image.avatar()
  },
  {
    id: 4,
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    img: faker.image.avatar()
  },
]