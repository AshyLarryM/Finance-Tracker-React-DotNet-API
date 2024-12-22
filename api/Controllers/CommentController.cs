using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using finance_app.Dtos.Comment;
using finance_app.Exstensions;
using finance_app.Interfaces;
using finance_app.Mappers;
using finance_app.models;
using finance_app.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace finance_app.Controllers
{

    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {

        private readonly ICommentRepository _commentRepo;
        private readonly IStockRepository _stockRepo;
        private readonly UserManager<User> _userManager;
        private readonly IFMPService _fmpService;
        public CommentController(ICommentRepository commentRepo, IStockRepository stockRepo, UserManager<User> userManager, IFMPService fmpService)
        {
            _commentRepo = commentRepo;
            _stockRepo = stockRepo;
            _userManager = userManager;
            _fmpService = fmpService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comments = await _commentRepo.GetAllAsync();
            var commentDTO = comments.Select(c => c.ToCommentDTO());

            return Ok(commentDTO);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comment = await _commentRepo.GetByIdAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment.ToCommentDTO());
        }

        [HttpPost]
        [Route("{symbol:alpha}")]
        public async Task<IActionResult> Create([FromRoute] string symbol, CreateCommentDTO commentDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stock = await _stockRepo.GetBySymbolAsync(symbol);

            if (stock == null)
            {
                stock = await _fmpService.FindStockBySymbolAsync(symbol);
                if (stock == null)
                {
                    return BadRequest("This stock does not exist");
                }
                else
                {
                    await _stockRepo.CreateAsync(stock);
                }
            }

            if (User == null || !User.Identity.IsAuthenticated)
            {
                return Unauthorized("User is not authenticated.");
            }


            var username = User.GetUsername();
            var user = await _userManager.FindByNameAsync(username);

            var commentModel = commentDTO.ToCommentFromCreate(stock.Id);
            commentModel.UserId = user.Id;
            await _commentRepo.CreateAsync(commentModel);

            return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDTO());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCommentRequestDTO updateDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comment = await _commentRepo.UpdateAsync(id, updateDTO.ToCommentFromUpdate());

            if (comment == null)
            {
                return NotFound("Comment not found!");
            }

            return Ok(comment.ToCommentDTO());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var commentModel = await _commentRepo.DeleteAsync(id);

            if (commentModel == null)
            {
                return NotFound("Comment does not exist!");
            }

            return Ok(commentModel);
        }
    }
}