import { toast } from "react-toastify"
import { commentPostApi } from "../../services/CommentService"
import { CommentFormInputs } from "../../utils/schemas/commentSchema"
import { StockCommentForm } from "./StockCommentForm"

interface StockCommentProps {
    stockSymbol: string,
}


export function StockComment({ stockSymbol }: StockCommentProps) {
    function handleComment(form: CommentFormInputs) {
        commentPostApi(form.title, form.content, stockSymbol)
            .then((response) => {
                if (response) {
                    toast.success("Comment successfully added!");
                }
            }).catch((e) => {
                toast.warning(e);
            });
    };

    return (
        <StockCommentForm stockSymbol={stockSymbol} handleComment={handleComment} />
    )
}
