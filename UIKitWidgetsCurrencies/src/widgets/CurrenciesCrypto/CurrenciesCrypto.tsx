import React, {FC, useState} from 'react'

import { TableCurrencies, TableCurrenciesParts, WidgetTitle, StatisticCharts, Input } from '../../components'
import { IconDoubleArrows, IconSearch } from '../../icons'
import * as Styled from './CurrenciesCrypto.styled'

type TCurrenciesCrypto = {
  widgetTitle: string,
  isWidgetTitle?: boolean,
  dataCurrenciesCrypto: any,
  dataCurrenciesStable: any,
  rowsMax?: number,
  rowsMaxStable?: number,
  rowsMaxCrypto?: number
  isVisibleStatisticCharts?: boolean
  hasStatisticBlock?: boolean
}

const CurrenciesCrypto: FC<TCurrenciesCrypto> = ({
  dataCurrenciesCrypto,
  dataCurrenciesStable,
  widgetTitle,
  isWidgetTitle = true,
  rowsMax = 5,
  rowsMaxStable,
  rowsMaxCrypto,
  isVisibleStatisticCharts,
  hasStatisticBlock
}) => {
  const [dataTables, setDataTables] = useState([
    {
      title: 'World currencies',
      inputSearchIcon: <IconSearch fill='#fff' size={14} />,
      inputSearchPlaceholder: 'Search',
      inputSearchType: 'string',
      dataCurrencies: dataCurrenciesStable
    },
    {
      title: 'Cryptocurrencies',
      inputSearchIcon: <IconSearch fill='#fff' size={14} />,
      inputSearchPlaceholder: 'Search',
      inputSearchType: 'string',
      dataCurrencies: dataCurrenciesCrypto
    }
  ])

  const [ dataStatistic, setDataStatistic ] = useState({
    title: 'Changes "BTC/EUR',
    subtitle: 'over 6 months',
    items: ['25119.40 USD', '34974.40 USD'],
    rateChange: '+15.3%'
  })

  const [isVisibleStatistic, setIsVisibleStatistic] = useState(isVisibleStatisticCharts)

  const getStatistic = () => {
    setIsVisibleStatistic(true)
  }

  const onClickChangeTable = () => {
    setDataTables([dataTables[1], dataTables[0]])
    setIsVisibleStatistic(false)
  }

  return (
    <Styled.Wrap>
      {isWidgetTitle && <WidgetTitle title={widgetTitle ?? 'Cryptocurrency converter'} />}

      <Styled.WrapTables>
        <TableCurrencies
          isSelectedDefault
          rowsMax={rowsMaxStable || rowsMax}
          dataItems={dataTables[0].dataCurrencies}
        >
          <TableCurrenciesParts.TableHead>
            <b>{dataTables[0].title}</b>
            <Input
              Icon={dataTables[0].inputSearchIcon}
              type={dataTables[0].inputSearchType}
              placeholder={dataTables[0].inputSearchPlaceholder}
            />
          </TableCurrenciesParts.TableHead>
        </TableCurrencies>

        <Styled.ButtonChangeTable onClick={onClickChangeTable}>
          <IconDoubleArrows size={25} fill='#d1d6dd' />
        </Styled.ButtonChangeTable>

        <TableCurrencies
          dataItems={dataTables[1].dataCurrencies}
          rowsMax={rowsMaxCrypto || rowsMax}
          multiSelect
          hideInput
          callback={getStatistic}
        >
          <TableCurrenciesParts.TableHead>
            <b>{dataTables[1].title}</b>
            <Input
              Icon={dataTables[1].inputSearchIcon}
              type={dataTables[1].inputSearchType}
              placeholder={dataTables[1].inputSearchPlaceholder}
            />
          </TableCurrenciesParts.TableHead>
        </TableCurrencies>
      </Styled.WrapTables>

      {hasStatisticBlock && isVisibleStatistic && (
        <StatisticCharts
          title='Growth charts'
          dataDescription={dataStatistic}
        />
      )}
    </Styled.Wrap>
  )
}

export default CurrenciesCrypto