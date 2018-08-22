import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './form.less';

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export class FormComponent extends Component {

    state = {
        date: new Date(),
        hours: 0,
        workedHours: 0,
        netSalary: 0,
        grossSalary: 0
    };

    static calculateNetSalary = (salary, workedHours, hours) => {
        return salary * hours / workedHours;
    };

    static calculateGrossSalary = quota => {

    };

    getNumberOfDaysInMonth = month => {
        return monthDays[month];
    };

    getNumberOfHoursInMonth = () => {
        return this.getNumberOfDaysInMonth(this.state.date.getMonth()) * 8;
    };

    onChangeDate = date => this.setState({ date });

    render() {
        return (
            <div className="form-component">
                <div className="form-group">
                    <label className="form-label">Rozliczam się za miesiąc:</label>
                    <input type='text' className="form-input" name="monthHours" placeholder="" value={this.state.date.getMonth()} />
                    <Calendar onChange={this.onChangeDate} maxDetail="year" />
                    <strong>Liczba dni w danym miesiącu:</strong> {this.getNumberOfDaysInMonth(this.state.date.getMonth())} <br />
                    <strong>Liczba godzin w danym miesiącu:</strong>{this.getNumberOfHoursInMonth()}
                </div>
                <div className="form-group">
                    <label className="form-label">Liczba godzin przepracowanych:</label>
                    <input type='text' className="form-input" name="workedHours" placeholder="" value={this.state.workedHours} />
                </div>
                <div className="form-group">
                    <label className="form-label">Ile zarabiasz miesięcznie netto?:</label>
                    <input type='text' className="form-input" name="netSalary" placeholder="" value={this.state.netSalary} />
                </div>
                <div className="form-group">
                    <select className="form-select" name="vatPercentage">
                        <option>wybierz oprocentowanie:</option>
                        <option>zw.</option>
                        <option>23%</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Ile zarobiłeś w tym miesiącu netto?:</label>
                    {FormComponent.calculateNetSalary()}
                </div>
                <div className="form-group">
                    <label className="form-label">Ile zarobiłeś w tym miesiącu brutto?:</label>
                    {FormComponent.calculateGrossSalary()}
                    {this.state.grossSalary}
                </div>
            </div>
        )
    }
}
