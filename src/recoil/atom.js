import { atom } from "recoil";

export const bookingState = atom( {
    key: 'bookingState',
    default: {
        adult: 0,
        children: 0,
        totalAmount: 0,
        activitiesImage: '',
        activitiesName: '',
        bookingStatus: false,
        price: null,
        date: '',
        time: ''
    }
})