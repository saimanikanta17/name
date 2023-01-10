import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Footer from '../Footer'

import StateCase from '../StateCase'

import TopDistricts from '../TopDistricts'

import statesList from '../data'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SpecificState extends Component {
  state = {
    stateName: '',
    stateStats: {},
    districtsDetails: [],
    caseType: 'confirmed',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getStateDetails()
  }

  getFormattedData = (eachDistrict, districts) => {
    const districtName = eachDistrict
    let {confirmed, deceased, recovered} = districts[eachDistrict].total

    if (confirmed === undefined) {
      confirmed = 0
    }
    if (deceased === undefined) {
      deceased = 0
    }
    if (recovered === undefined) {
      recovered = 0
    }

    const active = confirmed - (recovered + deceased)

    return {
      districtName,
      confirmed,
      deceased,
      recovered,
      active,
    }
  }

  getStateDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {caseType} = this.state
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const url = 'https://apis.ccbp.in/covid19-timelines-data'
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    const responseTime = await fetch(url)
    const fetchedDataTime = await responseTime.json()
    const {districts} = fetchedData[stateCode]
    const districtsNames = Object.keys(districts)
    const districtsDetails = districtsNames.map(eachDistrict =>
      this.getFormattedData(eachDistrict, districts),
    )
    districtsDetails.sort((a, b) => b[caseType] - a[caseType])
    console.log(fetchedData)
    console.log(fetchedDataTime[stateCode])
    const specificState = statesList.filter(
      state => state.state_code === stateCode,
    )
    const stateName = specificState[0].state_name
    const stateStats = fetchedData[stateCode].total
    this.setState({
      stateName,
      stateStats,
      districtsDetails,
      apiStatus: apiStatusConstants.success,
    })
  }

  changeCaseType = caseType => {
    const {districtsDetails} = this.state
    districtsDetails.sort((a, b) => b[caseType] - a[caseType])
    this.setState({caseType, districtsDetails})
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#007Bff" height="50" width="50" />
    </div>
  )

  renderStateDetailsView = () => {
    const {stateName, stateStats, districtsDetails, caseType} = this.state
    const {tested} = stateStats

    return (
      <>
        <div className="state-details">
          <div className="state-name">
            <h1>{stateName}</h1>
          </div>
          <div className="tested-card">
            <p>Tested</p>
            <p>{tested}</p>
          </div>
        </div>
        <StateCase
          stateStats={stateStats}
          changeCaseType={this.changeCaseType}
        />
        <h1 className={`district-name ${caseType}`}>Top Districts</h1>
        <ul className="district-cases">
          {districtsDetails.map(eachDistrict => (
            <TopDistricts
              eachDistrict={eachDistrict}
              key={eachDistrict.districtName}
              caseType={caseType}
            />
          ))}
        </ul>
        <Footer />
      </>
    )
  }

  renderStateDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderStateDetailsView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <Header />
        <div className="specific-state-container">
          {this.renderStateDetails()}
        </div>
      </div>
    )
  }
}

export default SpecificState
