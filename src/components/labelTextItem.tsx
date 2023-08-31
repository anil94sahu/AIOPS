import React from 'react'
import Text from './text'

type LabelTextItemPropsType = {
    label: string;
    text?: string;
    action?: any;
}

const LabelTextItem = ({label, text, action} : LabelTextItemPropsType) => {
    return (
        <div className="label-text-item">
            <Text type="LABEL" className="lti-label" text={label} />
            <div className="lti-text">
                {text && <Text type="SPAN" className="lti-text-span" text={text} />}
                {action}
            </div>
        </div>
    )
}

export default LabelTextItem