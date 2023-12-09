using QazaqDebate.Data.Entities.Abstract;
using Microsoft.AspNetCore.Identity;


namespace QazaqDebate.Data.Entities
{
    public class Admin : Entity
    {
        public IdentityUser IdentityUser { get; set; }
    }

}
