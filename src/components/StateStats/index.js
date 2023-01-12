import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import './index.css'

const State = props => {
  const {stateDate} = props
  const {
    stateName,
    confirmedCases,
    deceasedCases,
    recoveredCases,
    population,
  } = stateDate
  const activeCases = confirmedCases - (recoveredCases + deceasedCases)
  return (
    <li className="list-style-none state-cases">
      <p className="states-card">{stateName}</p>
      <p className={`confirmed-text ${'count-card'}`}>{confirmedCases}</p>
      <p className={`active-text ${'count-card'}`}>{activeCases}</p>
      <p className={`recovered-text ${'count-card'}`}>{recoveredCases}</p>
      <p className={`deceased-text ${'count-card'}`}>{deceasedCases}</p>
      <p className={`population-text ${'count-card'}`}>{population}</p>
    </li>
  )
}

const StateStats = props => {
  const {stateWiseData, sortingAsc, sortingDesc} = props
  const clickSortingAsc = () => {
    sortingAsc()
  }
  const clickSortingDesc = () => {
    sortingDesc()
  }
  return (
    <div testid="stateWiseCovidDataTable" className="state-wise-cases">
      <ul className="state-cases-heading">
        <li className="states-card">
          <p>States/UT</p>
          <button
            type="button"
            testid="ascendingSort"
            className="btn"
            onClick={clickSortingAsc}
          >
            <FcGenericSortingAsc size="25px" />
          </button>
          <button
            type="button"
            testid="descendingSort"
            className="btn"
            onClick={clickSortingDesc}
          >
            <FcGenericSortingDesc size="25px" />
          </button>
        </li>
        <li className="count-card">
          <p>Confirmed</p>
        </li>
        <li className="count-card">
          <p>Active</p>
        </li>
        <li className="count-card">
          <p>Recovered</p>
        </li>
        <li className="count-card">
          <p>Deceased</p>
        </li>
        <li className="count-card">
          <p>Population</p>
        </li>
      </ul>
      <ul className="stats-details">
        {stateWiseData.map(stateDate => (
          <State key={stateDate.stateCode} stateDate={stateDate} />
        ))}
      </ul>
    </div>
  )
}

export default StateStats
