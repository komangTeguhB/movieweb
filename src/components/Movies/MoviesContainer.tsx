import { StyledMoviesContainer } from "./moviesStyles";
import Grid from "./Grid";

type Props = {
    movies: object[];
}

export default function Main(props: Props) {
    console.log(props.movies);
    // const items = [
    //     {title: "sample 1", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 2", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 3", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 4", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 5", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 6", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 7", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 8", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 9", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 10", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 11", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    //     {title: "sample 12", imageUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"},
    // ]

    const renderMovieGrid = (items: object[]) => {
        return items.map((element: any, index: number) => (
            <div className="grid-item">
                <Grid title={element.original_title} imageUrl={element.poster_path} keyItem={`grid-${index}`}></Grid>
            </div>
        ))
    }

    return (
        <StyledMoviesContainer>
            <div className="page-container">
                <div className="content-container">
                    <div className="shadow-box">
                        {props.movies.length > 0 ?
                            renderMovieGrid(props.movies)
                        : <></>}
                    </div>
                </div>
            </div>
        </StyledMoviesContainer>
    )
}