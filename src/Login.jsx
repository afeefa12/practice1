import react, { useState} from "react";

function LoginForm(){
    const [formDate, setFormData] = useState({
        email:" ",
        password: ""
    });
    const [errors,setErrors] = useState({});

    const handleChange = (e)=>{
        const handleChange =(e) => {
            setFormData({});


            const[errors,setErrors] = useState({});

            const handleChange = (e) => {
                setFormData({
                    ...FormData,
                        [e.target.name]: e.target.value
                    });
            };
            const validate  = () => {
                const newErrors = {};
                const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

                if(!emailPattern.test(formDate.email)){
                    newErrors.email = "Please eneter a valid email";
                }
                if (formDate.password.trim(FormData.email)){
                    newErrors.password = ""
                }
            }
        }
    }
}