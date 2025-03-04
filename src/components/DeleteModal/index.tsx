import React, { FC } from 'react';

import styles from './DeleteModal.module.scss';
import { ChangeModalProps } from '../../utils/types';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const DeleteModal: FC<ChangeModalProps> = ({ onClose, data, refetch }) => {
    const { mutate } = useMutation({
        mutationKey: ['delete-seminars'],
        mutationFn: async (id: string) => {
            await axios.delete(`https://66f834c72a683ce9730ef214.mockapi.io/seminars/${id}`);
        },
        onSuccess: () => {
            refetch();
            toast.success('Семинар удален');
        },
        onError: () => {
            toast.error('Произошла ошибка');
        },
    });
    return (
        <div className={styles.modalDiv}>
            <div className={styles.modal}>
                <div className={styles.closer} onClick={() => onClose(false)}>
                    +
                </div>
                <div className={styles.title}>
                    <h1>Вы действительно хотите удалить семинар?</h1>
                </div>
                <div className={styles.line}></div>
                <div>
                    <div className={styles.btns}>
                        <div onClick={() => onClose(false)} className={styles.otm}>
                            Отмена
                        </div>
                        <div onClick={() => mutate(data.id)} className={styles.conf}>
                            Подтвердить
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
