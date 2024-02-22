import "../Styles/ToolBar.css"
import searchIcon from "../assets/search.png"
import starIcon from "../assets/star.png"
import settingIcon from "../assets/setting.png"

function ToolBar () {
    
    return (
        <div class="toolbar toolbarContainer">
            <div class="toolbarIcons">
                <img class="toolbarIcon" src={searchIcon} alt="search icon" />
            </div>
            <div class="toolbarIcons">
                <img class="toolbarIcon" src={starIcon} alt="favorite songs icon" />
            </div>
            <div class="toolbarIcons">
                <img class="toolbarIcon" src={settingIcon} alt="settings icon" />
            </div>
        </div>
    )
}

export default ToolBar;