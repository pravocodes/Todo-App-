import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.center}>

    
    <div className={styles.Contact}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      <form className={styles.ContactForm}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <label ><input type="submit" value="Submit" /></label>
        
      </form>
    </div>
    </div>
  )
}

export default Contact;
