import React from 'react'
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from 'next/image'
import { updateProduct } from '@/app/lib/actions'
import { fetchProduct } from '@/app/lib/data'
const SingleProductPage = async({params}) => {
    const {id} = params
    console.log(id)
    const product = await fetchProduct(id)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={"/noavatar.png"} alt="" fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type="hidden" name="id" value={product.id} />
                    <label>Name</label>
                    <input type="text" name='title' placeholder={product.title} />
                    <label>Price</label>
                    <input type="number" name='price' placeholder={product.price} />
                    <label>Stock</label>
                    <input type="number" name='stock' placeholder={product.stock} />
                    <label>Color</label>
                    <input type="text" name='color' placeholder={product.color} />
                    <label>Size</label>
                    <textarea type="text" name='size' placeholder={product.desc} />
                    <label>Is Admin?</label>
                    <select name="cat" id="isAdmin">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" placeholder='description' rows="10"></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage