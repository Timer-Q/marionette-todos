/*global define */
define([
	'backbone',
	'localStorage'
], function (Backbone) {
	'use strict';

	return Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('todos-backbone'),

		defaults: {
			title: '',
			completed: false,
			created: 0
		},

		initialize: function () {
			if (this.isNew()) {  // isNew() 是否保存到服务器 如果没有id 则为true
				this.set('created', Date.now());
			}
		},

		toggle: function () {
			return this.set('completed', !this.get('completed'));
		}
	});
});
