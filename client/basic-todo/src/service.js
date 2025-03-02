import axios from "axios";

export function getTodoResponse (){
    return axios({
        method: "get",
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "http://localhost:5000/api/get-todo-details",
      })
        .then(function (response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          throw error;
        })
}

export function postTodoResponse (body){
    return axios({
        method: "post",
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "http://localhost:5000/api/add-todo-details",
        data: body,
      })
        .then(function (response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          throw error;
        })
}

export function patchTodoResponse (id,body){
    return axios({
        method: "patch",
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: `http://localhost:5000/api/update-todo-details/${id}`,
        data: body,
      })
        .then(function (response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          throw error;
        })
}

export function deleteTodoResponse (id){
    return axios({
        method: "delete",
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: `http://localhost:5000/api/delete-todo-details/${id}`
      })
        .then(function (response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          throw error;
        })
}