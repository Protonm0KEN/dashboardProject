import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { conncetToDB } from "./utils"
import { redirect } from "next/navigation"
export const addUser = async (formData) => {
    "use server"
    const { 
        username, 
        password, 
        email, 
        phone, 
        address, 
        isAdmin, 
        isActive 
    } = Object.fromEntries(formData)

    try {
        conncetToDB()
        const bcrypt = require('bcrypt');
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            username, 
            password: hashedPassword, 
            email, 
            phone, 
            address, 
            isAdmin, 
            isActive
        })
        await newUser.save()
    } catch (err) {
        console.log(err)
        throw new Error("Failed to create new user")
    }

    revalidatePath("/dashboard/users")
    revalidatePath("/dashboard/users")
}
export const addProduct = async (formData) => {
    "use server"
    const { 
        title,
        desc,
        price,
        stock,
        color,
        size 
    } = Object.fromEntries(formData)

    try {
        conncetToDB()
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size 
        })
        await newProduct.save()
    } catch (err) {
        console.log(err)
        throw new Error("Failed to create new Product")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}
export const deleteProduct = async (formData) => {
    "use server"
    const { 
        id
    } = Object.fromEntries(formData)

    try {
        conncetToDB()
        await Product.findByIdAndDelete(id)
    } catch (err) {
        console.log(err)
        throw new Error("Failed to delete Product")
    }
    revalidatePath("/dashboard/products")
}
export const deleteUser= async (formData) => {
    "use server"
    const { 
        id
    } = Object.fromEntries(formData)

    try {
        conncetToDB()
        await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err)
        throw new Error("Failed to  delete User")
    }
    revalidatePath("/dashboard/users")
}
export const updateUser = async (formData) => {
    "use server"
    const { 
        id,
        username, 
        password, 
        email, 
        phone, 
        address, 
        isAdmin, 
        isActive 
    } = Object.fromEntries(formData)

    try {
        conncetToDB()
        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] == "" || undefined) && delete updateFields[key])
        await User.findByIdAndUpdate(id, updateFields)
    } catch (err) {
        console.log(err)
        throw new Error("Failed to update new user")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}
export const updateProduct = async (formData) => {
    "use server"
    const { 
        title,
        desc,
        price,
        stock,
        color,
        size,
        id
    } = Object.fromEntries(formData)

    try {
        conncetToDB()
        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size,
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] == "" || undefined) && delete updateFields[key])
        await Product.findByIdAndUpdate(id, updateFields)
    } catch (err) {
        console.log(err)
        throw new Error("Failed to update product")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}