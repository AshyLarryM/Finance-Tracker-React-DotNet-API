using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using finance_app.models;
using Microsoft.EntityFrameworkCore;

namespace finance_app.data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) :  base(dbContextOptions)
        {
            
        }

        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}