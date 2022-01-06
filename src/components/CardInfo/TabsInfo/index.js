import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function TabsInfo(props) {
   const styles ={
      statsInfo:{
         display: 'flex',
         alignItems: 'center',
         margin: '0.5rem',
      },
      label:{
         margin: '0 0.5rem',
      }

   }
   const { pokemonData} = props;

   return (
      <Tabs>
         <TabList>
            <Tab >Stats</Tab>
            <Tab >Habilidades</Tab>
         </TabList>
         <TabPanel>
            {
               pokemonData.stats && pokemonData.stats.map((stat,index) => {
                  return (
                     <div key={index} style={styles.statsInfo}>
                        <span style={styles.label}>{stat.stat.name.toUpperCase()}</span>
                        <ProgressBar 
                           labelSize='10px'
                           labelAlignment={'left'}
                           animateOnRender={true}
                           transitionTimingFunction='linear'
                           transitionDuration='2s'
                           bgColor='#4dad5b'
                           completed={stat.base_stat.toString()}
                           maxCompleted={100}
                           height='10px'
                           width='300px' />

                     </div>
                  )
               })
            }
         </TabPanel>
         <TabPanel>
            
         </TabPanel>
      </Tabs>
   )
}
