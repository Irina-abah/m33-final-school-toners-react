// import {BASE_URL} from '../utils/constants';

export class MainApi {
  constructor({address, headers}) {
    this._address = address;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(`Error ${res.status}`)
  }

  getSchools() {
    return fetch(`${this._address}/schools/all`, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  getUserData(user) {
    return fetch(`${this._address}/users/profile/${user}`, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(res => {
      return this._checkResponse(res)
    })
  }

  changeUserData(user, data) {
    return fetch(`${this._address}/users/profile/${user}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  changeToner(toner, data) {
    return fetch(`${this._address}/toners/${toner}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        quantity: data.quantity
      })
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  getToners() {
    return fetch(`${this._address}/toners`, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

}

const mainApi = new MainApi({
  address: "https://m33-final-school-toners-api.herokuapp.com",
  // address: "http://localhost:3005",
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json"
  }
});

export default mainApi;