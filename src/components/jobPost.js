import React from 'react';

const JobPost = (props) => {
  const saveAnnons = () => {
    localStorage.setItem(
      'savedJobs',
      JSON.stringify(props)
    );

    // Retrive saved jobs from localStorage
    //  const da = JSON.parse(localStorage.getItem('savedJobs'));
  };

  return (
    <div>
      <div>
        <h2>
          {' '}
          {props.jobPositionPurpose.purpose}{' '}
        </h2>
        <h3>
          {props.hiringOrg.name}
          <span>
            {`  -->-> This is the city code ${props.hiringOrgContact.municipality}`}{' '}
          </span>
        </h3>
        <h4> {props.jobPositionTitle.title} </h4>
        <h4>
          {props.jobPositionLocation.addressLine}
        </h4>
        <h4>{props.classification.duration}</h4>
        <button onClick={saveAnnons}>
          {' '}
          Save{' '}
        </button>
      </div>
    </div>
  );
};

export { JobPost as default };
