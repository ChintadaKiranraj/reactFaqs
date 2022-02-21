import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    clickedIdList: [],
  }

  onClickedExpand = id => {
    //   if id is  not included in the clickedIdList add the id
    //   else remove the id from the clickedIdList
    const {clickedIdList} = this.state
    if (clickedIdList.includes(id)) {
      const newIds = clickedIdList.filter(eachId => id !== eachId)
      this.setState({clickedIdList: newIds})
    } else {
      this.setState(prevSta => ({
        clickedIdList: [...prevSta.clickedIdList, id],
      }))
    }
  }

  render() {
    const {faqsList} = this.props

    const {clickedIdList} = this.state

    return (
      <>
        <h1 style={{textAlign: 'center', color: '#cb8805'}}>FAQs</h1>
        <ul className="list-itmes-container">
          {faqsList.map(item => (
            <FaqItem
              item={item}
              key={item.id}
              onClickedExpand={this.onClickedExpand}
              isShow={clickedIdList.includes(item.id)}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Faqs
