import React, { useRef, useState } from "react";
import * as Components from '../../components/user/Components'
import { useUserContext } from "../../context/userContext";

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const nameRef = useRef();
  const { signInUser, registerUser, forgotPassword } = useUserContext();
  const [signIn, toggle] = useState(true);

  const onLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  const onRegister = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) {
      registerUser(email, password, name);
      // Clear input fields after submission
      emailRef.current.value = "";
      nameRef.current.value = "";
      psdRef.current.value = "";
    }
  };

  return (
    <div className="login" style={
        { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }
      }
      >
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form onSubmit={onRegister}>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name' ref={nameRef}/>
                    <Components.Input type='email' placeholder='Email' ref={emailRef}/>
                    <Components.Input type='password' placeholder='Password' ref={psdRef} />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form onSubmit={onLogin}>
                     <Components.Title>Sign in</Components.Title>
                     <Components.Input type='email' placeholder='Email' ref={emailRef} />
                     <Components.Input type='password' placeholder='Password' ref={psdRef}/>
                     <Components.Anchor onClick={forgotPasswordHandler}>Forgot your password?</Components.Anchor>
                     <Components.Button>Sigin In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Welcome Back!</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        Sign In
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                      <Components.Title>Hello, Friend!</Components.Title>
                      <Components.Paragraph>
                          Enter Your personal details and start journey with us
                      </Components.Paragraph>
                          <Components.GhostButton onClick={() => toggle(false)}>
                              Sigin Up
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
        </div>
  );
};

export default Login;
