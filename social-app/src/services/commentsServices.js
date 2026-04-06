import axios from "axios";

export function createComment(comment) {
    // API requires the post ID in the URL, not the body
    return axios.post(`${import.meta.env.VITE_BASE_URL}/posts/${comment.post}/comments`, { content: comment.content }, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
    })
}

export async function deleteComment(commentId) {
    const data = await axios.delete(`${import.meta.env.VITE_BASE_URL}/comments/${commentId}`,{
        headers:{
            "Authorization" : `Bearer ${localStorage.getItem("userToken")}`
        }
    })
    return data
}

export async function getPostComments(postId) {
    const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${postId}/comments`,{
        headers:{
            "Authorization" : `Bearer ${localStorage.getItem("userToken")}`
        }
    })
    return data
}

export async function updateComment(commentId, content) {
    const data = await axios.put(`${import.meta.env.VITE_BASE_URL}/comments/${commentId}`, { content }, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
    })
    return data
}

export async function createReply(commentId, content) {
    const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/replies`, { comment: commentId, content }, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
    })
    return data
}
