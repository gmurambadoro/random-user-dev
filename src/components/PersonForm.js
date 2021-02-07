import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {NATIONALITIES} from "../services/random-user-api";
import {getCountryName} from "../services/helper";

const PersonForm = (props) => {
    const { handleCriteriaChanged } = props;

    const [gender, setGender] = useState('any');
    const [country, setCountry] = useState('ANY');

    const nationalities = [...['ANY'], ...NATIONALITIES];

    const handleFormSubmitted = (event) => {
        event.preventDefault();

        handleCriteriaChanged({
            gender,
            nat: country,
        });
    };

    return (
        <Form onSubmit={handleFormSubmitted}>
            <Form.Group>
                <Form.Label>Gender:</Form.Label>
                <Form.Control as={"select"} value={gender} onChange={event => setGender(event.target.value)}>
                    {['any', 'male', 'female'].map(gender => <option key={gender} value={gender}>{gender}</option> )}
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Country:</Form.Label>
                <Form.Control as={"select"} value={country} onChange={event => setCountry(event.target.value)}>
                    {nationalities.map(nationality => <option key={nationality} value={nationality}>{nationality.toUpperCase() === 'ANY' ? 'ANY' : getCountryName(nationality)}</option> )}
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Button type={"submit"} variant={"success"} className="btn-block">Search / Refresh</Button>
            </Form.Group>
        </Form>
    );
};

export default PersonForm;
