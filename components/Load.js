import Spinner from 'react-bootstrap/Spinner'

export const Load = ({ msg }) => (
  <>
    <Spinner
      animation="border"
      variant="info"
      style={{ margin: '20% auto 0 auto', display: 'block' }}
    />
    <h3 className="text-center m-5" style={{ animation: 'fadein 2s' }}>
      {msg}
    </h3>
  </>
)