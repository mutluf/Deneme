import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React, { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'
import { login } from '../../services/client-services/user-services';
import { LoginType } from '../../types/types';
import { ok } from 'assert';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const data:LoginType ={
            username: username,
            password: password
        }
        console.log(username)
        console.log("giriş denemei")
          await login(data).then((res)=>{
            console.log((res).status)
            if (( res).status === 200) {
                console.log('Giriş başarılı!');
                
                localStorage.setItem('token', 'true');
                
                
                 navigate('/posts');
                 window.location.reload();
                
            } else {
                console.log('Giriş başarısız!');
                navigate('/login');
            }
         });
         
        
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Kullanıcı Adı"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Parola"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
                />
                <ButtonComponent type='submit'>Login</ButtonComponent>
            </form>
        </div>
    );
};

export default Login;
