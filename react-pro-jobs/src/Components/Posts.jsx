import React, { useContext } from 'react'
import { UserContext } from './SearchJobComponent';

const Posts = ({ posts, loading }) => {

    const data = useContext(UserContext);
    console.log('description', data);
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {
                posts.map(job =>
                    (
                        <div key={job.id} className="job-container">
                            <div className="top-header">
                                <div className="title">{job.title}</div>
                                <div ><img src={job.company_logo} alt="company-logo" className="image-container" /></div>
                            </div>
                            <div className="created-at">{job.created_at}</div>
                            <div className="button-container">
                                <button className="job-button">Full Time</button>
                                <button className="job-button button2">Fully Remote</button>
                            </div>

                            <div className="content-container">
                                Please use the following link to get in touch <br />
                                <a href={job.company_url}>{job.company_url}</a>
                            </div>
                            <div><button className="job-button view-button">View Details</button></div>
                        </div>
                    )
                )
            }

        </div>
    )
}
export default Posts;