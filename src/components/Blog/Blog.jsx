import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';


const Blog = ({id,blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={title}/>
            <div className='flex justify-between p-5 rounded-lg'>
                <div className='flex justify-between '>
                    <img className='w-10 h-10 mr-2' src={author_img} alt=''/>
                    <div>
                    <h3 className='font-bold'>{author}</h3>
                    <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleAddToBookmark(blog)}><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
           <div className='flex flex-col gap-3 space-y-4'>
           <h2 className="text-3xl font-bold">{title}</h2>
           <div className='flex'>
           {
                hashtags.map((hashtag, idx) => <span className='ml-3' key={idx}> <a href="" >#{hashtag}</a></span>)
            }
           </div>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-left text-xs font-thin text-purple-600 underline'>Mark As Read</button>
           </div>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
    id: PropTypes.number
}

export default Blog;