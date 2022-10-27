import "../App.css";
import { FC, useEffect, useState } from "react";
import Desk from './desk';

export const BookedDesk: FC<any> = ({ loc, dates }) => {

    const [bookDesk, setBookedDesk] = useState<any>('');

    function convert(dates: any) {
        var date = new Date(dates),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("-");
    }

    useEffect(() => {
        const fetchBookedDesk = async () => {
            const response = await fetch(`/api/bookings/site/${loc}/fromDate/${convert(dates[0])}/toDate/${convert(dates[1])}`)
            console.log(response);
            const json = await response.json()
            if (response.ok) {
                setBookedDesk(json)
            }
        }
        fetchBookedDesk();
        console.log(bookDesk);
    }, [loc, dates]);

    return (
        <div className="Second-comp">
            <p className="Booked-title"><b>Booked desk</b></p>
            {bookDesk && bookDesk.map((desk: any) => (
                <Desk key={desk._id} desk={desk}>
                </Desk>
            ))}
        </div>
    );
};