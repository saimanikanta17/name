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
    <li className="list-style-none">
      <ul className="state-cases">
        <li className="states-card">
          <p>{stateName}</p>
        </li>
        <li className={`confirmed-text ${'count-card'}`}>
          <p>{confirmedCases}</p>
        </li>
        <li className={`active-text ${'count-card'}`}>
          <p>{activeCases}</p>
        </li>
        <li className={`recovered-text ${'count-card'}`}>
          <p>{recoveredCases}</p>
        </li>
        <li className={`deceased-text ${'count-card'}`}>
          <p>{deceasedCases}</p>
        </li>
        <li className={`population-text ${'count-card'}`}>
          <p>{population}</p>
        </li>
      </ul>
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
    <div className="state-wise-cases">
      <ul className="state-cases-heading">
        <li className="states-card">
          <p>States/UT</p>
          <button type="button" className="btn" onClick={clickSortingAsc}>
            <FcGenericSortingAsc size="25px" />
          </button>
          <button type="button" className="btn" onClick={clickSortingDesc}>
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
