import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
    const containerRef = useRef(null);
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        const result = await axios.get('http://localhost:8080/category', {
            validateStatus: () => true,
        });
        setCategory(result.data.result || []); // Đảm bảo category là mảng
    };

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const childWidth = container.children[0]?.getBoundingClientRect().width || 0;
            const scrollAmount = childWidth * visibleIndex;
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    }, [visibleIndex]);

    const handleDotClick = (index) => {
        setVisibleIndex(index);
    };

    const [hiddenCount, setHiddenCount] = useState(0);
    const calculateHiddenCount = () => {
        const container = containerRef.current;
        const children = container?.children || [];
        let count = 0;

        Array.from(children).forEach((child) => {
            const rect = child.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            if (rect.right > containerRect.right || rect.left < containerRect.left) {
                count++;
            }
        });
        setHiddenCount(count);
    };

    useEffect(() => {
        calculateHiddenCount();
        window.addEventListener('resize', calculateHiddenCount);
        return () => {
            window.removeEventListener('resize', calculateHiddenCount);
        };
    }, [category]); // Thêm dependency category nếu cần

    return (
        <div className="py-10">
            <div
                ref={containerRef}
                className="flex gap-4 mx-10 md:mx-20 overflow-x-hidden whitespace-nowrap scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
            >
                {category.map((ca, index) => (
                    <div key={index} className="flex-none">
                        <span>
                            <img className="w-24 h-24 rounded-lg" src={ca.image} alt={`Item ${index + 1}`} />
                        </span>
                        <span className="text-gray-950 font-medium items-center">{ca.categoryName}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
                {Array(hiddenCount + 1)
                    .fill(null)
                    .map((_, index) => (
                        <span
                            key={index}
                            className={`block w-3 h-3 rounded-full ${
                                visibleIndex === index ? 'bg-red-600' : 'bg-red-200'
                            } cursor-pointer`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Category;
