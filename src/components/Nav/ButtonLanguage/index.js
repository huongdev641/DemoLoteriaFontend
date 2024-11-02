import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
function ButtonLanguage() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [language, setLanguage] = useState(false);

    return (
        <button
            onClick={(e) => {
                const toggleIcon = document.getElementById('dropdownDefaultButton');
                const toggle = document.getElementById('dropdown');
                if (toggleIcon.contains(e.target)) {
                    toggle.classList.toggle('hidden');
                } else {
                    toggle.classList.add('hidden');
                }
            }}
            className="flex flex-col"
        >
            <div id="dropdownDefaultButton">
                {language ? (
                    <div
                        className="headerRightButton"
                        onClick={() => {
                            changeLanguage('vi');
                        }}
                    >
                        <img
                            className="size-5 ml-2"
                            src="https://www.lotteria.vn/grs-static/images/icon-vn.svg"
                            alt=""
                        />
                        TiếngViệt
                        <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                ) : (
                    <div className="headerRightButton" onClick={() => changeLanguage('en')}>
                        <img
                            className="size-5 ml-2"
                            src="https://www.lotteria.vn/grs-static/images/icon-en.svg"
                            alt=""
                        />
                        English
                        <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                )}
            </div>
            <div id="dropdown" className="hidden z-20 ">
                {language ? (
                    <div
                        className="headerRightButton"
                        onClick={() => {
                            changeLanguage('en');
                            setLanguage(!language);
                        }}
                    >
                        <img
                            className="size-5 ml-2"
                            src="https://www.lotteria.vn/grs-static/images/icon-en.svg"
                            alt=""
                        />
                        English
                    </div>
                ) : (
                    <div
                        className="headerRightButton"
                        onClick={() => {
                            changeLanguage('vi');
                            setLanguage(!language);
                        }}
                    >
                        <img
                            className="size-5 ml-2"
                            src="https://www.lotteria.vn/grs-static/images/icon-vn.svg"
                            alt=""
                        />
                        TiếngViệt
                    </div>
                )}
            </div>
        </button>
    );
}

export default ButtonLanguage;
