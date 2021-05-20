import { Tooltip, OverlayTrigger } from 'react-bootstrap'

const renderTooltipAddProcesso = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Adiciona Mues Processos
    </Tooltip>
  )
  
  return
    (
        <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
        >
        <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>,
    )

  export default renderTooltip