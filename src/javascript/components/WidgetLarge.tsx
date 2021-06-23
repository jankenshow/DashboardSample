import UserImage_1 from '../../images/react.png'

export default function WidgetLarge() {
    const Button = ({ buttonType }: { buttonType: string }): JSX.Element => {
        return (
            <button className={'widgetLargeButton ' + buttonType}>
                {buttonType}
            </button>
        )
    }

    return (
        <div className="widgetLarge">
            <span className="widgetLargeTitle">Latest transactions</span>
            <table className="widgetLargeTable">
                <thead>
                    <tr className="widgetLargeTr">
                        <th className="widgetLargeTh">Customer</th>
                        <th className="widgetLargeTh">Date</th>
                        <th className="widgetLargeTh">Amount</th>
                        <th className="widgetLargeTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src={UserImage_1}
                                alt="userImage"
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">
                                Takayuki Yamada
                            </span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2021</td>
                        <td className="widgetLargeAmount">$122.00</td>
                        <td className="widgetLargeStatus">
                            <Button buttonType={'Approved'} />
                        </td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src={UserImage_1}
                                alt="userImage"
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">
                                Tsuyoshi Muro
                            </span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2021</td>
                        <td className="widgetLargeAmount">$122.00</td>
                        <td className="widgetLargeStatus">
                            <Button buttonType={'Declined'} />
                        </td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src={UserImage_1}
                                alt="userImage"
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">Shin Takuma</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2021</td>
                        <td className="widgetLargeAmount">$122.00</td>
                        <td className="widgetLargeStatus">
                            <Button buttonType={'Pending'} />
                        </td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src={UserImage_1}
                                alt="userImage"
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">
                                Haruka Konami
                            </span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2021</td>
                        <td className="widgetLargeAmount">$122.00</td>
                        <td className="widgetLargeStatus">
                            <Button buttonType={'Approved'} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
