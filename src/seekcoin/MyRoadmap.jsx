import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { VerticalTimeline, VerticalTimelineElement,  } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from '../assets/line.png'





export const MyRoadmap = () => {
  return (

    // <Container maxWidth="lg">
    <Box sx={{padding:'50px 0'}}>
      <Typography variant="h5" textAlign='center'>
        The Roadmap
      </Typography>
      <Typography textAlign='center' color="#C8CEFE" fontSize="15px" pb={5} pt={3}>

        Our team working hardly to make archive lorem ipsum dolor sit amet, consectetur amet, consectetur adipiscing elit.
      </Typography>
      <VerticalTimeline lineColor="#FF7A00" >
        <VerticalTimelineElement
          contentStyle={{ background: 'linear-gradient(180deg, #FF7A00 0%, rgba(255, 122, 0, 0) 100%)' }}
          contentArrowStyle={{ borderRight: '7px solid  #FF7A00' }}
          iconStyle={{
            backgroundColor: '#4E55FB', color: '#FF7A00', backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            boxShadow: '0 0 0 4px #FF7A00, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)'
          }}

        >

          <Typography variant="h6" textAlign="center">
            NOV 2022
          </Typography>
          <Typography fontSize="15px" color='#fff' textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s,
          </Typography>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'linear-gradient(180deg, #FF7A00 0%, rgba(255, 122, 0, 0) 100%)' }}
          contentArrowStyle={{ borderRight: '7px solid  #FF7A00' }}
          iconStyle={{
            backgroundColor: '#4E55FB', backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            boxShadow: '0 0 0 4px #FF7A00, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)'
          }}

        >
          <Typography variant="h6" textAlign="center">
            NOV 2022
          </Typography>
          <Typography fontSize="15px" color='#fff' textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s,
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1B1950' }}
          contentArrowStyle={{ borderRight: '7px solid  #1B1950' }}
          iconStyle={{
            backgroundColor: '#4E55FB', backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            boxShadow: '0 0 0 4px #FF7A00, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)'
          }}
        >
          <Typography variant="h6" textAlign="center">
            NOV 2022
          </Typography>
          <Typography fontSize="15px" color='#fff' textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s,
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1B1950' }}
          contentArrowStyle={{ borderRight: '7px solid  #1B1950' }}
          iconStyle={{
            backgroundColor: '#4E55FB', backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            boxShadow: '0 0 0 4px #FF7A00, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)'
          }}
        >
          <Typography variant="h6" textAlign="center">
            NOV 2022
          </Typography>
          <Typography fontSize="15px" color='#fff' textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s,
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1B1950' }}
          contentArrowStyle={{ borderRight: '7px solid  #1B1950' }}
          iconStyle={{
            backgroundColor: '#4E55FB', backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            boxShadow: '0 0 0 4px #FF7A00, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)'
          }}
        >
          <Typography variant="h6" textAlign="center">
            NOV 2022
          </Typography>
          <Typography fontSize="15px" color='#fff' textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s,
          </Typography>
        </VerticalTimelineElement>

      </VerticalTimeline>
      </Box>
    // </Container>
  )
}
