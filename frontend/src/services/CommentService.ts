import axios from "axios"
import { CommentPost } from "../models/Comment"
import { handleError } from "../utils/ErrorHandler"

const api = "https://localhost:7087/api/comment/"

export async function commentPostApi(title: string, content: string, stockSymbol: string, token: string) {
  try {
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  };
    const data = await axios.post<CommentPost>(api + `${stockSymbol}`, {
      title: title,
      content: content,
    }, config);
    return data;
  } catch (error) {
    handleError(error);
  }
}
