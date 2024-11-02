import { Children, useEffect, useRef, useState } from 'react';

function Test() {
    const containerRef = useRef(null);
    const [hiddenCount, setHiddenCount] = useState(0);
    const calculateHiddenCount = () => {
        const container = containerRef.current;
        const children = container.children;
        let count = 0;

        Array.from(children).forEach((child) => {
            const rect = child.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Kiểm tra nếu phần tử con bị tràn ra ngoài vùng hiển thị ngang của phần tử chứa
            if (rect.right > containerRect.right || rect.left < containerRect.left) {
                count++;
            }
        });
        setHiddenCount(count);
    };
    useEffect(() => {
        // Tính toán số lượng phần tử bị ẩn khi component render
        calculateHiddenCount();

        // Lắng nghe thay đổi kích thước cửa sổ để tính toán lại số lượng phần tử bị ẩn
        window.addEventListener('resize', calculateHiddenCount);

        // Dọn dẹp sự kiện khi component unmount
        return () => {
            window.removeEventListener('resize', calculateHiddenCount);
        };
    }, []);
    return (
        <>
            <div ref={containerRef} className="flex gap-4 mx-20 overflow-x-hidden">
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
                <div className="flex-none overflow-x-auto">
                    <span>
                        <img
                            className="w-24 h-24 rounded-lg"
                            src="https://www.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg"
                            alt=""
                        />
                    </span>
                    <span className="text-gray-950 font-medium items-center">Bestseller</span>
                </div>
            </div>
            <div>Number of hidden divs: {hiddenCount}</div>
        </>
    );
}

export default Test;
