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
        public static ComentDTO ToCommentDTO(this Comment commentModel)
        {
            return new ComentDTO
            {
                Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                CreatedOn = commentModel.CreatedOn,
                StockId = commentModel.StockId,
            };
        }
    }
}