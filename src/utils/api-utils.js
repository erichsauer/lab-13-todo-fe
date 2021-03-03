import request from "superagent";

const URL = 'http://localhost:3000'

export async function createNewUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })
    return response.body
}

export async function logUserIn(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })
    return response.body
}

export async function getTodos(token) {
    const response =  await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)
    
    return response.body
}

export async function postNewTodo(todo, token) {
    const response =  await request
        .post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({ todo })
    
    return response.body
}

export async function updateTodoAsCompleted(todoId, token) {
    const response =  await request
        .put(`${URL}/api/todos/${todoId}`)
        .set('Authorization', token)
    
    return response.body
}
