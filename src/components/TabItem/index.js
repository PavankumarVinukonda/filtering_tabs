import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabID, isActive} = props
  const {tabId, displayText} = tabDetails

  const onclickTab = () => {
    updateActiveTabID(tabId)
  }

  const activeTabId = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabId}`}
        onClick={onclickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
