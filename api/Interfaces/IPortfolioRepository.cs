using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using finance_app.models;

namespace finance_app.Interfaces
{
    public interface IPortfolioRepository
    {
        Task<List<Stock>> GetUserPortfolio(User user);
        Task<Portfolio> CreateAsync(Portfolio portfolio);
    }
}