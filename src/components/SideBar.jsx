import {Stack} from '@mui/material'
import {categories} from '../utils/constants'
function SideBar({selectedCategory,setSelectedCategory}) {

  
  return (
    <Stack
        direction='row'
        sx={{
            overflow:'auto',
            height:{sx:'auto', md:'95%'},
            flexDirection:{md:'column'}
        }}
    >
        {
            categories.map((category) => (
                // eslint-disable-next-line react/jsx-key
                <button className='category-btn'
                style={{
                    background: category.name === selectedCategory && '#FC1503', color:'white'
                }}
                key={category.name}
                onClick={()=>setSelectedCategory(category.name)}
                >
                    <span>{category.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default SideBar