using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using finance_app.Dtos.Stock;
using finance_app.models;

namespace finance_app.Mappers
{
    public static class StockMappers
    {
        public static StockDTO ToStockDto(this Stock stockModel)
        {
            return new StockDTO
            {
                Id = stockModel.Id,
                Symbol = stockModel.Symbol,
                CompanyName = stockModel.CompanyName,
                Purchase = stockModel.Purchase,
                LastDiv = stockModel.LastDiv,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap,
            };
        }

        public static Stock ToStockFromCreateDTO(this CreateStockRequestDTO stockDto)
        {
            return new Stock
            {
                Symbol = stockDto.Symbol,
                CompanyName = stockDto.CompanyName,
                Purchase = stockDto.Purchase,
                LastDiv = stockDto.LastDiv,
                Industry = stockDto.Industry,
                MarketCap = stockDto.MarketCap,
            };
        }
    }
}