export function addData({ city, data }) {
  return {
    type: "ADD_DATA",
    city,
    data
  };
}

export function deleteData({ id }) {
  return {
    type: "DELETE_DATA",
    id
  };
}
