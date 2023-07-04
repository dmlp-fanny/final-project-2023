export default function PostRequestsBtn () {

    const handleClick = () => {
        console.log('clickity');
    }
    return (
        <div className="postRequestsBtn" onClick={handleClick}>
            <h3>Post a New Request +</h3>
        </div>
    )
}