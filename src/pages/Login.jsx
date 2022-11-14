import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/auth/auth.actions';

const Login = () => {
    const {register, handleSubmit, formState:{errors, isValid}} = useForm();
    const {isLoading, error } = useSelector((state)=>state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const enviar = (formdata) => {
        console.log(formdata)
        dispatch(loginUser(formdata, navigate))
    }
  return (
    <>
    {isLoading ? <p>Cargando</p>  :
    <form onSubmit={handleSubmit(enviar)}>
        <input type="text" {...register('email', {
            required: "El email no puede ser vacio",
            pattern: {
                message: "el email no tiene un formato correcto",
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                }
        })}/>
        {errors.email && <>
            {errors.email.type === "required" && <p>{errors.email.message}</p>}
            {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        </> }
        <input type="password" {...register('password', {
            required: "El password no puede ser vacio",
            pattern: {
                message: "el password tiene que tener mayuscula minucula numero y simbolo",
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
                }
        })}/>
        {errors.password && <>
            {errors.password.type === "required" && <p>{errors.password.message}</p>}
            {errors.password.type === "pattern" && <p>{errors.password.message}</p>}
        </> }
        <button disabled={!isValid}>Enviar</button>
    </form>
    }
    </>
  )
}

export default Login