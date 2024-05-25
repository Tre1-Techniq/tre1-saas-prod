import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function JoinForm() {
  const [state, handleSubmit] = useForm("mqkrljkk");
  if (state.succeeded) {
      return (<div>
                <i className="fa-light fa-square-check"></i>
                <p className="banner-social-text">Thanks. We&apos;ll Be In Touch!</p>
            </div>)
  }
  return (
    <div className="footer__single-form"> 
        <form onSubmit={handleSubmit}>
            <div className="input-email">
                <input
                    type="email"
                    name="join-email"
                    id="joinEmail"
                    placeholder="Enter Your Email"
                    required
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <button type="submit" className="subscribe">
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </form>
    </div>
  );
}

export default JoinForm;