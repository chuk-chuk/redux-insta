import React from "react";


const Comments = React.createClass({
    renderComments(comment, i){
        console.log("Index", i);
        return (
        <div className="comment" key={i}>
            <p>
                {comment.text} -- <strong> {comment.user}</strong>
            <button onClick={this.props.deleteComment.bind(null, this.props.params.postId, i)} className="remove-comment">&times;</button>
            </p>
        </div>
        ) 
    },

    handleSubmit(e){
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(comment, author, postId);
        this.refs.commentForm.reset();
    },

    render() {
        return (
            <div className="comments">
            {this.props.postComments.map(this.renderComments)};
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="author" placeholder="author"/>
                <input type="text" ref="comment" placeholder="comment"/>
                <input type="submit" hidden />
            </form>
            </div>
        )
    }
});

export default Comments;