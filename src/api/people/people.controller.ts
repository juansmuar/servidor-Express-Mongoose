import { create } from "domain";
import { createPeople, getAllPeople, getByCountry } from "./people.service";

export async function handleGetAllPeople(req, res) {
  try {
    const contacts = await getAllPeople();
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
}

export async function handleCreatePeople(req, res) {
  const data = req.body;
  try {
    const contact = await createPeople(data);
    return res.status(201).json(contact);
  } catch (error) {
    console.log(error)
    return res.status(500)
  }
}

export async function handleGetByCountry(req, res) {
  const country = req.params.country;
  try {
    const contacts = await getByCountry(country.toUpperCase());
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
}