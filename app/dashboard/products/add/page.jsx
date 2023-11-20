import { addProduct } from "@/app/lib/actions"
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css"
//TODO Продолжить видео  с момента 1:20 минут
const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="category" id="">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" placeholder="price" id="" />
        <input type="number" name="stock" placeholder="stock" id="" />
        <input type="text" name="color" placeholder="color" id="" />
        <input type="text" name="size" placeholder="size" id="" />
        <textarea name="desc" id="desc" rows="16" placeholder="Description..."></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage