import { useNavigate } from 'react-router-dom';
import { getToken, setToken } from '../../../services/localStorageService';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
function FormLogin() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackBarOpen(false);
    };
    const handleClick = () => {
        alert(
            'Please refer to Oauth2 series for this implemetation guidelines. https://www.youtube.com/playlist?list=PL2xsxmVse9IbweCh6QKqZhousfEWabSeq',
        );
    };

    useEffect(() => {
        const accessToken = getToken();

        if (accessToken) {
        }
    }, [navigate]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('fdjsfhdls');
        fetch('http://localhost:8080/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({
                phoneNumber: phoneNumber,
                password: password,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('Response body:', data);

                // This code is a commitment between BE and FE
                if (data.code !== 0) {
                    throw new Error(data.message);
                }

                setToken(data.result?.token);

                navigate('/product');
            })
            .catch((error) => {
                setSnackBarMessage(error.message);
                setSnackBarOpen(true);
            });
    };
    return (
        <div
            id="login-toggle"
            className="flex justify-center items-center w-full h-full pl-4 bg-black-50 absolute left-0"
        >
            <div id="loginChild-toggle" className="flex rounded-3xl relative ">
                <div className="px-6 rounded-l-3xl rounded-r-3xl h-[32rem] w-[30rem] md:w-[25rem] md:rounded-r-none bg-white ">
                    <h4 className="text-2xl font-medium text-gray-950 py-6">{t('login')}</h4>
                    <p className="font-medium pb-2">{t('phoneNumber')}</p>
                    <input
                        className="h-10 w-[100%] rounded-md border-red-500 px-3 border"
                        placeholder={t('inputPhoneNumber')}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <p className="font-medium py-2">{t('passWord')}</p>
                    <input
                        className="h-10 w-[100%] rounded-md border-red-500 px-3 border"
                        placeholder={t('inputPassWord')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="text-white text-xl rounded-md my-10 h-10 w-[100%] bg-red-500"
                        onClick={handleSubmit}
                    >
                        {t('login')}
                    </button>
                    <p className="text-red-500 font-medium flex items-center">{t('signin')}</p>
                    <div className="absolute top-4 right-4 bg-red-400 pt-[0.4rem] pl-[0.4rem] rounded-full text-white cursor-pointer hover:bg-gray-950">
                        <svg
                            onClick={(e) => {
                                const menuToggle = document.getElementById('login-toggle');
                                const menuChildToggle = document.getElementById('loginChild-toggle');

                                menuChildToggle.classList.remove('animate-slideDown');
                                menuChildToggle.classList.add('animate-slideUp');
                                const app = document.body;
                                app.classList.remove('overflow-hidden');
                                setTimeout(() => {
                                    menuToggle.classList.add('hidden');
                                }, 500);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 32 32"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img
                        className="h-[32rem] rounded-r-3xl"
                        src="https://www.lotteria.vn/grs-static/images/login-banner.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default FormLogin;
