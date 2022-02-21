import './index.css'

const FaqItem = props => {
  const {item, onClickedExpand, isShow} = props
  const {id, questionText, answerText} = item
  const condition = isShow

  const plus = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const minus =
    'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const fig = condition === false ? plus : minus
  const altValue = condition === false ? plus : minus

  const onExpands = () => {
    onClickedExpand(id)
  }

  return (
    <li className="list-item-container">
      <div className="question-text-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" onClick={onExpands} className="control-button">
          <img src={fig} alt={altValue} />
        </button>
      </div>
      <br />

      {condition && (
        <div style={{width: '100%'}}>
          <hr
            style={{
              borderColor: '#e4e7eb',
              height: '1px',
              backgroundColor: '#e4e7eb',
              borderStyle: 'solid',
            }}
          />
          <p>{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
