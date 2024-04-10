interface UnixToRegularTimeProps {
    unixTime: number
    className?: string
}

const UnixToRegularTime = ({ unixTime }: UnixToRegularTimeProps) => {
    const regularTime = new Date(unixTime * 1000).toLocaleString();
    return ( 
        <>
            <p>Время создания поста: {regularTime.slice(11, 20)}</p>
            <p>Дата создания поста: {regularTime.slice(0, 10)}</p>
        </>
     );
}
 
export default UnixToRegularTime;