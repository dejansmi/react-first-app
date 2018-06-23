import React from 'react';


class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.onChange(event);
    };


    render() {

        const {
            onChange,
            options,
            label,
            className,
            ...attributes
        } = this.props;



        return (
            <select {...attributes} onChange={onChange} className={className}>
                <option value="">{label}</option>
                {Object.keys(options).map((key) =>
//                    <option value={options[key].value}>{options[key].label}</option>
                    <option value={options[key].value}>{options[key].label}</option>
                )};

            </select>
        )
    }
}

Select.defaultProps = {
};

export default Select;