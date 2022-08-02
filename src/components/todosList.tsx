import * as React from 'react'

type AppProps = {
    description?: string,
    responsible?: string,
    priority?: string,
    completed?: boolean
}

const TodosList = ({ description, responsible, priority, completed }: AppProps) => {
    // const [isShowAlert, setShowAlert] = React.useState(false);

    return (
        <React.Fragment>
            <div>todosList {description}</div>
        </React.Fragment>
    )
}

export default TodosList