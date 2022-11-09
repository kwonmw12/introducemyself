function bgColor(a){
    document.body.classList = a;
}



function Hd() {
    return(
        <header id="hd">
            <div className="container d-flex justify-content-between align-items-center">
                <h1><a href=""><img src="./logo192.png" alt="" /></a></h1>
                <ul id="gnb" className="d-flex">
                    <li><a href="">프로젝트형 포폴</a></li>
                    <li><a href="">사전인터뷰</a></li>
                    <li><a href="">다른 관점에서 나란</a></li>
                    <li><a href="">나란놈은 답은 너다</a></li>
                </ul>
                <div className="btns">
                    <button onClick={() => {bgColor('bg-dark');}} className="border-dark text-white bg-dark">검게</button>
                    <button onClick={() => {bgColor('bg-white');}} className="border-dark text-dark bg-white">하얗게</button>
                </div>
            </div>
        </header>
    )    
}

export default Hd; /*이게 조금더 조음*/
