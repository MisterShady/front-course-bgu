import React from 'react';
import './css/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 KinoVibe. Все права защищены.</p>
            <p>Телефон: <a href="tel:+123456789">+1 234 567 89</a></p>
            <p>Email: <a href="mailto:info@kinovibe.com">info@kinovibe.com</a></p>
            <p>Адрес: Россия, г.Белгород, ул. Победы, 85, корп. 12</p>
        </footer>
    );
};

export default Footer;
