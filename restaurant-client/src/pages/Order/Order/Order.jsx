import React, { useEffect, useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg';
import { Tabs } from 'antd';
import useMenu from '../../../CustomHooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const [menu] = useMenu();
    const categories = ['salads', 'pizzas', 'soups', 'desserts', 'drinks'];
    const { category } = useParams();
    const navigate = useNavigate();

    // Normalize the category parameter from URL to match categories array
    const normalizedCategory = category?.toLowerCase();
    // console.log(normalizedCategory)

    // Determine the initial tab index based on the category from URL params
    const initialIndex = categories.includes(normalizedCategory)
        ? categories.indexOf(normalizedCategory).toString()
        : '0';

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const onChange = (key) => {
        setTabIndex(key);
        navigate(`/order/${categories[Number(key)]}`);
    };

    // Update tabIndex when URL parameter category changes
    useEffect(() => {
        const newIndex = categories.includes(normalizedCategory)
            ? categories.indexOf(normalizedCategory).toString()
            : '0';
            // console.log(newIndex)
        setTabIndex(newIndex);
    }, [normalizedCategory]);

    const items = [
        { key: '0', label: 'SALAD', children: <OrderTab items={menu.filter(item => item.category === 'salad')} /> },
        { key: '1', label: 'PIZZA', children: <OrderTab items={menu.filter(item => item.category === 'pizza')} /> },
        { key: '2', label: 'SOUPS', children: <OrderTab items={menu.filter(item => item.category === 'soup')} /> },
        { key: '3', label: 'DESSERTS', children: <OrderTab items={menu.filter(item => item.category === 'dessert')} /> },
        { key: '4', label: 'DRINKS', children: <OrderTab items={menu.filter(item => item.category === 'drinks')} /> },
    ];

    return (
        <div className="mb-[4rem]">
            <Helmet>
                <title>Order | Sip & Savory</title>
            </Helmet>
            <Cover img={orderImg} title="OUR SHOP" description="Would you like to try a dish?" />
            <Tabs
                activeKey={tabIndex}
                items={items}
                onChange={onChange}
                className="flex justify-center items-center mx-auto mt-[4rem]"
            />
        </div>
    );
};

export default Order;
