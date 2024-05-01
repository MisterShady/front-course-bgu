import React from 'react';
import emailjs from '@emailjs/browser';
import './css/BookingForm.css';

const BookingForm: React.FC = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        try {
            const response = await emailjs.sendForm(
                'c7868074c613fac2816644b0',
                'template_0d35v2j',
                form,
                '092oOy8zwCezb_VrO'
            );

            if (response.status === 200) {
                alert('Билет забронирован успешно!');
                form.reset();
            } else {
                alert('Произошла ошибка при бронировании билета.');
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
            alert('Произошла ошибка при бронировании билета.');
        }
    };

    return (
        <div id="booking" className="booking-form">
            <h3>Бронирование билета</h3>
            <div>
                <form id="booking-form" onSubmit={handleSubmit}>
                    <label htmlFor="movieSelect">Выберите фильм:</label>
                    <select id="movieSelect" name="movieId" required>
                        <option value="">Выберите фильм</option>
                        <option value="Аватар: Путь воды">Аватар: Путь воды</option>
                        <option value="Душа">Душа</option>
                        <option value="Стражи Галактики. Часть 3">Стражи Галактики. Часть 3</option>
                        <option value="Флеш">Флеш</option>
                    </select>
                    <label htmlFor="datetime">Выберите дату и время:</label>
                    <input type="datetime-local" id="datetime" name="datetimeValue" required />
                    <br />
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" name="name" required />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <br />
                    <label htmlFor="phone">Телефон:</label>
                    <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required />
                    <br />
                    <br />
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
