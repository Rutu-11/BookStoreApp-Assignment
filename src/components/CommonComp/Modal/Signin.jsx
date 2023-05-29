import React from 'react'
import './Signin.css'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import {IoBookSharp} from 'react-icons/io'
function Signin({show,item,onClose}) {
    const navigate = useNavigate()
    
    const user = JSON.parse(localStorage.getItem("userDetail")) || [];
   
      const loging = useGoogleLogin({
        onSuccess: async (response) => {
          try {
            const Userdata = await axios.get(
              "https://www.googleapis.com/oauth2/v3/userinfo",
              {
                headers: {
                  Authorization: `Bearer ${response.access_token}`,
                },
              }
            );
            user.push(Userdata.data);
            localStorage.setItem("userDetail", JSON.stringify(user[0]));
            localStorage.setItem("flag", true);
            // dispatch({
            //   type: "LOGIN_SUCCESS",
            //   payload: Userdata.data,
            // });
            console.log(Userdata.data);
            navigate("/");
          } catch {
            console.log("error");
          }
        },
      });
      if(!show)
      {
          return null;
      }
  return (
    <>
       <div className="overlay">
                <div className="overlay-inner" >
                <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    {/* <img style={{height:"50px"}} src={'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'} alt="" /> break */}
                    <div className="inner-box" >
                         <div className="login-div" style={{}}>
                             <h1>Sign In With Google</h1>
                             <h3>Your Credentials are secure with us</h3>
                             <GoogleLoginButton onClick={loging} style={{borderRadius:"50px",padding:"0 20px", width:"70%", margin:"20px auto"}}/>
                             <p >By clicking on sign-up, you agree to Bookstore's's Terms and Conditions of Use.</p>
                             <p>To learn more about how Bookstore collects, uses, shares and protects your personal data, please see Bookstore's Privacy Policy</p>
                         </div>
                         <div>
                         <i class="fa-solid fa-book-open-reader"></i>
                         </div>
                    </div>

                    {/* <h4 className="description">{item.volumeInfo.description}</h4> */}
                </div>
            </div>
    </>
  )
}

export default Signin
