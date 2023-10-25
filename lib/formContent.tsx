import FormOverview from '@/app/consent-form/_components/form/FormOverview'
import FormChapter from '@/app/consent-form/_components/form/FormChapter'
import FormSign from '@/app/consent-form/_components/form/FormSign'
import FormThankYou from '@/app/consent-form/_components/form/FormThankYou'

const chapters = {
  1: {
    1: {
      title: '1. Introduction',
      content: [
        '1.1 [Company Name] (the “Company”) has engaged Jolint Network Analytics AB (“Jolint”) to provide services to analyse the social structures of our organisation and to identify drivers and barriers to inclusion and belonging in the workplace. The analysis will use data generated within the organisation on a daily basis. To do so, we need to obtain your consent for the processing of your personal data.',
      ],
    },
    2: {
      title: '2. Personal Data',
      content: [
        '2.1 The personal data that we will process may include, but is not limited to: your name, email address, department, as well as internal communication metadata and information about meetings.',
        '2.2 To clarify; the content of communications and calendars is never viewed nor processed. As such, Jolint will only be processing the metadata associated with those communication channels. This includes information such as frequency and duration of interactions, which is analysed in order to identify patterns and trends that can help improve the Company culture so as to ensure that all employees feel included and valued.',
      ],
    },
  },
  2: {
    1: {
      title: '3. Purpose of Processing',
      content: [
        '3.1 The purpose of processing your personal data is to enable Jolint to provide the services as described above. The processing of your personal data will help us to improve inclusion and belonging in our organisation and create a more diverse and inclusive workplace.',
        '3.2 To clarify; data collected will not be used for individual insights, but rather be processed on an aggregate level. This means that any insights or results obtained from the metadata will be presented in a way that makes it impossible to identify an individual. Thus, the focus will be on providing insights that assist the Company in creating a more inclusive workplace, improving opportunities for all employees.',
      ],
    },
  },
  3: {
    1: {
      title: '4. Lawful Basis for Processing',
      content: [
        '4.1 The lawful basis for processing your personal data is your consent, as provided by you below.',
      ],
    },
    2: {
      title: '5. Duration of Processing',
      content: [
        '5.1 Your personal data will be processed for the duration of the provision of the services by Jolint. After the services have been provided, your personal data will be deleted or anonymised, except where retention is required by law.',
      ],
    },
    3: {
      title: '6. Your Rights',
      content: [
        '6.1 You have the right to withdraw your consent at any time, without affecting the lawfulness of the processing based on consent before its withdrawal. You also have the right to access, rectify, erase, and restrict the processing of your personal data, as well as the right to data portability and to object to the processing of your personal data.',
      ],
    },
  },
  4: {
    1: {
      title: '7. Data Controller and Processor',
      content: [
        '7.1 [Company Name] is the data controller for the personal data processed under this Agreement, and Jolint is the data processor.',
      ],
    },
    2: {
      title: '8. Contact Information',
      content: [
        '8.1 If you have any questions or concerns about the processing of your personal data, please contact [insert contact details for data protection officer or other responsible person].',
      ],
    },
    3: {
      title: '9. Consent',
      content: [
        '9.1 By signing below, I hereby consent to the processing of my personal data as described above.',
      ],
    },
  },
}

const formContent = [
  <FormOverview key='overview-1' />,
  <FormChapter key='chapter-1.1' {...chapters[1][1]} />,
  <FormChapter key='chapter-1.2-done-1' {...chapters[1][2]} />,
  <FormOverview key='overview-2' />,
  <FormChapter key='chapter-2.1-done-2' {...chapters[2][1]} />,
  <FormOverview key='overview-3' />,
  <FormChapter key='chapter-3.1' {...chapters[3][1]} />,
  <FormChapter key='chapter-3.2' {...chapters[3][2]} />,
  <FormChapter key='chapter-3.3-done-3' {...chapters[3][3]} />,
  <FormOverview key='overview-4' />,
  <FormChapter key='chapter-4.1' {...chapters[4][1]} />,
  <FormChapter key='chapter-4.2' {...chapters[4][2]} />,
  <FormSign key='chapter-4.3-sign-done-4' {...chapters[4][3]} />,
  <FormOverview key='overview-5-submit' />,
  <FormThankYou key='thank-you' />,
]

export { formContent }
