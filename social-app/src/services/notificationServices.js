import axios from "axios";

const apiURL = import.meta.env.VITE_BASE_URL;

export async function getNotifications() {
    const data = await axios.get(`${apiURL}/notifications`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
    });
    return data;
}

export async function getUnreadCount() {
    const data = await axios.get(`${apiURL}/notifications/unreadCount`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
    });
    return data;
}

export async function markAsRead(notificationId) {
    const data = await axios.patch(`${apiURL}/notifications/${notificationId}`, {}, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
    });
    return data;
}
