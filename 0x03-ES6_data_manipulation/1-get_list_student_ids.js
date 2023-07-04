/* eslint-disable no-unused-vars */
export default function getListStudentIds(obj) {
  const arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const mappedArr = arr.map((element) => element.id);
  if (Array.isArray(obj)) {
    return mappedArr;
  }
  return [];
}
