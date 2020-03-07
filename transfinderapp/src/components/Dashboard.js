import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const Dashboard = () => {

    useEffect(()=>{
        //get request for users ratings
    },[])



    return (
        <div>
            I'm the dashboard
        </div>
    )
}

const mapStateToProps = state => {
    return(
        state
    )
}

export default connect(mapStateToProps, {})(Dashboard)
