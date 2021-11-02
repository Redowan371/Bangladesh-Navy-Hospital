import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import authInitialize from "../components/Login/firebase/firbase.init";
authInitialize()
const useFirebase = () => {
    const [user, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const signInGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            // .then((result) => {
            //     setUsers(result.user);
            // })
            .finally(() => setIsLoading(false));

    }

    // Observer User State Change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            }
            else {
                setUsers({})
            }
            setIsLoading(false)
        })
        return () => unSubscribed;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const handleEmailLogin = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }

        if (isLogin) {
            processLogin(email, password)
        }
        else {
            createNewUser(email, password)
        }

    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUsers(user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUsers(user)
                setError('')
            })
            .catch((error => {
                setError(error.message);
            }))
    }

    return {
        user,
        isLoading,
        signInGoogle,
        logOut,
        handleEmailLogin,
        handleEmailChange,
        handlePasswordChange,
        error,
        password,
    }
};

export default useFirebase;