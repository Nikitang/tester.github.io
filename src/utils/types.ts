export type Cards = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
};

export type CardData = {
    data: Array<Cards>;
};

export type ChangeModalProps = {
    data: Cards;
    onClose: (arg: boolean) => void;
    refetch: () => void;
};
