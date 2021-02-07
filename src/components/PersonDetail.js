import React from "react";
import {Image, Table} from "react-bootstrap";
import moment from "moment";
import {getCountryName} from "../services/helper";

const PersonDetail = (props) => {
    const { person } = props;

    if (!person.gender) {
        return null;
    }

    const { name, gender, email, dob, cell, phone, picture, nat: country } = person;

    const fullName = `${name.title} ${name.first} ${name.last}`;

    return (
        <div>
            <p>
                <Image src={picture['large']} roundedCircle />
            </p>

            <Table striped borderless>
                <tbody>
                <tr>
                    <th>Name:</th>
                    <td>{fullName}</td>
                </tr>
                <tr>
                    <th>Date of Birth:</th>
                    <td>{moment(dob['date']).format('DD MMM YYYY')}</td>
                </tr>
                <tr>
                    <th>Age:</th>
                    <td>{dob['age']}</td>
                </tr>
                <tr>
                    <th>Gender:</th>
                    <td>{gender}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>{email}</td>
                </tr>
                <tr>
                    <th>Cell:</th>
                    <td>{cell}</td>
                </tr>
                <tr>
                    <th>Phone:</th>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <th>Country:</th>
                    <td>{getCountryName(country)}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default PersonDetail;