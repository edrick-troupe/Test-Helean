import shopData from './data/shop.json'

import PrecisionRoll from './GrapheG'

function ShopInformation() {

    const allScoresData = shopData.data.map((score, index) => {
        return (
        <div className="shop-score modal-container">
            <div className="shop-score-number">
                <h3>Score n°{index + 1}</h3>
                <p>{score.mean_shop}</p>
            </div>
            <div className="shop-score-graph">
                <p>R</p>
                {PrecisionRoll(score.R)}
            </div>
        </div>
        )
    })

    const allScores = shopData.data.map((score) => {
        return score.R;
    })

    const totalScores = allScores.reduce((total, rate) => {
        const totalRates = total += rate;
        return totalRates;
    }) 

    const averageScore = Number((totalScores / allScores.length).toFixed(1));    

    return (
        <>
            <div className="primary-information">

                <div className='shop-picture modal-container'>
                    <img src={shopData.shop_picture} alt={shopData.shop_name} />
                </div>
                <div className="shop-total-score modal-container">
                    <h2>Score Total</h2>
                    <div className='shop-total-score-graph'>
                        {PrecisionRoll(averageScore)}
                    </div>
                </div>
                <div className="shop-basic-data">
                    <p>{shopData.shop_name}</p>
                    <p>{shopData.shop_adress}</p>
                    <p>{shopData.shop_manager_name} {shopData.shop_manager_surname}</p>
                </div>

            </div>
            <div className="score-information">
                {allScoresData}
            </div>
        </>
    )
  }

export default ShopInformation