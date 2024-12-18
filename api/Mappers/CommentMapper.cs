using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using finance_app.Dtos.Comment;
using finance_app.models;

namespace finance_app.Mappers
{
    public static class CommentMapper
    {
        public static CommentDTO ToCommentDTO(this Comment commentModel)
        {
            return new CommentDTO
            {
                Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                CreatedOn = commentModel.CreatedOn,
                StockId = commentModel.StockId,
            };
        }

        public static Comment ToCommentFromCreate(this CreateCommentDTO commentDTO, int stockId)
        {
            return new Comment
            {
                Title = commentDTO.Title,
                Content = commentDTO.Content,
                StockId = stockId
            };
        }

        public static Comment ToCommentFromUpdate(this UpdateCommentRequestDTO commentDTO)
        {
            return new Comment
            {
                Title = commentDTO.Title,
                Content = commentDTO.Content,
            };
        }
    }
}