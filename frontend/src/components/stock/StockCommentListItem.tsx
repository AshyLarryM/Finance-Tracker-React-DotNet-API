import { CommentGet } from "../../models/Comment"

interface CommentListItem {
    comment: CommentGet
}

export default function StockCommentListItem({ comment }: CommentListItem) {

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    }
    
    return (
        <div className="relative grid grid-cols-1 gap-4 ml-4 px-8 py-4 mb-8 w-full border border-slate-600 rounded-lg bg-slate-800 shadow-lg">
            <div className="relative flex gap-4">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                        <p className="text-slate-400 relative text-xl whitespace-nowrap truncate overflow-hidden">
                            {comment.title}
                        </p>
                        <p className="text-slate-400">{formatDate(comment.createdOn)}</p>
                    </div>
                    <p className="text-slate-500 text-sm">@{comment.createdBy}</p>
                </div>
            </div>
            <p className="-mt-4 text-slate-300">{comment.content}</p>
        </div>
    )
}
