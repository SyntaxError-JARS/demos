export default function TechTrainings(props) {
    const techList = props.tech.map((e) => <li>{e}</li>);

    return <ul>{techList}</ul>;
}
