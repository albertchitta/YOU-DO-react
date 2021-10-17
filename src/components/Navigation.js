import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';

export default function Navigation() {
  const history = useHistory(); // Needed for routing and pushing new browser page to navigate

  return (
    <div className="text-center mb-3">
      <ButtonGroup size="lg">
        <button
          onClick={() => history.push('/')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Home
        </button>
        <button
          onClick={() => history.push('/completed')}
          type="button"
          className="btn btn-light border border-dark"
        >
          View Completed
        </button>
        <button
          onClick={() => history.push('/all')}
          type="button"
          className="btn btn-light border border-dark"
        >
          All
        </button>
      </ButtonGroup>
    </div>
  );
}
