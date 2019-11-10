import CommentModel from './comment-model';

export default interface PostModel{
    postId:number,
    userId:number,
    text:string,
    comments:CommentModel[]
};