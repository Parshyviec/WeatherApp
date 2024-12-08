using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeatherAppAPI.Types;
using WeatherAppBackend.Data;

namespace WeatherAppAPI
{
    [Route("api/weather")]
    [ApiController]
    public class WeatherController(AppDbContext context) : ControllerBase
    {
        private readonly AppDbContext _context = context;

        [HttpPost]
        public async Task<IActionResult> AddWeatherRecord([FromBody] WeatherData data)
        {
            await _context.Weathers.AddAsync(data);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRecords()
        {
            var weatherRecords = await _context.Weathers.ToListAsync();
            return Ok(weatherRecords);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecord(long id)
        {
            var record = await _context.Weathers.FirstOrDefaultAsync(r => r.Id == id);
            if(record != null)
            {
                _context.Weathers.Remove(record);
                await _context.SaveChangesAsync();
            }
            return Ok("Record deleted if existed");
        }
    }

    
}
