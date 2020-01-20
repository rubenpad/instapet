import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { GetSinglePhoto } from '../containers/GetSinglePhoto'

export default function Detail({ detailId }) {
  return (
    <div style={{ padding: '0 0.5rem' }}>
      <Helmet>
        <title>Detail | Petgram</title>
      </Helmet>
      <GetSinglePhoto id={detailId} />
    </div>
  )
}

Detail.propTypes = { detailId: PropTypes.string }
