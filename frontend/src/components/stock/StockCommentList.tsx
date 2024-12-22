import { CommentGet } from "../../models/Comment"
import StockCommentListItem from "./StockCommentListItem"

interface CommentListProps {
    comments: CommentGet[],
}

export function StockCommentList({ comments }: CommentListProps) {
    return (
        <>
            {comments ?
                comments.map((comment) => {
                    return <StockCommentListItem comment={comment} />
                })
                : ""}
        </>
    )
}
