import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CommentFormInputs, commentSchema } from "../../utils/schemas/commentSchema";

interface StockCommentFormProps {
    stockSymbol: string,
    handleComment: (e: CommentFormInputs) => void,
};

export function StockCommentForm({ stockSymbol, handleComment }: StockCommentFormProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<CommentFormInputs>({ resolver: zodResolver(commentSchema) });

    return (
        <form className="mt-4 ml-4" onSubmit={handleSubmit(handleComment)}>
            <input
                type="text"
                id="title"
                className="mb-3 bg-slate-600 border border-slate-600 text-slate-300 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
                placeholder="Title"
                {...register("title")}
            />
            {errors.title ? <p>{errors.title.message}</p>: ""}
            <div className="py-2 px-4 mb-4 bg-slate-600 rounded-lg rounded-t-lg border border-slate-600">
                <label htmlFor="comment" className="sr-only">
                    Your comment
                </label>
                <textarea
                    id="comment"
                    rows={6}
                    className="px-0 w-full bg-slate-600 text-sm text-slate-300 border-0 focus:ring-0 focus:outline-none"
                    placeholder="Write a comment..."
                    {...register("content")}
                ></textarea>
            </div>
            <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-teal-500 border border-teal-500 hover:text-teal-500 rounded-lg focus:ring-4 focus:ring-teal-200  hover:bg-opacity-20"
            >
                Post comment
            </button>
        </form>
    )
}
