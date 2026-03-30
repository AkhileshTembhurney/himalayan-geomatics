import {
    useEffect,
    useState
}

from "react";
import "./StatsSection.css";

function Counter({
    end, text

}) {

    const [count,
    setCount]=useState(0);

    useEffect(()=> {

            let start=0;

            const interval=setInterval(()=> {

                    start +=Math.ceil(end / 50);

                    if (start >=end) {
                        start=end;
                        clearInterval(interval);
                    }

                    setCount(start);

                }

                , 20);

        }

        , [end]);

    return (<div className="stat-box" > <div className="icon-circle" > ⭐ </div> <h2> {
            count
        }

        </h2> <p> {
            text
        }

        </p> </div>);
}


function StatsSection() {

    return (<section className="stats" > <Counter end= {
            854
        }

        text="Completed Projects" /> <Counter end= {
            797
        }

        text="Services Provider" /> <Counter end= {
            658
        }

        text="Happy Clients" /> <Counter end= {
            15
        }

        text="Years Experience" /> </section>);
}

export default StatsSection;