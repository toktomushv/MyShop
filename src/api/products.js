import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/products"

export const getAllProducts = createAsyncThunk(
	"getProducts",
	async(data, {rejectWithValue}) => {
		try{
				const res = await axios(API_URL, data);
				return res.data;
		} catch(err) {
				return rejectWithValue(err.message)
		}
	}
)

export const addNewProduct = createAsyncThunk(
	"addProduct",
	async(newProduct, {rejectWithValue}) => {
		try {
			const res = await axios.post(API_URL, newProduct)
			return res.data
		} catch(err) {
			return rejectWithValue(err.message)
		}
	}
);

export const getProduct = createAsyncThunk(
	"getProduct",
	async(id, {rejectWithValue}) => {
		try{
			const res = await axios(`${API_URL}/${id}`);
			return res.data
		}catch(err){
			return rejectWithValue(err.message);
		}
	}

)

export const saveEditedProduct = createAsyncThunk(
	"saveEditedProduct",
	async(productEdit, {rejectWithValue}) => {
		try{
			const res = await axios.patch(`${API_URL}/${productEdit.id}`, productEdit)
			return res.data
		}catch(err){
			return rejectWithValue(err.message);
		}
	}
)

export const deleteProduct = createAsyncThunk(
	"deleteProduct",
	async (productId, { rejectWithValue }) => {
	  try {
		const res = await axios.delete(`${API_URL}/${productId}`);
		return res.data;
	  } catch (err) {
		return rejectWithValue(err.message);
	  }
	}
  );
