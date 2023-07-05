
type Props = {
  onClick: () => void;
}

export const TrashIcon = ({onClick}: Props) => {
  return (
    <div className="trash-icon" style={{display: 'flex', cursor: 'pointer'}} onClick={onClick}>
      <svg width="32" height="32" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.1875 4.01562H12.2344V3.3125C12.2344 2.90224 12.0714 2.50879 11.7813 2.21869C11.4912 1.9286 11.0978 1.76563 10.6875 1.76562H7.3125C6.90224 1.76563 6.50879 1.9286 6.21869 2.21869C5.9286 2.50879 5.76563 2.90224 5.76562 3.3125V4.01562H2.8125C2.70061 4.01562 2.59331 4.06007 2.51419 4.13919C2.43507 4.21831 2.39063 4.32561 2.39062 4.4375C2.39063 4.54939 2.43507 4.65669 2.51419 4.73581C2.59331 4.81493 2.70061 4.85938 2.8125 4.85938H3.51562V15.125C3.51562 15.3861 3.61934 15.6365 3.80394 15.8211C3.98855 16.0057 4.23893 16.1094 4.5 16.1094H13.5C13.7611 16.1094 14.0115 16.0057 14.1961 15.8211C14.3807 15.6365 14.4844 15.3861 14.4844 15.125V4.85938H15.1875C15.2994 4.85937 15.4067 4.81493 15.4858 4.73581C15.5649 4.65669 15.6094 4.54939 15.6094 4.4375C15.6094 4.32561 15.5649 4.21831 15.4858 4.13919C15.4067 4.06007 15.2994 4.01562 15.1875 4.01562ZM6.60938 3.3125C6.60938 3.12602 6.68345 2.94718 6.81532 2.81532C6.94718 2.68345 7.12602 2.60938 7.3125 2.60938H10.6875C10.874 2.60938 11.0528 2.68345 11.1847 2.81532C11.3165 2.94718 11.3906 3.12602 11.3906 3.3125V4.01562H6.60938V3.3125ZM13.6406 15.125C13.6406 15.1623 13.6258 15.1981 13.5994 15.2244C13.5731 15.2508 13.5373 15.2656 13.5 15.2656H4.5C4.4627 15.2656 4.42694 15.2508 4.40056 15.2244C4.37419 15.1981 4.35938 15.1623 4.35938 15.125V4.85938H13.6406V15.125ZM7.73438 7.8125V12.3125C7.73438 12.4244 7.68993 12.5317 7.61081 12.6108C7.53169 12.6899 7.42439 12.7344 7.3125 12.7344C7.20061 12.7344 7.09331 12.6899 7.01419 12.6108C6.93507 12.5317 6.89062 12.4244 6.89062 12.3125V7.8125C6.89062 7.70061 6.93507 7.59331 7.01419 7.51419C7.09331 7.43507 7.20061 7.39062 7.3125 7.39062C7.42439 7.39062 7.53169 7.43507 7.61081 7.51419C7.68993 7.59331 7.73438 7.70061 7.73438 7.8125ZM11.1094 7.8125V12.3125C11.1094 12.4244 11.0649 12.5317 10.9858 12.6108C10.9067 12.6899 10.7994 12.7344 10.6875 12.7344C10.5756 12.7344 10.4683 12.6899 10.3892 12.6108C10.3101 12.5317 10.2656 12.4244 10.2656 12.3125V7.8125C10.2656 7.70061 10.3101 7.59331 10.3892 7.51419C10.4683 7.43507 10.5756 7.39062 10.6875 7.39062C10.7994 7.39062 10.9067 7.43507 10.9858 7.51419C11.0649 7.59331 11.1094 7.70061 11.1094 7.8125Z" fill="#DC716B"/>
      </svg>
    </div>
  )
}
