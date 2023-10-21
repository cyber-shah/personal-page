import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import HubIcon from '@mui/icons-material/Hub';

import HarvardLogo from './Harvard-logo.png';
import NortheasternLogo from './Northeastern-logo.png';
import cSharpLogo from './c-sharp.png';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" sx={{padding : 16}}>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary">
          2019-2022 </TimelineOppositeContent>

          <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{
            backgroundColor: 'transparent'}}>
          <img src={cSharpLogo} alt="Custom Icon" style={{ width: '90px', height: '100px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '50px', px: 2 }}>
          <Typography variant="h6" component="span">
          Computational Designer </Typography>
          <Typography>
          VastuShilpa Consultants</Typography>
        
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary">
          2022 </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{
            backgroundColor: 'transparent'}}>
          <img src={HarvardLogo} alt="Custom Icon" style={{ width: '100px', height: '90px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '50px', px: 2 }}>
          <Typography variant="h6" component="span">
          Harvard University </Typography>
          <Typography>
          MS - Computational Design</Typography>
          <Typography>
         Dropped Out</Typography>
        
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary">
          2023 - 2025</TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{
            backgroundColor: 'transparent'}}>
          <img src={NortheasternLogo} alt="Custom Icon" style={{ width: '100px', height: '100px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '50px', px: 2 }}>
          <Typography variant="h6" component="span">
          Northeastern University </Typography>
          <Typography>
          MS - Computer Science</Typography>
        
        </TimelineContent>
      </TimelineItem>

        


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary">
          2023 </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '50px', px: 2 }}>
          <Typography variant="h6" component="span">
          Looking for internships! </Typography>
          <Typography>
          Full Stack Software Developer</Typography>
        
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}