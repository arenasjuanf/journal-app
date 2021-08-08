import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i1.wp.com/hipertextual.com/wp-content/uploads/2020/10/hipertextual-halo-the-master-chief-collection-dara-salto-4k-y-120-fps-xbox-series-x-2020991294-scaled.jpg)',
                }}
            >                
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    un nuveo día
                </p>
                <p className="journal__entry-content">
                    lorem ipsum dolor
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
