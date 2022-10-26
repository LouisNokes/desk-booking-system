import "../App.css";
import { FC, useEffect, useState } from "react";

import Desk from './desk';

interface BookedProps {

}

export const BookedDesk: FC<BookedProps> = () => {
    const [bookDesk, setBookedDesk] = useState<any>('');

    useEffect(() => {
        const fetchBookedDesk = async () => {
            const response = await fetch('/api/desk')
            const json = await response.json()
            if (response.ok) {
                setBookedDesk(json)
                console.log(bookDesk);
            }
        }
        fetchBookedDesk();
    }, [])

    return (
        <div className="Second-comp">
            {bookDesk && bookDesk.map((desk: any) => (
                <Desk key={desk._id} desk={desk}>
                </Desk>
            ))}
        </div>
    );
};