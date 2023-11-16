import loadingGif from "../assets/loading.gif"

function Loading() {
    return(
        <div className="loading-container">
            <img src={loadingGif} alt=""/>
        </div>
    )
}

export default Loading