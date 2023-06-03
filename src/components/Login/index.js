// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import {Component} from 'react'

class Login extends Component {
  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
    } else {
      console.log(data.error_msg)
    }
  }

  onClickButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    // const jwtToken = Cookies.get('jwt_token')
    // if (jwtToken !== undefined) {
    //   return <Redirect to="/" />
    // }
    return (
      <div className="main-container">
        <h1>Please Login</h1>
        <button type="button" className="button" onClick={this.onClickButton}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
