import { useEffect } from "react"
import React from 'react'



function Menu({ title, menuObject }) {
    useEffect(() => {
        const allLi = document.querySelector('.MenuContainer ul')
            .querySelectorAll('li');

        function ChangeMenuActive() {
            allLi.forEach(n => n.classList.remove('active'))
            this.classList.add('active')
        }
        allLi.forEach((n) => n.addEventListener('click', ChangeMenuActive))
    }, []);

    return <div className='MenuContainer'>
        <div className="title">{title}</div>
        <ul>
            {
                menuObject && menuObject.map((menu) => (
                    <li key={menu.id}>
                        <p href="#">
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </p>
                    </li>
                ))
            }
        </ul>
    </div>

}

export { Menu }
