import { Appointment } from "./Extra";

const storage = window.localStorage;

const localStorage = {

    addItem: async (appoinment: Appointment) => {
         storage.setItem(appoinment.id, appoinment.name)
    
    },

    readItem: (appoinment: Appointment) => {
        const item = storage.getItem(appoinment.id)
        return item
    },

    deleteItem: (appoinment: Appointment) => {
        storage.removeItem(appoinment.id)
    },

    deleteStorage: () => {
        storage.clear()
    }

}

export default localStorage
