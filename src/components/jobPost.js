import React from 'react';


/*
const JobPost = (
  {
    identifier,
    jobPositionTitle,
    hiringOrgContact,
    hiringOrg,
    jobPositionPurpose,
    classification,
  },
 props
) => {
    <div>
    //   
    // </div>
};
*/
class JobPost extends React.Component {
  render() {
    return (
      <div>
         
            <h2>
              {' '}
              {
                this.props.jobPositionPurpose
                  .purpose
              }{' '}
            </h2>
            <h3>
              {this.props.hiringOrg.name}
              <span>
                {`---->-> This is the munupality code ${this.props.hiringOrgContact.municipality}`}{' '}
              </span>
            </h3>
            <h4>
              {' '}
              {
                this.props.jobPositionTitle.title
              }{' '}
            </h4>
            <h4>
              {this.props.classification.duration}
            </h4>
      </div>
    );
  }
}

export default JobPost;
