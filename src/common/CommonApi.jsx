// const backendDomain = import.meta.env.VITE_BACKEND_URL
const backendDomain = "http://localhost:5003/api/v1"
//console.log(backendDomain)
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
        url : `${backendDomain}/update-blog/:id`,
        method : 'put'
    },
    getBlogAll : {
        url : `${backendDomain}/get-all-blogs`,
        method : 'get'
    },
    BlogDetails : {
        url : `${backendDomain}/get-blog-details/:id`,
        method : 'post'
    },
    blogDetails : {
        url : `${backendDomain}/delete-blog/:id`,
        method : 'post'
    },
}


export default SummaryApi