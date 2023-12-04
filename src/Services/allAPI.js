import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commonApi";


// ALL FOODS

// get all Foods
export const getAllfoods = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/foods`,"")
}

// Post all Foods
export const addFood = async (food)=>{
    return await commonAPI("POST",`${BASE_URL}/foods`,food)
}

//get a single food from /foods 
export const getAFood =  async(id)=>{
    return await commonAPI("GET",`${BASE_URL}/foods/${id}`,"")
}

//delete a single from foods
export const deleteAFood =  async(id)=>{
    return await commonAPI("DELETE",`${BASE_URL}/foods/${id}`,{})
}


// CATEGORIES

// get all Categories
export const getAllCategories = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
}

// get a food from category
export const getCategoryFood = async (id)=>{
    return await commonAPI("GET",`${BASE_URL}/categories/${id}`,"")
}

// Add a Category 
export const addCategory = async(body)=>{
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

// Add a food to categories 
export const addFoodCategory = async(id,body)=>{
    return await commonAPI("PUT",`${BASE_URL}/categories/${id}`,body)
}

//delete a single from categories
export const deleteAFoodcategories =  async(id)=>{
    return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
}


// CART

// Insert a food to cart
export const addFoodCart = async(food)=>{
    return await commonAPI("POST",`${BASE_URL}/cart`,food)
}

// get all foods from cart
export const getCart = async()=>{
    return await commonAPI("GET",`${BASE_URL}/cart`,"")
}

// delete a food from cart 
export const deleteACart = async(id)=>{
    return await commonAPI("DELETE",`${BASE_URL}/cart/${id}`,{})
}





    