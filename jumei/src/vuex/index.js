import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	films: null,
	message: "hello world",
	data1:null,
}

const mutations = {
	setFilms: (state, filmsData)=>{
		state.films = filmsData;
	},
	setData:(state,data)=>{
		state.data1 = data;
	}
}

const actions = {
	setFilms: ({commit}, filmsData)=>{
		commit('setFilms', filmsData)
	},
	setData:({commit},data)=>{
		commit('setData',data);
	}
}

const getters = {
	getTop3: function(state) {
		return state.films.slice(0, 3);
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})