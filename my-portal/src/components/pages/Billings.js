import React, { Component } from 'react';

var bills = [
	{
		bill_id: 1,system_bill_id: "03-2001",date: new Date('2017-05-05'),
		time: '6:04 PM',mode_of_payment: "CASH", total_qty: 1, total: 9.5, counter_no: "GDS/03",
	},
	{
		bill_id: 2,system_bill_id: "03-2002",date: new Date('2017-06-05'),
		time: '6:18 PM', mode_of_payment: "CASH", total_qty: 1, total: 119, counter_no: "PAT/03",
	},
];


class BillRow extends Component {
	render()	{
		const bill = this.props.bill;
		return (
			<tr>
				<td>{bill.bill_id}</td>
				<td>{bill.system_bill_id}</td>
				<td>{bill.date.toDateString()}</td>
				<td>{bill.time}</td>
				<td>{bill.mode_of_payment}</td>
				<td>{bill.total_qty}</td>
				<td>{bill.total}</td>
				<td>{bill.counter_no}</td>
			</tr>
		);
	}
}

class BillTable extends Component	{
	render()	{
		const billRows = this.props.bills.map(bill => <BillRow key = {bill.bill_id} bill = {bill}/>);
		return (
			<table>
				<thead>
					<tr>
						<th>Bill Id</th>
						<th>System bill Id</th>
						<th>Date</th>
						<th>Time</th>
						<th>Mode Of Payment</th>
						<th>Total quantity</th>
						<th>Total</th>
						<th>Counter Number</th>
					</tr>
				</thead>
				<tbody>
				{billRows}
				</tbody>
			</table>
		);
	}
}

class Billings extends Component {
  render() {
    return (
      <div id="billings-container">
        <h3 style = {{color: "white"}}> List of Bills </h3>
        <BillTable bills = {bills} />
      </div>
    );
  }
}

export default Billings;
