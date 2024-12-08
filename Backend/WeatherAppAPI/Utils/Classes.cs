using System.ComponentModel.DataAnnotations;

namespace WeatherAppAPI.Types
{
	public class OpenWeatherResponse
	{
		public required Main Main { get; set; }
	}

	public class Main
	{
		public double Temp { get; set; }
	}

	public class WeatherData
	{
		[Key]
		public long Id { get; set; }
		public required string City { get; set; }
		public double Temperature { get; set; }
		public DateTime Timestamp { get; set; }
	}	
}
