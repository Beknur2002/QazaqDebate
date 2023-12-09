using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QazaqDebate.Data.Entities
{
    public class Club
    {
        public int ClubId { get; set; }
        public string Name { get; set; }
        public City City { get; set; }
        public List<Person> Persons {get; set;}
        public List<Tournament> Tournaments { get; set;}
    }
}
