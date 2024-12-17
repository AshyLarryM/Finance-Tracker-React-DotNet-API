using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using finance_app.data;
using finance_app.Interfaces;
using finance_app.models;
using Microsoft.EntityFrameworkCore;

namespace finance_app.Repository
{
    public class CommentRepository : ICommentRepository
    {

        private readonly ApplicationDBContext _context;
        public CommentRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<Comment>> GetAllAsync()
        {
            return await _context.Comments.ToListAsync();
        }
    }
}