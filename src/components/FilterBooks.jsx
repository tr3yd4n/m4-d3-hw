import { InputGroup, FormControl } from 'react-bootstrap'

const FilterBooks = () => (
    <div>
        <InputGroup className="mb-3">

            <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
    </div>
)

export default FilterBooks

