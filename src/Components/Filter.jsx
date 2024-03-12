import { FormCheck , Button } from "react-bootstrap";

const Filter = () =>{
    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <FormCheck
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`} />

            </span>
            <span>
            <FormCheck
                inline
                label="Descending"
                name="group1"
                type="radio"
                id={`inline-2`} />

            </span>
         
            <span>
            <FormCheck
                inline
                label="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={`inline-3`} />
            </span>
            <span>
                {/* <label style={{ paddingRight: 10}}>Rating:</label> */}

            </span>
            <Button variant="light">Clear Filters</Button>
        </div>
    )
}
export default Filter;