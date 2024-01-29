import {useEffect} from 'react'
import './App.css'

function App() {
    const projectData = {
        name: "Test Project",
        description: "This is a test project",
        version: "1.0.0",
        html: "<button id='btnId'>Click Me</button>",
        css: '#btnId {background-color: red;}',
        js: `document.getElementById('btnId').addEventListener('click', () => {alert('Hello World!')})`,
    }; // Данные с бэкенда. Могут точно также пробрасываться через props.

    useEffect(() => {
        // Создаем элемент script внизу страницы.
        const script = document.createElement("script");
        script.innerHTML = projectData.js;
        document.body.appendChild(script);

        // Создаем элемент style внутри тега head.
        const style = document.createElement("style");
        style.innerHTML = projectData.css;
        document.head.appendChild(style);
    }, []);

    return (
        <>
            <div className="flex-col">
                <div className="card" dangerouslySetInnerHTML={{
                    __html: projectData.html,
                }}>
                    {/*Тут пробрасываем html как и раньше*/}
                </div>
            </div>
        </>
    )
}

export default App
