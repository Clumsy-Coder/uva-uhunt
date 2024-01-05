type Props = {
  status: number;
  message?: string;
}

const Error = ({status, message}: Props) => {
  return (
    <div className='h-[calc(100vh-8rem)] flex flex-col justify-center items-center'>
      <h1 className='text-6xl'>{status}</h1>
      {message && (
      <p>{message}</p>
      )}
    </div>
  )
}

export default Error

