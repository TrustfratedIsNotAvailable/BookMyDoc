import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import DoctorContainer from '../DoctorContainer/DoctorContainer';
import { useLoaderData } from 'react-router';
import StatsSection from '../../Components/StatsSection/StatsSection';

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

    const handleSearch = (e, searchText) => {
        e.preventDefault();
        const trimmedText = searchText.trim().toLowerCase();
    
        if (trimmedText === '') {
            setDoctors([]); 
            return;
        }
    
        const filtered = data.filter((doctor) =>
            doctor?.name?.toLowerCase().includes(trimmedText) ||
            doctor?.speciality?.toLowerCase().includes(trimmedText) ||
            doctor?.education?.toLowerCase().includes(trimmedText)
        );
        setDoctors(filtered);
    };
    


    return (
        <>
            <Hero handleSearch={handleSearch}/>
            <DoctorContainer
                doctors={doctors}
                showAll={showAll}
                onToggle={handleToggleDoctors}
            />
            <StatsSection />
        </>
    );
};

export default Home;
