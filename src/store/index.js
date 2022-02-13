import { createStore } from 'vuex'
import { faker } from "@faker-js/faker";
import _ from "lodash";

export default createStore({
    state: () => ({
        users: [],
        user: [],
        counter: 0,
        history: [0],
        isLoading: false
    }),
    mutations: {
        addToCounter(state, payload) {
            state.counter += payload
            state.history.push(state.counter)
        },
        subtractFromCounter(state, payload) {
            state.counter -= payload
            state.history.push(state.counter)
        },
        setUsers(state, value) {
            state.users = value
        },
        setLoading(state, bool) {
            state.isLoading = bool
        },
        setUser(state) {
            state.user = faker.helpers.createCard()
        },

    },
    getters: {
        activeIndexes(state) {
            return (payload) => {
                let indexes = []
                state.history.forEach((number, index) => {
                    if (number === payload) {
                        indexes.push(index)
                    }
                })
                return indexes
            }
        }
    },
    actions: {
        async addRandomNumber({ commit }) {
            const res = await fetch('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
            const data = await res.json()
            commit('addToCounter', data)


        },
        async generateData({ commit }) {
            faker.seed(2)
            // const randomCard = faker.helpers.createCard()
            // const range = _.range(5, 101)
            try {
                commit('setLoading', true)
                const data = await new Promise((resolve, reject) => {
                    setTimeout(() =>
                        resolve({
                            people: _.times(5, (n) => {
                                return {
                                    id: n + 1,
                                    name: faker.name.findName(),
                                    avatar: faker.image.avatar(),
                                    phone: faker.phone.phoneNumber(),
                                    email: faker.internet.email(),
                                    department: _.sample(['Customer Support', 'Engineering', 'Sales'])
                                }
                            })
                        }), 1000)
                })
                commit('setUsers', data)
                commit('setUser')
            } catch (error) {
                alert(error)
            }
            finally {
                commit('setLoading', false)
            }

        }
    },
    modules: {}
})