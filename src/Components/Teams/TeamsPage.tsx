// Imports
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import TeamsTable from './TeamsTable'
import { Loader } from '../../Styles/Loader'
import { Params } from '../../Helpers/ApiParams'


// Consts
const MODE = {
    LOADING: 'loading',
    DEFAULT: 'default',
    ERROR: 'error'
}

const API = 'https://api.football-data.org/v2/competitions/2021/teams'


// Component - this component is to show the page of teams list table 
const TeamsPage = () => {
    const [teams, setTeams] = useState([])
    const [mode, setMode] = useState(MODE.LOADING)


    // Lifecycle
    useEffect(() => {
        fetchTeams()
    }, [])


    // Actions
    const fetchTeams = async () => {
        try {
            const { data } = await axios.get(API, Params)
            if (data.teams) {
                setTeams(data.teams)
                setMode(MODE.DEFAULT)
            }
        } catch (error) {
            setMode(MODE.ERROR)
        }
    }


    // Rendring
    const renderTeams = () => {
        switch (mode) {
            case MODE.ERROR:
                return (
                    <div>
                        error, please check if the path include a valid id team or try refresh the page again.
                    </div>
                )
            case MODE.DEFAULT:
                return (
                    <Fragment>
                        <h1> List of all clubs from the first English league </h1>
                        <TeamsTable teams={teams} />
                    </Fragment>
                )
            default:
                return <Loader />
        }
    }

    return renderTeams()
}

export default TeamsPage