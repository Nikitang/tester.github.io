import { FC } from 'react';
import Card from '../../components/Card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Cards } from '../../utils/types';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
    const { data, isSuccess, refetch } = useQuery({
        queryKey: ['seminars'],
        queryFn: async () => {
            const response = await axios.get(
                'https://66f834c72a683ce9730ef214.mockapi.io/seminars'
            );
            const seminars = response.data;

            return seminars as Array<Cards>;
        },
    });

    return (
        <div className={styles.main}>
            <h1>Семинары</h1>
            {isSuccess ? (
                <>
                    <div className={styles.cards}>
                        {data.map((item) => (
                            <Card key={item.id} data={item} refetch={refetch} />
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default MainPage;
