import { toast } from "react-toastify"
import { commentPostApi } from "../../services/CommentService"
import { CommentFormInputs } from "../../utils/schemas/commentSchema"
import { StockCommentForm } from "./StockCommentForm"
import { useAuth } from "../../context/useAuth"

interface StockCommentProps {
    stockSymbol: string,
}


export function StockComment({ stockSymbol }: StockCommentProps) {

    const { token } = useAuth();

    function handleComment(form: CommentFormInputs) {

        if (!token) {
            toast.warning("You must be logged in to comment!");
            return
        }

        commentPostApi(form.title, form.content, stockSymbol, token)
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
