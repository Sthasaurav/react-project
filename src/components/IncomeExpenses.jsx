import React from 'react'

const IncomeExpenses = () => {
    return (
        <div className="container flex justify-center items-center bg-gray pt-4 border">

            <div className=''>
                <h4 className='text-green-400'>Income</h4>
                <p>+$0.00</p></div>

            <div className="ml-6  " >
                <h4 className='text-red-400'>Expense</h4>
                <p>-$0.00</p>
            </div>

        </div>
    )
}

export default IncomeExpenses
