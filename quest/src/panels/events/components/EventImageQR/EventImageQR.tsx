import { QRCodeComponent } from "src/components/qrGenerator";
import styles from "./EventImageQR.module.css";

import { Image, ImageProps } from "@vkontakte/vkui";

interface Props extends ImageProps {
    qrUrl: string;
}

export const EventImageQR = ({ qrUrl }: Props) => {
    return (
        <div className={styles["EventImageQR"]}>
            <Image size={400} />
            <div className={styles["QRContainer"]}>
                <QRCodeComponent url={qrUrl} size={64} />
            </div>
        </div>
    );
};
