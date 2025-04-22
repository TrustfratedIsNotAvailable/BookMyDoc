import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import DoctorContainer from '../DoctorContainer/DoctorContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [doctors, setDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (data && data.length > 0) {
            setDoctors(showAll ? data : data.slice(0, 6));
        }
    }, [data, showAll]);

    const handleToggleDoctors = () => {
        setShowAll((prev) => {
            const next = !prev;
            if (!next) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return next;
        });
    };

    return (
        <>
            <Hero />
            <DoctorContainer
                doctors={doctors}
                showAll={showAll}
                onToggle={handleToggleDoctors}
            />
        </>
    );
};

export default Home;
