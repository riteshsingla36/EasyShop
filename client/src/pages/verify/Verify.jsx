import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';
import styles from './verify.module.css';

const Verify = () => {

    const { verifytoken } = useParams();
    const navigate = useNavigate();
    const verifyHandler = (e) => {
      e.preventDefault();
      axios.post(`${baseUrl}/auth/verify`, { verificationCode: verifytoken }).then(res => {
        console.log(res, "res");
        if (!res.data.status) {
          alert(res.data.message);
        }
        else {
          alert("You account has been verified.");
          navigate("/login");
        }
      }).catch(err => {
        alert(err.message);
      })
    }
    return (
        <>
        <div className={styles.verify_box}>
          <h2>Verify Your Account!</h2>
          <form onSubmit={verifyHandler} className={styles.form}>
            <button type='submit'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              VERIFY
            </button>
          </form>
        </div>
      </>
    )
}

export default Verify;