import React, {FC} from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

interface Props {
    value: string
    type: string
    onClick: () => void
}

const ButtonItem: FC<Props | any> = ({value, type, onClick}) => {
    return (
        <>
            <Button style={{width: 150, margin: "3px 3px"}} onClick={onClick} type={type} >{value}</Button>
        </>
    );
};
export default ButtonItem;
