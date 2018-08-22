import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './form.less';

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export class FormComponent extends Component {

    state = {
        calendarVisible: false,
        date: new Date(),
        hours: 160,
        month: 0,
        monthDays: 0,
        workedHours: 0,
        netSalary: 0,
        percent: 0,
        grossSalary: 0,
        firstName: '',
        lastName: ''
    };

    getNumberOfDaysInMonth = month => {
        return monthDays[month];
    };

    getNumberOfHoursInMonth = () => {
        return this.getNumberOfDaysInMonth(this.state.date.getMonth()) * 8;
    };

    onChangeDate = date => this.setState({ date });

    handleInputChange = (value, name) => {
        this.setState({ [name]: value });
    };

    toggleCalendar = () => {
        this.setState({ calendarVisible: !this.state.calendarVisible });
        console.error(this.state.calendarVisible);
    };

    render() {
        return (
            <div className="form">

                <div className="personal-data form__container">

                    <div className="form-group">
                        <label className="form-label">Imię:</label>
                        <input type='text'
                               className="form-input"
                               name="firstName"
                               value={this.state.firstName}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Nazwisko:</label>
                        <input type='text'
                               className="form-input"
                               name="lastName"
                               value={this.state.lastName}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}
                        />
                    </div>
                </div>

                <div className="salary-calculation form__container">

                    <div className="form-group">
                        <label className="form-label">Rozliczam się za miesiąc:</label>
                        <input type='text'
                               className="form-input"
                               name="hours" placeholder=""
                               value={this.state.date.getMonth()}
                               onClick={this.toggleCalendar}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}
                        />
                        {
                            this.state.calendarVisible &&
                            <Calendar onChange={this.onChangeDate} maxDetail="year" />
                        }
                        <strong>Liczba dni w danym miesiącu:</strong> {this.getNumberOfDaysInMonth(this.state.date.getMonth())} <br />
                        <strong>Liczba godzin w danym miesiącu:</strong>{this.getNumberOfHoursInMonth()}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Liczba godzin przepracowanych:</label>
                        <input type='text'
                               className="form-input"
                               name="workedHours"
                               value={this.state.workedHours}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Ile zarabiasz miesięcznie netto?:</label>
                        <input type='text'
                               className="form-input"
                               name="netSalary"
                               value={this.state.netSalary}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}
                        />
                    </div>

                    <div className="form-group">
                        <select className="form-select" name="percent"
                                value={this.state.percent}
                                onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}>
                            <option>wybierz oprocentowanie:</option>
                            <option value="0">zw.</option>
                            <option value="0.23">23%</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Ile zarobiłeś w tym miesiącu netto?:</label>
                        {this.state.netSalary * this.state.hours / this.state.workedHours}<br/>
                        {this.state.netSalary}<br/>{this.state.workedHours}
                        <br/>
                        {this.state.hours}
                        <br/>
                        {this.state.percent}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Ile zarobiłeś w tym miesiącu brutto?:</label>
                        {Number(this.state.netSalary) + Number(this.state.netSalary * this.state.percent)}
                    </div>
                </div>
            </div>
        );
    }
}
