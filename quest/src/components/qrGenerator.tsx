import React from 'react';
import { QRCode } from 'react-qr-code';

interface IProps {
    props: string
}

//send url in component props
export const QRCodeComponent: React.FC = (props:IProps) => {
    return (
        <div>
            <QRCode value={`${props.props}`} />
        </div>
    );
};

