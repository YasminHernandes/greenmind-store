
export const Checkmark = ( {...props} ) => {
  return (
    <div style={{display: 'flex'}} className={props.className}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.56 8.44002C27.8409 8.72127 27.9987 9.10252 27.9987 9.50002C27.9987 9.89752 27.8409 10.2788 27.56 10.56L13.06 25.06C12.7788 25.3409 12.3975 25.4987 12 25.4987C11.6025 25.4987 11.2213 25.3409 10.94 25.06L4.44001 18.56C4.17519 18.2755 4.03099 17.8994 4.0377 17.5108C4.04441 17.1221 4.20152 16.7512 4.47601 16.476C4.75122 16.2015 5.12212 16.0444 5.51075 16.0377C5.89938 16.031 6.27549 16.1752 6.56001 16.44L12 21.88L25.44 8.44002C25.7213 8.15912 26.1025 8.00134 26.5 8.00134C26.8975 8.00134 27.2788 8.15912 27.56 8.44002Z" fill="white"/>
      </svg>
    </div>
  )
}
