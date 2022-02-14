
//components
import Thumbnail from "../thumbnail";

import FlipMove from "react-flip-move";

const Results = ({results}) => {
    //console.log(results)

    return (
        <FlipMove className={"px-5 my-10 sm:grid md:grid-cols-2 gap-2  xl:grid-cols-4 " +
            "3xl:flex flex-wrap justify-center"}>
            {results.map((result) => (
                <Thumbnail
                    key={result.id}
                    result={result}
                />
            ) )}
            {/**Render ThumbNail**/}
        </FlipMove>
    )
}
export default Results;