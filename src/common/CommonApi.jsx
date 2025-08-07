 const backendDomain = import.meta.env.VITE_APP_BACKEND_URL
const SummaryApi = {
    signUp : {
        url : `${backendDomain}/create-user`,
        method : 'post'
    },
    login : {
        url : `${backendDomain}/login-user`,
        method : 'post'
    },
    addBlog : {
        url : `${backendDomain}/add-blog`,
        method : 'post'
    },
    updateBlog : {
        url : `${backendDomain}/update-blog/`,
        method : 'put'
    },
    getBlogAll : {
        url : `${backendDomain}/get-all-blogs`,
        method : 'get'
    },
    BlogDetails : {
        url : `${backendDomain}/get-blog-details/`,
        method : 'get'
    },
    deleteBlog : {
        url : `${backendDomain}/delete-blog/`,
        method : 'delete'
    },
}


export default SummaryApi