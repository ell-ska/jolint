type InfoTextProp = {
  infoTextContent?: string
}

const defualtInfoTextContent: string =
  'Empower your workplace by authorizing consent for reliable data to enhance inclusion and belonging. Click on the steps below to read and access the consent form.'

const InfoText = ({ infoTextContent = defualtInfoTextContent }: InfoTextProp) => {
  return <p className='max-w-3xl pb-12 md:pb-20'>{infoTextContent}</p>
}

export default InfoText
