function Expenseview(props) {
    console.log(props.data[0])

    return (
        <div>
            {props.data.length > 0 ? (
                <>
                    {props.data.map((d, i) => (
                        <ul key={d.id} id={d._id}>
                            <li>ExpenseName:{d.expName}</li>
                            <li>ExpenseAmt:{d.expAmt}</li>
                            <li>ExpenseDate:{d.expDate}</li>
                            <li>ExpenseTime:{d.expTime}</li>
                            <li>ExpensePlace:{d.expPlace}</li>
                            <center><button onClick={() => props.deleteExpFn(d._id)}>delete</button></center>
                            <center><button onClick={() => props.editExpFn(d)}>edit</button></center>
                        </ul>))}
                </>
            ) : (<h1>No Expense found</h1>)};
        </div>
    )
};
export default Expenseview;
