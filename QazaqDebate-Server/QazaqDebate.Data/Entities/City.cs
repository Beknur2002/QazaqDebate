using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QazaqDebate.Data.Entities
{
    public class City
    {
        public int CityId { get; set; }
        public string Name { get; set; }
        public List<Club> Clubs { get; set; }
    }
}
