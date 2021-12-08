import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('');
    useEffect(() => {
        // const handleHashChange = () => console.log(window.location.hash); => url 위치 출력
        const handleHashChange = () => setRoute(window.location.hash.substr(1)); //substr을 통해 /#/gallery -> /gallery로 출력 변환
        window.addEventListener('hashchange', handleHashChange)
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (() => {
        switch(route){
            case '/':
                return <Main />;
            case '/guestbook':
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;        
            default:
                return null;
        }
    })();
}