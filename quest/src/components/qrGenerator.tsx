import QRCode from "react-qr-code";

interface QRCodeComponentProps {
    url: string;
}

//send url in component props
export const QRCodeComponent = ({ url }: QRCodeComponentProps) => {
    return (
        <>
            <QRCode value={url} />
        </>
    );
};
