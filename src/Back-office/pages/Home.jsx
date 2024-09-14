import React from 'react';


function Home() {
    return (
        <div className='p-5 bg-white'>
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-currency-dollar fs-1 text-success'></i>
                            <div>
                                <span>Sales</span>
                                <h2>234</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white' >
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-truck fs-1 text-primary'></i>
                            <div>
                                <span>Delivery</span>
                                <h2>240</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white'>
                        <div className=' d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-graph-up-arrow fs-3 text-bg-danger'></i>
                            <div>
                                <span>Increase</span>
                                <h2>20%</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-truck fs-1 text-warning '></i>
                            <div>
                                <span>Delivery</span>
                                <h2>240</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home