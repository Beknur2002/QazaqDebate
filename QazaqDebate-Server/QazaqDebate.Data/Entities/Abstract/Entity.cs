using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QazaqDebate.Data.Entities.Abstract
{
    public class Entity
    {
        public Guid Id { get; set; }
        public DateTime DateCreated { get; set; }

        public Entity()
        {
            DateCreated = DateTime.Now;
        }
    }

}
