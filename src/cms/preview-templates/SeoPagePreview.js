import React from 'react'
import PropTypes from 'prop-types'
import { SeoPageTemplate } from '../../templates/seo-page'

const SeoPagePreview = ({ entry, widgetFor }) => (
  <SeoPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SeoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SeoPagePreview