import React, { FC, use, useState } from 'react';

import styles from './ChangeModal.module.scss';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ChangeModalProps } from '../../utils/types';

const ChangeModal: FC<ChangeModalProps> = ({ onClose, data, refetch }) => {
    const [form, setForm] = useState({
        id: data.id,
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        photo: data.photo,
    });

    const { mutate } = useMutation({
        mutationKey: ['change-seminars'],
        mutationFn: async (data: {
            id: string;
            title: string;
            description: string;
            date: string;
            time: string;
        }) => {
            await axios.put(
                `https://66f834c72a683ce9730ef214.mockapi.io/seminars/${data.id}`,
                data
            );
            return data;
        },
        onSuccess: () => {
            refetch();
            onClose(false);
            toast.success('Изменения сохранены');
        },
        onError: () => {
            toast.error('Ошибка при сохранении');
        },
    });

    const handleSubmit = () => {
        mutate(form);
    };

    return (
        <div className={styles.formBack}>
            <div className={styles.form}>
                <div onClick={() => onClose(false)} className={styles.closer}>
                    +
                </div>
                <div className={styles.divInput}>
                    <p>Название:</p>
                    <input
                        type="text"
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className={styles.input}
                        placeholder={'Title'}
                        value={form.title}
                    />
                </div>

                <div className={styles.divInput}>
                    <p>Описание:</p>
                    <input
                        type="text"
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className={styles.input}
                        placeholder={'For...'}
                        value={form.description}
                    />
                </div>

                <div className={styles.divInput}>
                    <p>Дата:</p>
                    <input
                        type="text"
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className={styles.input}
                        placeholder={'11.11...'}
                        value={form.date}
                    />
                </div>
                <div className={styles.divInput}>
                    <p>Время:</p>
                    <input
                        type="text"
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className={styles.input}
                        placeholder={'1...'}
                        value={form.time}
                    />
                </div>
                <div onClick={handleSubmit} className={styles.accept}>
                    Сохранить изменения
                </div>
            </div>
        </div>
    );
};

export default ChangeModal;
