import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './form.less';

const workingDaysPerMonth = [21, 20, 22, 20, 20, 21, 22, 22, 20, 23, 21, 19];

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
        return workingDaysPerMonth[month];
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

                <div className="salary-entry-data form__container">

                    <div className="form-group">
                        <label className="form-label">Imię: </label>
                        <input type='text'
                               className="form-input"
                               name="firstName"
                               value={this.state.firstName}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Nazwisko: </label>
                        <input type='text'
                               className="form-input"
                               name="lastName"
                               value={this.state.lastName}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Rozliczam się za miesiąc:</label>
                        <Calendar onChange={this.onChangeDate} maxDetail="year" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Liczba godzin przepracowanych: </label>
                        <input type='text'
                               className="form-input"
                               name="workedHours"
                               value={this.state.workedHours}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Ile zarabiasz miesięcznie netto?: </label>
                        <input type='text'
                               className="form-input"
                               name="netSalary"
                               value={this.state.netSalary}
                               onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">VAT %: </label>
                        <select className="form-select" name="percent"
                                value={this.state.percent}
                                onChange={({ target: { value, name } }) => this.handleInputChange(value, name)}>
                            <option>wybierz oprocentowanie:</option>
                            <option value="0">zw.</option>
                            <option value="0.05">5%</option>
                            <option value="0.08">8%</option>
                            <option value="0.23">23%</option>
                        </select>
                    </div>
                </div>

                <div className="salary-calculation form__container">

                    <div className="form-group">
                        <strong>Imię i nazwisko pracownika: </strong>
                        {this.state.firstName}&nbsp;{this.state.lastName}
                    </div>
                    <div className="form-group">
                        <strong>Liczba dni roboczych w danym miesiącu: </strong> {this.getNumberOfDaysInMonth(this.state.date.getMonth())} <br />
                    </div>

                    <div className="form-group">
                        <strong>Liczba godzin roboczych w danym miesiącu: </strong>{this.getNumberOfHoursInMonth()}
                    </div>

                    <div className="form-group">
                        <strong>% VAT: </strong>{this.state.percent * 100} %
                    </div>

                    <div className="form-group">
                        <strong>Ile zarobiłeś w tym miesiącu netto?: </strong>
                        {this.state.netSalary * this.state.workedHours / this.state.hours}
                    </div>

                    <div className="form-group">
                        <strong>Ile zarobiłeś w tym miesiącu brutto?: </strong>
                        {Number(this.state.netSalary * this.state.workedHours / this.state.hours) + Number(this.state.netSalary * this.state.percent)}
                    </div>
                </div>
            </div>
        );
    }
}
