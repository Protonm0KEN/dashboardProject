import { User, Product } from "./models"
import { conncetToDB } from "./utils"

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 3
    try{
        conncetToDB()
        const count = await User.find({username: {$regex: regex}}).count()
        const users = await User.find({username: {$regex: regex}})
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE*(page-1))
        return {count, users}
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch users!")
    }
}
export const fetchUser = async (id) => {
    try{
        conncetToDB()
        const user = await User.findById(id)
        return user
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch users!")
    }
}
export const fetchProduct = async (id) => {
    try{
        conncetToDB()
        const product = await Product.findById(id)
        return product
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch users!")
    }
}
export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 2
    try{
        conncetToDB()
        const count = await Product.find({title: {$regex: regex}}).count()
        const products = await Product.find({title: {$regex: regex}})
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE*(page-1))
        return {count, products}
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch products!")
    }
}