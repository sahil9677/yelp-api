import React from "react";
import './businesslist.css';
import Business from './business.js';

class BusinessList extends React.Component {
    render() {
        return (
        <div className="BusinessList">
            {
                this.props.businesses.map(business => {
                    return <Business key={business.id} business={business} />;
                })
            }
        </div>
        );
    }
}

export default BusinessList;
