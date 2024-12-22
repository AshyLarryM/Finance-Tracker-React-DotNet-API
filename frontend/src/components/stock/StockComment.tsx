import { toast } from "react-toastify"
import { commentGetApi, commentPostApi } from "../../services/CommentService"
import { CommentFormInputs } from "../../utils/schemas/commentSchema"
import { StockCommentForm } from "./StockCommentForm"
import { useAuth } from "../../context/useAuth"
import { useEffect, useState } from "react"
import { CommentGet } from "../../models/Comment"
import { Spinner } from "../spinner/Spinner"
import { StockCommentList } from "./StockCommentList"

interface StockCommentProps {
    stockSymbol: string,
}


export function StockComment({ stockSymbol }: StockCommentProps) {
    const [comments, setComments] = useState<CommentGet[] | null>(null);
    const [loading, setLoading] = useState<boolean>();

    useEffect(() => {
        getComments();
    },[])

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
                    getComments();
                }
            }).catch((e) => {
                toast.warning(e);
            });
    };

    function getComments() {
        if (!token) {
            toast.warning("You must be logged get comments");
            return
        }
        setLoading(true);
        commentGetApi(stockSymbol, token).then((response) => {
            setLoading(false);
            setComments(response?.data!);
        });
    }

    return (
        <div className="flex flex-col">
            <StockCommentForm stockSymbol={stockSymbol} handleComment={handleComment} />
            {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
            
        </div>
    )
}
