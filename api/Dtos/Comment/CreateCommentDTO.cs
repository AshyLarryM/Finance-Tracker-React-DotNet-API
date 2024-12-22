using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace finance_app.Dtos.Comment
{
    public class CreateCommentDTO
    {
        //validation
        [Required]
        [MinLength(5, ErrorMessage = "Title must be at least 5 characters.")]
        [MaxLength(280, ErrorMessage = "Title must be 280 characters maximum.")]
        public string Title { get; set; } = string.Empty;
        [Required]
        [MinLength(5, ErrorMessage = "Content must be at least 5 characters.")]
        [MaxLength(280, ErrorMessage = "Content must be 280 characters maximum.")]
        public string Content { get; set; } = string.Empty;
    }
}