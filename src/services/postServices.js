import axios from "axios";

export function getAllPosts(page) {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/posts`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
    },
    params:{
      limit : 5,
      sort : "-createdAt",
      page
      }
  });
}

export async function getSinglePost(id) {
  const data  = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${id}`,
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return data
}

export async function createPost(formData) {
  const data  = await axios.post(`${import.meta.env.VITE_BASE_URL}/posts/`,formData,
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return data
}

export async function updatePost(postId , formData) {
  const data  = await axios.put(`${import.meta.env.VITE_BASE_URL}/posts/${postId}`, formData,
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return data
}

export async function deletePost(postId) {
  const data  = await axios.delete(`${import.meta.env.VITE_BASE_URL}/posts/${postId}`,
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return data
}

export async function likeUnlikePost(postId) {
  const data  = await axios.put(`${import.meta.env.VITE_BASE_URL}/posts/${postId}/like`, {},
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return data
}

export function getHomeFeed(page) {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/posts/feed`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
    },
    params:{
      limit : 10,
      page
    }
  });
}
