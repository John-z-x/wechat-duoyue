'use strict';

import fetch from 'isomorphic-fetch';
import { RECEIVED_PRODUCT_TYPE, RECEIVED_HOT_NEWS, RECEIVED_PRODUCT_LIST } from '../constants/constants';
import ProductType from '../models/ProductType';
import Product from '../models/Product';
import News from '../models/News';

// 获取商品分类
const receivedProductType = (data) => {
	return {
		type: RECEIVED_PRODUCT_TYPE,
		data
	};
};

export const fetchProductType = () => {
	const data = require("../../assets/MockData/shop/product_type_data.json");
	return dispatch => {
		const productTypes = data.map((json) => {
			return new ProductType(json);
		})
		return dispatch(receivedProductType(productTypes));
	};
};

// 获取热门资讯
const receivedHotNews = (data) => {
	return {
		type: RECEIVED_HOT_NEWS,
		data
	};
};

export const fetchHotNews = (count) => {
	const data = require("../../assets/MockData/shop/hot_news_data.json");
	return dispatch => {
		const hotNews = data.map((json) => {
			return new News(json);
		})
		return dispatch(receivedHotNews(hotNews));
	};
};

// 获取商品列表
const receivedProductList = (data, endPoint) => {
	return {
		type: RECEIVED_PRODUCT_LIST,
		data,
		endPoint: endPoint
	};
};

export const fetchProductList = (endPoint, count) => {
	const data = require("../../assets/MockData/shop/product_list_data.json");
	const productList = data[endPoint].map((json) => {
		return new Product(json);
	})
	return dispatch => {
		return dispatch(receivedProductList(productList, endPoint));
	};
};

