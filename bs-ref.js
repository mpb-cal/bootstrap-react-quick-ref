let Row = ReactBootstrap.Row;
let Col = ReactBootstrap.Col;

let e = React.createElement;

const CurrentSize = (props) => (
  e('h3', {...props, style: {backgroundColor: 'white', }},
    "Current Size: ",
    e("span", {className: "d-sm-none d-inline"}, "xs"),
    e("span", {className: "d-none d-sm-inline d-md-none"}, "sm"),
    e("span", {className: "d-none d-md-inline d-lg-none"}, "md"),
    e("span", {className: "d-none d-lg-inline d-xl-none"}, "lg"),
    e("span", {className: "d-none d-xl-inline"}, "xl"),
  )
);

const TitledEl = (props) => {
  let propString = '';
  for (let p in props) {
    propString += p + '={' + props[p] + '} ';
  }

  return e(Col, props, 'Col ' + propString);
}

const TextCol = (props) => (
  e(Col, {className: props.className, }, 'Col className="' + props.className + '" Labore et accusamus nemo neque nostrum sit laborum cum. Distinctio quo odit ea repellat sunt. Eum numquam error fuga aut dolores aspernatur in sint. Nobis totam architecto atque nesciunt blanditiis repellendus totam rerum. Sequi aspernatur adipisci aut fugit quos necessitatibus aut ad. Vel ut doloribus sed.')
);

const AlignSpan = (props) => (
  e('td', {className: props.className},
    'td className="' + props.className + '"',
  )
)

ReactDOM.render(
  e("div", {},
    e("h1", {className: '', style: {}}, "bootstrap-react Reference Guide"),
    e("h5", {className: 'fixed-bottom text-right ', style: {backgroundColor: 'white', }}, "bootstrap-react Reference Guide fixed-bottom"),
    e(CurrentSize, {className: 'sticky-top'}),
    e(ReactBootstrap.Container, {fluid: true},
      "Container fluid:",
      e(Row, {},
        e(Col, {}, 'Col'),
        e(Col, {}, 'Col'),
        e(Col, {}, 'Col')
      ),
    ),
    e(ReactBootstrap.Container, {},
      "Container:",
      e(Row, {},
        e(Col, {}, 'Col'),
        e(Col, {}, 'Col'),
        e(Col, {}, 'Col')
      ),
      e(Row, {},
        e(TitledEl, {xs: 4}),
        e(TitledEl, {xs: 4}),
        e(TitledEl, {xs: 4}),
      ),
      e(Row, {},
        e(Col, {xs: true}, 'Col xs'),
        e(Col, {xs: true}, 'Col xs'),
        e(Col, {xs: true}, 'Col xs')
      ),
      e(Row, {},
        e(TitledEl, {sm: 6}),
        e(TitledEl, {sm: 6}),
      ),
      e(Row, {},
        e(TitledEl, {md: 4}),
        e(TitledEl, {md: 4}),
        e(TitledEl, {md: 4}),
      ),
      e(Row, {},
        e(Col, {md: true}, 'Col md'),
        e(Col, {md: true}, 'Col md'),
        e(Col, {md: true}, 'Col md')
      ),
      e(Row, {},
        e(TitledEl, {md: 3}),
        e(TitledEl, {md: 6}),
        e(TitledEl, {md: 3}),
      ),
      e(Row, {},
        e(Col, {md: {span: 3}}, 'Col md={{span: 3}}'),
        e(Col, {md: {span: 6}}, 'Col md={{span: 6}}'),
        e(Col, {md: {span: 3}}, 'Col md={{span: 3}}')
      ),
      e(Row, {},
        e(Col, {md: {span: 3, offset: 2}}, 'Col md={{span: 3, offset: 2}}'),
        e(Col, {md: {span: 3}}, 'Col md={{span: 3}}'),
        e(Col, {md: {span: 3}}, 'Col md={{span: 3}}')
      ),
      e(Row, {},
        e(Col, {lg: {span: 4, order: 3}, sm: 4}, '1: Col lg={{span: 4, order: 3}} sm={4}'),
        e(Col, {lg: {span: 4, order: 2}, sm: 4}, '2: Col lg={{span: 4, order: 2}} sm={4}'),
        e(Col, {lg: {span: 4, order: 1}, sm: 4}, '3: Col lg={{span: 4, order: 1}} sm={4}')
      ),
      e(Row, {},
        e(TitledEl, {xs: 'auto'}),
        e(TitledEl, {xs: 'auto'}),
        e(TitledEl, {xs: 'auto'}),
      ),
      e(Row, {},
        e(Col, {md: 'auto'}, 'Col md="auto"'),
        e(Col, {md: 'auto'}, 'Col md="auto"'),
        e(Col, {md: 'auto'}, 'Col md="auto"'),
      ),
      'Row className="justify-content-start":',
      e(Row, {className: "justify-content-start"},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      'Row className="justify-content-center":',
      e(Row, {className: "justify-content-center"},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      'Row className="justify-content-end":',
      e(Row, {className: "justify-content-end"},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      'Row className="justify-content-around":',
      e(Row, {className: "justify-content-around"},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      'Row className="justify-content-between":',
      e(Row, {className: "justify-content-between"},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      'Row className="justify-content-lg-end":',
      e(Row, {className: "justify-content-lg-end"},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      'Row className="align-items-start":',
      e(Row, {className: "align-items-start", style: {minHeight: '50px'}},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      'Row className="align-items-center":',
      e(Row, {className: "align-items-center", style: {minHeight: '50px'}},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      'Row className="align-items-end":',
      e(Row, {className: "align-items-end", style: {minHeight: '50px'}},
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
        e(Col, {xs: 3}, 'Col xs={3}'),
      ),
      e(Row, {className: "", style: {minHeight: '80px'}},
        e(Col, {className: 'align-self-start', }, 'Col className="align-self-start"'),
        e(Col, {className: 'align-self-center', }, 'Col className="align-self-center"'),
        e(Col, {className: 'align-self-end', }, 'Col className="align-self-end"'),
      ),
      e(Row, {},
        e(TextCol, {className: 'text-left'}),
        e(TextCol, {className: 'text-center'}),
        e(TextCol, {className: 'text-right'}),
        e(TextCol, {className: 'text-justify'}),
      ),
      e(Row, {},
        e(TextCol, {className: 'text-wrap'}),
        e(TextCol, {className: 'text-wrap'}),
        e(TextCol, {className: 'text-wrap'}),
        e(TextCol, {className: 'text-wrap'}),
      ),
      e(Row, {},
        e(TextCol, {className: 'text-nowrap'}),
        e(TextCol, {className: 'text-nowrap'}),
        e(TextCol, {className: 'text-nowrap'}),
        e(TextCol, {className: 'text-nowrap'}),
      ),
      e(Row, {},
        e(TextCol, {className: 'text-truncate'}),
        e(TextCol, {className: 'text-truncate'}),
        e(TextCol, {className: 'text-truncate'}),
        e(TextCol, {className: 'text-truncate'}),
      ),
      e(Row, {},
        e(TextCol, {className: 'text-break'}),
        e(TextCol, {className: 'text-break'}),
        e(TextCol, {className: 'text-break'}),
        e(TextCol, {className: 'text-break'}),
      ),
      e(Row, {},
        e(TextCol, {className: 'text-wrap'}),
        e(TextCol, {className: 'text-nowrap'}),
        e(TextCol, {className: 'text-truncate'}),
        e(TextCol, {className: 'text-break'}),
      ),
      e(Row, {},
        e(TextCol, {className: 'font-weight-normal'}),
        e(TextCol, {className: 'font-weight-bold'}),
        e(TextCol, {className: 'font-weight-bolder'}),
        e(TextCol, {className: 'font-weight-light'}),
        e(TextCol, {className: 'font-weight-lighter'}),
        e(TextCol, {className: 'font-italic'}),
      ),
      e(Row, {},
        e(TextCol, {className: 'text-monospace'}),
        e(TextCol, {className: 'text-muted'}),
        e(TextCol, {className: 'text-reset'}),
        e(TextCol, {className: 'text-decoration-none'}),
      ),
      e(Row, {},
        e(Col, {className: 'overflow-auto', style: {height: '80px', }}, '.overflow-auto, height: 80px Labore et accusamus nemo neque nostrum sit laborum cum. Distinctio quo odit ea repellat sunt. Eum numquam error fuga aut dolores aspernatur in sint. Nobis totam architecto atque nesciunt blanditiis repellendus totam rerum. Sequi aspernatur adipisci aut fugit quos necessitatibus aut ad. Vel ut doloribus sed.'),
        e(Col, {className: 'overflow-hidden', style: {height: '80px', }}, '.overflow-hidden, height: 80px Labore et accusamus nemo neque nostrum sit laborum cum. Distinctio quo odit ea repellat sunt. Eum numquam error fuga aut dolores aspernatur in sint. Nobis totam architecto atque nesciunt blanditiis repellendus totam rerum. Sequi aspernatur adipisci aut fugit quos necessitatibus aut ad. Vel ut doloribus sed.'),
        e(Col, {className: '', style: {}}, 'Labore et accusamus nemo neque nostrum sit laborum cum. Distinctio quo odit ea repellat sunt. Eum numquam error fuga aut dolores aspernatur in sint. Nobis totam architecto atque nesciunt blanditiis repellendus totam rerum. Sequi aspernatur adipisci aut fugit quos necessitatibus aut ad. Vel ut doloribus sed.'),
      ),
      e('table', {border: 1},
        e('tr', {},
          e('td', {},
            'Labore et accusamus nemo neque nostrum sit laborum cum. Distinctio quo odit ea repellat sunt. Eum numquam error fuga aut dolores aspernatur in sint. Nobis totam architecto atque nesciunt blanditiis repellendus totam rerum. Sequi aspernatur adipisci aut fugit quos necessitatibus aut ad. Vel ut doloribus sed.'
          ),
          e(AlignSpan, {className: 'align-baseline'}),
          e(AlignSpan, {className: 'align-top'}),
          e(AlignSpan, {className: 'align-middle'}),
          e(AlignSpan, {className: 'align-bottom'}),
          e(AlignSpan, {className: 'align-text-top'}),
          e(AlignSpan, {className: 'align-text-bottom'}),
        )
      ),
      e(Row, {className: "mb-5"},
        e(TitledEl, {className: "mt-5"}),
        e(TitledEl, {className: "mt-4"}),
        e(TitledEl, {className: "mt-3"}),
        e(TitledEl, {className: "mt-2"}),
        e(TitledEl, {className: "mt-1"}),
        e(TitledEl, {className: "mt-0"}),
      ),
      e(Row, {className: "mt-5"},
        e(TitledEl, {className: "mt-0"}),
        e(TitledEl, {className: "mt-n1"}),
        e(TitledEl, {className: "mt-n2"}),
        e(TitledEl, {className: "mt-n3"}),
        e(TitledEl, {className: "mt-n4"}),
        e(TitledEl, {className: "mt-n5"}),
      ),
      e(Row, {},
        e(TitledEl, {className: "mt-3"}),
        e(TitledEl, {className: "mb-3"}),
        e(TitledEl, {className: "my-3"}),
        e(TitledEl, {className: "ml-3"}),
        e(TitledEl, {className: "mr-3"}),
        e(TitledEl, {className: "mx-3"}),
        e(TitledEl, {className: "m-3"}),
      ),
      e(Row, {},
        e(TitledEl, {className: "pt-5"}),
        e(TitledEl, {className: "pb-5"}),
        e(TitledEl, {className: "py-5"}),
        e(TitledEl, {className: "pl-5"}),
        e(TitledEl, {className: "pr-5"}),
        e(TitledEl, {className: "px-5"}),
        e(TitledEl, {className: "p-5"}),
      ),
      e('table', {border: 1, className: "float-right", },
        e('tr', {},
          e('td', {},
            'table class=float-right Labore et accusamus nemo neque nostrum sit laborum cum.'
          ),
        )
      ),
      e('div', {className: 'py-5'}),
    ),
  ),
  document.getElementById("root")
);

