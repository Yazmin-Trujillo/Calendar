import { Appointment } from "./Models";

const APPOINTMENT_KEY = 'appoinments'

function getSavedAppointments(): Appointment[] {
    const allItem = localStorage.getItem(APPOINTMENT_KEY)
    if (allItem === null) {
        return []
    }
    return JSON.parse(allItem);
}

export const Repository = {

    addItem: async (appoinment: Appointment) => {

        const savedAppointments = getSavedAppointments()
        const existing = savedAppointments.find(a => a.id == appoinment.id)
        if (existing) {
            // TODO: update values
            existing.name = appoinment.name
            existing.time = appoinment.time
        } else {
            //TODO: add appoinment to array
            savedAppointments.push(appoinment)
        }

        //TODO: save updated array  
        localStorage.setItem(APPOINTMENT_KEY, JSON.stringify(savedAppointments))

    },

    readItem: () => {
        const appointments = getSavedAppointments()
        return appointments
    },

    deleteItem: (key: string) => {
        localStorage.removeItem(key)
    },

    deleteStorage: () => {
        localStorage.clear()
    }

}
