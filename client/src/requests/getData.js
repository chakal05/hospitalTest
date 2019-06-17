import setUp from '@/requests/setUp'

export default {
    getHours(day) {
        return setUp().post('loadHours', day);
    },

    submitForm(data) {
        return setUp().post('register', data);
    },

    loginUser(credentials) {
        return setUp().post('login', credentials);
    },

    getReser(dag) {
        return setUp().post('reservations', dag);
    }

}