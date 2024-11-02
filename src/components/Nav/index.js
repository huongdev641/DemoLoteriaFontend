import ButtonLanguage from './ButtonLanguage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormLogin from './FormLogin';
import { use } from 'i18next';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, setToken } from '../../services/localStorageService';

import Tippy from '@tippyjs/react/headless';
import UserPopper from './UserPopper';

function Nav() {
    const { t, i18n } = useTranslation();

    //const [language, setLanguage] = useState(false);
    const [show, setShow] = useState(true);
    const [showLogin, setShowLogin] = useState(false);

    const [visible, setVisible] = useState(false);

    const handleShowLogin = () => {
        const menuToggle = document.getElementById('login-toggle');
        setShowLogin(true);
        if (showLogin) {
            window.scrollTo({ top: 0 });
            menuToggle.classList.remove('hidden');
            const menuChildToggle = document.getElementById('loginChild-toggle');
            menuChildToggle.classList.remove('animate-slideUp');
            menuChildToggle.classList.add('animate-slideDown');
            const app = document.body;
            app.classList.add('overflow-hidden');
        }
    };
    const handleCloseMenu = () => {
        const menuToggle = document.getElementById('menu-toggle');
        const app = document.body;
        app.classList.remove('overflow-hidden');

        setShow(!show);
        menuToggle.classList.toggle('hidden');
    };
    const [user, setUser] = useState({});
    const isEmpty = (obj) => Object.keys(obj).length === 0;
    const navigate = useNavigate();

    const getUserDetails = async (accessToken) => {
        const response = await fetch('http://localhost:8080/user/myInfo', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`, // Set Authorization header
            },
        });

        const data = await response.json();

        console.log(data);

        setUser(data.result);
    };

    useEffect(() => {
        const accessToken = getToken();

        if (!accessToken) {
            navigate('');
        } else {
            getUserDetails(accessToken);
        }
    }, [navigate]);

    return (
        <div className="w-full">
            <nav className="flex h-16 lg:h-24 w-full border-b-2 lg:px-20 px-10 shadow-current shadow-gray-800 justify-between fixed bg-white">
                <div className="flex ">
                    <div className="pt-2 mr-8">
                        <img
                            className="w-12 h-12 lg:w-[5rem] lg:h-[5rem]"
                            src="https://www.lotteria.vn/grs-static/images/lotteria_logo.svg"
                            alt=""
                        />
                    </div>

                    <ul id="menuToggle" className="hidden lg:flex lg:items-center lg:gap-7">
                        <li className="headerItemLeft headerItemLeftHover">bestseller</li>
                        <li className="headerItemLeft headerItemLeftHover">{t('order')}</li>
                        <li className="headerItemLeft headerItemLeftHover">{t('promotion')}</li>
                        <li className="headerItemLeft headerItemLeftHover">{t('store')}</li>
                    </ul>
                </div>
                <div className="pt-4 relative">
                    <div className="lg:flex lg:gap-5 lg:justify-center lg:items-start lg:pb-1 hidden">
                        {show && <ButtonLanguage />}

                        <div className="headerRightButton bg-red-400 text-white">
                            <img src="https://www.lotteria.vn/grs-static/images/logo-l.svg" alt="" />
                            Download App
                        </div>
                    </div>
                    <div className="flex gap-4 lg:gap-8 lg:absolute lg:top-12">
                        <div className="headerRightIcon ">
                            <svg
                                className="size-8 font-thin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                        </div>
                        <Tippy
                            visible={isEmpty(user) && visible}
                            interactive
                            trigger="click"
                            onClickOutside={() => setVisible(false)}
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <UserPopper />
                                </div>
                            )}
                        >
                            <div className="headerRightIcon" onClick={() => setVisible(!visible)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                </svg>
                            </div>
                        </Tippy>
                        <div
                            className="headerRightIcon"
                            onClick={(e) => {
                                handleShowLogin();
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                />
                            </svg>
                        </div>
                        <div
                            className="headerRightIcon"
                            onClick={(e) => {
                                if (isEmpty(user)) {
                                    handleShowLogin();
                                } else {
                                    navigate('/cart');
                                }
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </div>
                        <div
                            className="lg:hidden flex items-center size-12"
                            onClick={(e) => {
                                window.scrollTo({ top: 0 });
                                const menuToggle = document.getElementById('menu-toggle');
                                const app = document.body;
                                app.classList.add('overflow-hidden');
                                setShow(!show);
                                menuToggle.classList.toggle('hidden');
                            }}
                        >
                            <svg
                                id="tqd-toggle-top-menu-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
            <div
                id="menu-toggle"
                className="lg:hidden w-full h-full pl-4 bg-white absolute left-0 hidden animate-slideLeft z-50"
            >
                <div className="flex justify-between items-center">
                    <div className="mr-8">
                        <img
                            className="w-[5rem] h-[5rem] rounded-b-md"
                            src="https://www.lotteria.vn/grs-static/images/lotteria_logo.svg"
                            alt=""
                        />
                    </div>

                    <div className="flex gap-2 mr-8">
                        <ButtonLanguage />
                        <svg
                            onClick={() => {
                                handleCloseMenu();
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div>
                    <ul className="lg:flex lg:items-center lg:gap-7">
                        <li className="py-4 uppercase pt-8 text-gray-700 text-base font-normal">bestseller</li>
                        <hr />
                        <li className="py-4 text-gray-700 text-base font-normal">{t('order')}</li>
                        <hr />
                        <li className="py-4 text-gray-700 text-base font-normal">{t('promotion')}</li>
                        <hr />
                        <li className="py-4 text-gray-700 text-base font-normal">{t('store')}</li>
                        <hr />
                    </ul>
                </div>
            </div>
            <FormLogin />
        </div>
    );
}

export default Nav;
