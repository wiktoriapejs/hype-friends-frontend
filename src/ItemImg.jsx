export default function ItemImg({item, index=0}){



if(!item.photos?.length)
{
  return 'no photos';
}

return(

  
        <div className="  object-cover  sm:w-16 sm:h-16 md:w-32 md:h-32 w-32 h-32 ">
          <img src={'https://hype-friends-backend-production.up.railway.app/' + item.photos[index]} />
        </div>
     
)

}