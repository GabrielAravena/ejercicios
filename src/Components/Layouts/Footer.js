import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default ({muscles, onSelect, category}) => {
const index = category
? muscles.findIndex(group => group === category) + 1
: 0 

return (
    <Paper>
        <Tabs
            value={index}
            onChange={(e, index) => 
                onSelect(index === 0 ? '' :  muscles[index - 1])
            }
            indicatorColor="primary"
            textColor="primary"
            centered
            >
            <Tab label="All" />
            {muscles.map(muscle => 
                <Tab 
                    key={muscle}
                    label={muscle} />
                )}
        </Tabs>
    </Paper>
)
}


