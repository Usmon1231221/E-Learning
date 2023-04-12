import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiArrowBack } from 'react-icons/bi'
import RightImg from '../../images/LoginBg.png'
import { auth, provider } from '../../config/config'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "./use-flubber.ts";
import { star, heart, hand, plane, lightning, note } from "./paths";


const Container = styled('div')`
    display: flex;
`

const LeftContent = styled('div')`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const RightContent = styled('div')`
    width: 60%;
    height: 1000px;
    background-image: url(${RightImg});
    background-repeat: no-repeat;
    background-size: cover;
`

const Form = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid gray ;
    padding: 2rem 1rem;
`

const Input = styled('input')`
    width: 100%;
    font-size: 16px;
    padding: .5rem .3rem;
`

const Label = styled('label')`
    width: 100%;
    font-size: 20px;
`

const Or = styled('p')`
    margin: -0.9rem;
    background-color: white;
    padding: 0 10px;
`



const GoogleSignIn = styled('button')`
    cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin: 3rem 0;
  padding: 5px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  color: #757575;
  font-size: 25px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
`

const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = [
    "#00cc88",
    "#0099ff",
    "#8855ff",
    "#ff0055",
    "#ee4444",
    "#ffcc00",
    "#00cc88"
];

const Login = ({ setIsAuth }) => {
    const [pathIndex, setPathIndex] = useState(0);
    const progress = useMotionValue(pathIndex);
    const fill = useTransform(progress, paths.map(getIndex), colors);
    const path = useFlubber(progress, paths);

    useEffect(() => {
        const animation = animate(progress, pathIndex, {
            duration: 0.8,
            ease: "easeInOut",
            onComplete: () => {
                if (pathIndex === paths.length - 1) {
                    progress.set(0);
                    setPathIndex(1);
                } else {
                    setPathIndex(pathIndex + 1);
                }
            }
        });

        return () => animation.stop();
    }, [pathIndex]);
    const navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true)
            navigate('/')
        })
    }
    const logInButton = () => {
        navigate('/')
        setIsAuth(true)
    }
    return (
        <Container>
            <LeftContent>
                <svg width="400" height="400">
                    <g transform="translate(10 10) scale(17 17)">
                        <motion.path fill={fill} d={path} />
                    </g>
                </svg>
                <Form>
                    <h1>Sign In</h1>
                    <Label>Email :
                        <Input type='text' placeholder='Email' />
                    </Label>
                    <Label>
                        Password :
                        <Input type='password' placeholder='Password' />
                    </Label>

                    <motion.button
                        animate={{
                            backgroundColor: "orangered",
                            border: 'none',
                            padding: ".3rem .8rem",
                            borderRadius: '6px',
                            color: 'white'
                        }}
                        onClick={logInButton} whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} >Sign In</motion.button>
                </Form>
                <Or>or</Or>
                <GoogleSignIn onClick={signInWithGoogle}>Sign In With Google</GoogleSignIn>
            </LeftContent>
            <RightContent>

            </RightContent>
        </Container>

    )
}

export default Login