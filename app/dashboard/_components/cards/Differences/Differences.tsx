import Card from '@/components/Card'
import CardHeader from '@/app/dashboard/_components/CardHeader'

import DifferencesGraph from '@/app/dashboard/_components/cards/Differences/DifferencesGraph';

const Differences = () => {
    const cardHeaderProps = {
        title: 'Differences',
        currentMetrics: [
          {
            metric: 'Women',
            circleColor: '',
          },
          {
            metric: 'Men',
            circleColor: '',
          },
        ],
        dropdown: {
          options: ['Gender', 'Age Group', 'Background', 'Ethnicity', 'Sexual Orientation'],
          selected: 'Gender',  
          onSelect: () => {
          },
        },
      };
    
      return (
        <Card classname='col-span-full lg:col-span-2 h-min'>
          <CardHeader {...cardHeaderProps} />
          {}<DifferencesGraph />

        </Card>
      );
    }

export default Differences 