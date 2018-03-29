//increment
export function increment(index){
    return {
        type: "INCREMENT_LIKES",
        index
    }
}
//add comment
export function addCommnet(comment, author, postId){
    return {
        type: "ADD_COMMENT",
        comment,
        author,
        postId
    }
}
//delete comment
export function deleteComment(postId, i){
    return {
        type: "DELETE_COMMENT",
        postId,
        i
    }
}