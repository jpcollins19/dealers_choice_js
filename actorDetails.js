const details = [
  {
    id: 1,
    name: `Chris Pratt`,
    "Date of Birth": `June 21, 1979`,
    "Place of Birth": `Virginia, MN`,
    "Known For": `Guardians of the Galaxy`,
  },
  {
    id: 2,
    name: `Denzel Washington`,
    "Date of Birth": `December 28, 1954`,
    "Place of Birth": `Mount Vernon, NY`,
    "Known For": `Training Day`,
  },
  {
    id: 3,
    name: `Chris Evans`,
    "Date of Birth": `June 13, 1981`,
    "Place of Birth": `Boston, MA`,
    "Known For": `Captain America`,
  },
];

const list = () => {
  return [...details];
};
const find = (id) => {
  const detail = details.find((obj) => obj.id === +id);
  return { ...detail };
};

module.exports = { list, find };
