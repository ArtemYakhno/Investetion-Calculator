const ResultItem = (props) => {
return (<tr>
    <td>{props.year}</td>
    <td>${props.toralSavings}</td>
    <td>${props.interestGainedYear}</td>
    <td>${props.totalInterestGained}</td>
    <td>${props.totalInvestedCapital}</td>
  </tr> )
}
export default ResultItem;