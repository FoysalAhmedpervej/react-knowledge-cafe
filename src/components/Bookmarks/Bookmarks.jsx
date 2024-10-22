import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return(
        <div className="md:w-1/3 bg-gray-200 rounded-sm p-4">
            <div>
                <h3 className="text-xl text-center rounded-lg bg-violet-200 py-2">spent time on read : {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center my-5">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) =><Bookmark key={idx}
                  bookmark={bookmark}  
              ></Bookmark> )
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;