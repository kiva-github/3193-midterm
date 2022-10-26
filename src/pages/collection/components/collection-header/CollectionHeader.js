// styles
import './CollectionHeader.scss'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import SecondaryBtn from '../../../../components/btns/secondary-btn/SecondaryBtn'

export default function CollectionHeader() {
  return (
    <div className='col-header-container'>
        <SecondaryBtn title='BACK'/>
        <InputBar type='text' col='51,51,51' pH='SEARCH' />
    </div>
  )
}
