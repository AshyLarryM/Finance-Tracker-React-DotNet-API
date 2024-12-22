import { CommentGet } from "../../models/Comment"

interface CommentListItem {
    comment: CommentGet
}

export default function StockCommentListItem({ comment }: CommentListItem) {
    return (
        <div className="relative grid grid-cols-1 gap-4 ml-4 p-4 mb-8 w-full border border-slate-600 rounded-lg bg-slate-800 shadow-lg">
            <div className="relative flex gap-4">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                        <p className="text-slate-300 relative text-xl whitespace-nowrap truncate overflow-hidden">
                            {comment.title}
                        </p>
                    </div>
                    <p className="text-slate-400 text-sm">@{comment.createdBy}</p>
                </div>
            </div>
            <p className="-mt-4 text-slate-400">{comment.content}</p>
        </div>
    )
}
