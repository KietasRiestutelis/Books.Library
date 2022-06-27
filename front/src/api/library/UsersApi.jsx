import axiosUser from "../apiUsers";
import swal from "sweetalert";

//USER

export async function getAllUsersData() {
  const res = await axiosUser.get("/");
  return res;
}
export async function getUserById(id) {
  const res = await axiosUser.get(`/${id}`);
  return res;
}
export async function createUser(data) {
  const res = await axiosUser.post("/register", JSON.stringify(data));
  return res;
}

export async function getEmail(email) {
  const res = await axiosUser.get(`/email?email=${email}`);

  return res.data.data.users;
}

export async function loginUser(data) {
  const res = await axiosUser.post(
    `/login?email=${data.email}&password=${data.password}`,
    JSON.stringify(data)
  );
  return res;
}

//FILMS

export async function getAllUserBooks(id) {
  const res = await axiosUser.get(`/${id}/books`);
  return res;
}

export async function createUserBook(id, data) {
  const response = await axiosUser
    .post(`/${id}/books/`, JSON.stringify(data))
    .then((result) => {
      swal({
        text: "Knyga pridėta!",
        button: "Puiku",
        icon: "success",
        timer: 2000,
      });
    })
    .catch((error) => {
      swal({
        text: "Klaida!",
        icon: "error",
        button: "Gerai",
        timer: 2000,
      });
    });

  return response;
}

export async function findBookAndUpdate(data, id, subID) {
  const response = await axiosUser
    .patch(`/${id}/books/upd/${subID}`, JSON.stringify(data))
    .then((result) => {
      swal({
        text: "Atnaujinta!",
        icon: "success",
        button: "Gerai",
        timer: 2000,
      });
    })
    .catch((error) => {
      swal({
        text: "Klaida!",
        icon: "error",
        button: "Gerai",
        timer: 2000,
      });
    });

  return response;
}

export async function findBookAndDelete(id, subID) {
  const response = await axiosUser
    .patch(`/${id}/books/dlt/${subID}`)
    .then((result) => {
      swal({
        text: "Ištrinta!",
        icon: "success",
        button: "Gerai",
        timer: 2000,
      });
    })
    .catch((error) => {
      swal({
        text: "Klaida!",
        icon: "error",
        button: "Gerai",
        timer: 2000,
      });
    });
}
