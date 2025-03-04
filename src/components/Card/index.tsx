import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { FC, useState } from 'react';

import styles from './Card.module.scss';
import { Cards } from '../../utils/types';
import ChangeModal from '../ChangeModal';
import { toast } from 'react-toastify';
import DeleteModal from '../DeleteModal';

type CardProps = {
    data: Cards;
    refetch: () => void;
};

const Card: FC<CardProps> = ({ data, refetch }) => {
    const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    console.log(data.title, 'aaa444eees');

    return (
        <>
            <div className={styles.card}>
                <div className={styles.title}>
                    <h1>{data.title}</h1>
                </div>

                <div className={styles.body}>
                    <img src={data.photo} alt="Photo" />
                    <div>{data.description}</div>
                </div>
                <div className={styles.date}>
                    <span>{data.date}</span>
                    <span>{data.time}</span>
                </div>
                <div>
                    <div onClick={() => setIsChangeModalOpen(true)} className={styles.change}>
                        Изменить
                    </div>
                    <div onClick={() => setIsDeleteModalOpen(true)} className={styles.delete}>
                        Удалить
                    </div>
                </div>
            </div>
            {isChangeModalOpen && (
                <ChangeModal data={data} onClose={setIsChangeModalOpen} refetch={refetch} />
            )}

            {isDeleteModalOpen && (
                <DeleteModal data={data} onClose={setIsDeleteModalOpen} refetch={refetch} />
            )}
        </>
    );
};

export default Card;
