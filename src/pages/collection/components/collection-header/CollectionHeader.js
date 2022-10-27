// components
import InputBar from '../../../../components/input-bar/InputBar'
import SecondaryBtn from '../../../../components/btns/secondary-btn/SecondaryBtn'

// styles
import './CollectionHeader.scss'

export default function CollectionHeader() {
  return (
    <div className='col-header-container'>
        <SecondaryBtn title='BACK'/>
        <InputBar type='text' col='51,51,51' pH='SEARCH' />
    </div>
  )
}