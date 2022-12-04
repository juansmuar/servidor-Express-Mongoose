import People from "./people.model";

export function getAllPeople() {
  return People.find();
}

export function createPeople(contact) {
  return People.create(contact);
}

export function getByCountry(country) {
  return People.find({country});
}