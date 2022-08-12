import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCards({title, description, imgUrl, url}) {

  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
      <a href={url} target='_blank'>
            <img src={imgUrl} />
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </a>
        </div>
    </Col>
  )
}
