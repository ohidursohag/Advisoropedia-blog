import PropTypes from 'prop-types';
import { formatDate } from '../../../utilities/dateFormat';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
  const {title,article,author,authorImage,tags,image,publish_date,_id} = post ||{}
// console.log(post)
  return (
    <Link 
    to={`/post/${_id}`}
    className='group block max-w-[450px] cursor-pointer border-b-4 border-gray-500 rounded-3xl'>
       <figure className='rounded-3xl overflow-hidden mb-3 relative h-[250px]'>
        <img src={image} alt={''} className='group-hover:scale-110 duration-300 size-full'/>
        <div className='absolute bg-black/40 inset-0 group-hover:translate-y-full duration-300'/>
       </figure>
       <div className='p-2'>
        {/* content */}
        <div className='flex items-center justify-between gap-2 '>
          <span className='px-3 py-2 bg-gray-500 text-white rounded-lg inline-block'>{tags}</span>
          <div className='flex items-center gap-2'>
            <div className='size-8 rounded-xl overflow-hidden'>
              <img src={authorImage} alt="author" className='object-cover object-center size-full'/>
            </div>
            <div className='flex items-center gap-2'>
            <p className='text-gray-500 font-bold'>{author}</p>
            <span>|</span>
            <p className='text-gray-500'>{formatDate(publish_date)}</p>
            </div>
          </div>
        </div>
        {/* title & description */}
        <div className='my-3'>
          <h2 className='text-2xl font-bold mb-1'>{title}</h2>
          <p className='line-clamp-3 text-justify'>{article}</p>
        </div>
       </div>
    </Link>
  )
};

PostCard.propTypes = {
  post: PropTypes.object
};

export default PostCard;
