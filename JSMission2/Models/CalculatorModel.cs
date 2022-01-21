using System.ComponentModel.DataAnnotations;

namespace JSMission2.Models
{
    public class CalculatorModel
    {
        [Required, Range(0, 100)]
        public int Assignments { get; set; }
        [Required, Range(0, 100)]
        public int GroupProject { get; set; }
        [Required, Range(0, 100)]
        public int Quizzes { get; set; }
        [Required, Range(0, 100)]
        public int Exams { get; set; }
        [Required, Range(0, 100)]
        public int Intex { get; set; }

    }

}
