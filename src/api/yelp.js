import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer EXYu2PNt7qFFNhY50-NBb4G51A_8cpjwq50J8JE79tqftGH79VCI07imQB4ZbupHmSqn1SgescuLhPiatJg3eXVdL5oIK4LvflUfRqMT2zGBxwR9AhIiz9JctisiYXYx'
    }
})