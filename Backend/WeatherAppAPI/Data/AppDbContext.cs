using Microsoft.EntityFrameworkCore;
using WeatherAppAPI.Types;

namespace WeatherAppBackend.Data {
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        
        public DbSet<WeatherData> Weathers { get; set; }
    }
}