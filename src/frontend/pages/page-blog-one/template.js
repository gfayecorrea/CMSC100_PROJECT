import { html } from 'lit';
import '../../components/blog-component/index.js';
import '../../components/comment-component/index.js';
import '../../components/update-comment-component/index.js';

export function template () {
  return html`
    <style>
      .blog {
        display: flex;
        align-items: center;
        padding: 15px;
      }
      .blog * {
        flex: 1;
      }

      p {
        margin: 15px 0px;
      }

      button {
        background-color: #ff8000;
        padding: 5px 10px;
        text-transform: uppercase;
        letter-spacing: .6px;
        margin: auto;
        margin-top: 5px;
        cursor: pointer;
        color: white;
      }
    </style>
    
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}

      ${Object.keys(this.blog).length
        ? html`
              <div class="center">
                <h2>${this.blog.title}</h2>
                <p><em>by: ${this.blog.username}</em></p>
                <h6> Created at ${new Date(this.blog.createdDate)} || Last update at ${new Date(this.blog.updatedDate)} </h6>
              </div>
              <h3 class="justify">${this.blog.description}</h3>
              
              <button @click="${this.updateblog}"> Update </button> 
              <button @click= "${this.deleteBlog}"> Delete </button> 
              ${this.updatingBlog
              ? html`<blog-component @submit-blog="${this.updateBlog}" .blog="${this.blog}"></blog-component>`
                : ''
      }
             
              <br>
              <br>
              <h3> Comments<h/3>
              ${!this.updatingBlog
              ? this.comments.map(comment => {
                return html`
                <h5> ${comment.username} : ${comment.description} </h5>
                <h6> Commented on ${new Date(comment.createdDate).toDateString()} || Last update on ${new Date(comment.updatedDate).toDateString()} </h6>

                <update-comment-component @submit-comment="${this.updatecomment}" .comment="${comment}"   text= "Edit"> </update-comment-component> 
                <update-comment-component @submit-comment="${this.deleteComment}" .comment="${comment}" text= "Delete"></update-comment-component> 

                ${this.updatingComment && (this.updatingCommentId === comment.id)
                ? html`
                  <comment-component @add-comment="${this.updateComment}" .comment="${comment}" text="Edit Comment"></comment-component>`
                : ''}
                `;
                })
              : ''}
              <br>
              <comment-component @add-comment="${this.addComment}" .comment = "${this.blog}"  text="Add Comment" ></comment-component>`
              : ''}
    `;
}
