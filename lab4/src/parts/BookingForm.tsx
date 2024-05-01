import React, { useState } from 'react';
import './css/BookingForm.css';

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        movieId: '',
        datetimeValue: ''
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, email, phone, movieId, datetimeValue } = formData;

        if (!name || !email || !phone || !movieId || !datetimeValue) {
            alert("Пожалуйста, заполните все поля формы.");
            return;
        }

        const selectedDate = new Date(datetimeValue);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            alert("Выберите будущую дату и время.");
            return;
        }

        const selectedTime = selectedDate.getHours();
        if (selectedTime < 10 || selectedTime >= 23) {
            alert("Выберите время с 10:00 до 23:00.");
            return;
        }

        const phonePattern = /^\+7\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Пожалуйста, введите телефон в формате +7 (XXX) XXX-XX-XX, где X - цифры.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Пожалуйста, введите корректный адрес электронной почты.");
            return;
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            movieId: '',
            datetimeValue: ''
        });

        alert("Билет забронирован успешно!");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div id="booking" className="booking-form">
            <h3>Бронирование билета</h3>
            <div>
                <form id="booking-form" onSubmit={handleSubmit}>
                    <label htmlFor="movieSelect">Выберите фильм:</label>
                    <select id="movieSelect" name="movieId" value={formData.movieId} onChange={handleChange}>
                        <option value="">Выберите фильм</option>
                        <option value="movie1">Аватар: Путь воды</option>
                        <option value="movie2">Душа</option>
                        <option value="movie3">Стражи Галактики. Часть 3</option>
                        <option value="movie4">Флеш</option>
                    </select>
                    <label htmlFor="datetime">Выберите дату и время:</label>
                    <input type="datetime-local" id="datetime" name="datetimeValue" onChange={handleChange} required />
                    <br />
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    <br />
                    <label htmlFor="phone">Телефон:</label>
                    <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__"  value={formData.phone} onChange={handleChange} required />
                    <br />
                    <br />
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
