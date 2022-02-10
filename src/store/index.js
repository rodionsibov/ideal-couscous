import { createStore } from 'vuex'
import { faker } from "@faker-js/faker";
import _ from "lodash";

export default createStore({
    state: () => ({
        users: [],
        isLoading: false
    }),
    mutations: {
        setUsers(state, value) {
            state.users = value
        },
        setLoading(state, bool) {
            state.isLoading = bool
        },
    },
    getters: {},
    actions: {
        async generateData({ commit }) {
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
                        }), 3000)
                })
                commit('setUsers', data)
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