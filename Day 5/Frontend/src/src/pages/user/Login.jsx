import React from "react";
import { useNavigate } from "react-router-dom";
import * as Components from '../../components/user/Components';

function Login() {
    const [signIn, toggle] = React.useState(true);
    const navigate = useNavigate(); 

    const handleSignIn = (event) => {
        event.preventDefault(); 
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

       
        const adminEmail = 'admin@gmail.com';
        const adminPassword = '12345';

    
        if (email === adminEmail && password === adminPassword) {
           
            navigate("/dashboard");
        } else {
            
            navigate("/lander");
        }
    };

    return (
        <Components.Container>
            {signIn ? (
                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleSignIn}>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input name='email' type='email' placeholder='Email' />
                        <Components.Input name='password' type='password' placeholder='Password' />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button type="submit">Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
            ) : (
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>
            )}

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
                            Sign Up
                        </Components.GhostButton> 
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    );
}

export default Login;
