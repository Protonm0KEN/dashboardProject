import { addUser } from "@/app/lib/actions"
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"
//TODO Продолжить видео  с момента 1:20 минут
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="text" placeholder="phone" name="phone"/>
        <select name="isAdmin" id="isAdmin">
          <option value={false}>is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea 
        name="address" 
        rows="16" 
        placeholder="Address...">
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage