using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using finance_app.Dtos.Stock;
using finance_app.Helpers;
using finance_app.models;

namespace finance_app.Interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllAsync(QueryObject query);
        Task<Stock?> GetByIdAsync(int id);
        Task<Stock> CreateAsync(Stock stockModel);
        Task<Stock?> UpdateAsync(int id, UpdateStockRequestDTO stockDTO);
        Task<Stock?> DeleteAsync(int id);
        Task<bool> StockExists(int id);
    }
}