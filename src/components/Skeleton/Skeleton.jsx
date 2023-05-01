import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
  <ContentLoader backgroundColor="#313131" foregroundColor="#333" {...props}>
    <rect x="0" y="0" width="100%" height="100%" />
  </ContentLoader>
)

export default Skeleton
