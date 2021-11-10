import './widgetLg.css';

export default function WidgetLg() {
    const Button = ({type}) =>
    {
        return <button className={"widgetlgButton"+type}> {type} </button>
    }
  return (
    <div className="widgetlg">
      <h3 className="widgetlgTitle">Latest Transaction</h3>
      <table className="widgetlgTable">
          <tr className="widgetlgTr">
              <th className="widgetlgTh">Customer</th>
              <th className="widgetlgTh">Date</th>
              <th className="widgetlgTh">Amount</th>
              <th className="widgetlgTh">Status</th>
          </tr>

          <tr  className="widgetlgTr">
              <td className="widgetlgUser">
              <img src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg"
                  alt=""
                  className="widgetlgImg"
                  />
                  <span className="widgetlgName">Ishant Usrethe</span>
              </td>
              <td className="widgetlgDate">9 Nov 2021</td>
              <td className="widgetlgAmount">$120</td>
              <td className="widgetlgStatus">
                  <Button type="Approved"/>
              </td>     
          </tr>
          <tr  className="widgetlgTr">
              <td className="widgetlgUser">
              <img src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg"
                  alt=""
                  className="widgetlgImg"
                  />
                  <span className="widgetlgName">Ishant Usrethe</span>
              </td>
              <td className="widgetlgDate">9 Nov 2021</td>
              <td className="widgetlgAmount">$120</td>
              <td className="widgetlgStatus">
                  <Button type="Declined"/>
              </td>     
          </tr>
          <tr  className="widgetlgTr">
              <td className="widgetlgUser">
                  <img src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg"
                  alt=""
                  className="widgetlgImg"
                  />
                  <span className="widgetlgName">Ishant Usrethe</span>
              </td>
              <td className="widgetlgDate">9 Nov 2021</td>
              <td className="widgetlgAmount">$120</td>
              <td className="widgetlgStatus">
                  <Button type="Pending"/>
              </td>     
          </tr>
      </table>
    </div>
  )
}
