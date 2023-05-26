import React from 'react'
import './Card.css'
import PropsTypes from 'prop-types'

const Card = ({children}) => (
  <section className="Card card">
    <div className="card-content">{children}</div>
  </section>
)

Card.propTypes = {
  children: PropsTypes.node.isRequired,
}

const Avatar = ({photoUrl, altText}) => (
  <img className="card-avatar" src={photoUrl} alt={altText} />
) 

Avatar.propTypes = {
  photoUrl: PropsTypes.string.isRequired,
  altText: PropsTypes.string.isRequired,
}

const Title = ({mainTitle, subTitle}) => (
  <div className="card-title">
    <div>{mainTitle}</div>
    <div className="card-subtitle">{subTitle}</div>
  </div>
)

Title.propTypes = {
  mainTitle: PropsTypes.string.isRequired,
  subTitle: PropsTypes.string.isRequired,
}

const Info = ({icon, children, desc = icon}) => (
  <div className="card-info">
    <i className="material-icons" title={desc}>
      {icon}
    </i>
    <span>{children}</span>
  </div>
)

Info.propTypes = {
  icon: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
  desc: PropsTypes.string,
}

Card.Avatar = Avatar
Card.Title = Title
Card.Info = Info

export default Card
