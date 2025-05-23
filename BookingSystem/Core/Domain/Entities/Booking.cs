﻿
namespace Domain.Entities
{
    public class Booking : BaseEntity<string>
    {
        public string? EventId { get; set; }
        public Event? Event { get; set; }

        public string? UserId { get; set; }
        public ApplicationUser? User { get; set; }

        public DateTime Date { get; set; }
    }
}
