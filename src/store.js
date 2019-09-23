import Vue from 'vue';
import Vuex from 'vuex';
import goods from './data/goods';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		goods: [],
		cartGoods: [],
		subtotal: 0,
		quantityTotal: 0
	},
	mutations: {
		initGoods: (state, goods) => {
			state.goods = goods;
		},
		buy: (state, order) => {
			const record = state.cartGoods.find((el) => el.id === order.id);
			if (record) {
				record.quantity += order.quantity;
			} else {
				state.cartGoods.push(order);
			}
			state.subtotal += order.price * order.quantity;
			state.quantityTotal += order.quantity;
		},
		delete: (state, no) => {
			const index = state.cartGoods.findIndex((el) => el.id === no.id);
			state.cartGoods.splice(index, 1);
			state.subtotal -= no.price * no.quantity;
			state.quantityTotal -= no.quantity;
		},
		update: (state, change) => {
			const record = state.cartGoods.find((el) => el.id === change.id);
			const oldQuantity = record.quantity;
			const newQuantity = change.quantity;
			record.quantity = newQuantity;
			state.subtotal += record.price * (newQuantity - oldQuantity);
			state.quantityTotal += newQuantity - oldQuantity;
		},
		clear: (state) => {
			state.cartGoods = [];
			state.quantityTotal = 0;
			state.subtotal = 0;
		}
	},
	actions: {
		initGoods: ({ commit }) => {
			commit('initGoods', goods);
		},
		buy: ({ commit }, order) => {
			commit('buy', order);
		},
		delete: ({ commit }, no) => {
			commit('delete', no);
		},
		update: ({ commit }, change) => {
			commit('update', change);
		},
		clear: ({ commit }) => {
			commit('clear');
		}
	},
	getters: {
		goods: (state) => {
			return state.goods;
		},
		cartGoods: (state) => {
			return state.cartGoods;
		},
		subtotal: (state) => {
			return state.subtotal;
		},
		quantityTotal: (state) => {
			return state.quantityTotal;
		}
	}
});
