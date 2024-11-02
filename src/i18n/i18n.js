import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            order: 'Order now',
            promotion: 'Promotion',
            store: 'Store',
            login: 'Login',
            phoneNumber: 'Phone number',
            inputPhoneNumber: 'Enter your phone number',
            passWord: 'Password',
            inputPassWord: 'Enter your pass word',
            signin: 'Sign in',
        },
    },
    vi: {
        translation: {
            order: 'Đặt hàng',
            promotion: 'Khuyến mãi',
            store: 'Cửa hàng',
            login: 'Đăng nhập',
            phoneNumber: 'Số điện thoại',
            inputPhoneNumber: 'Nhập số điện thoại của bạn',
            passWord: 'Mật khẩu',
            inputPassWord: 'Nhập mật khẩu của bạn',
            signin: 'Đăng ký tài khoản',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'vi',
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
