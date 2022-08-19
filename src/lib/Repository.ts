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
            //  update values
            existing.name = appoinment.name
            existing.time = appoinment.time
        } else {
            // add appoinment to array
            savedAppointments.push(appoinment)
        }

        // save updated array  
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
    },

    findByDay: (year: number, month: number, day: number): Appointment[] => {
        const appointments = getSavedAppointments()
        return appointments.filter(ele => {
            const date = new Date(Date.parse(ele.time))
            if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
                return true
            }
            return false
        })
    }
}
