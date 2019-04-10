import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const propTypes = {
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

const Create = React.memo(({ onCancel, onCreate }) => {
  const [formState, setFormState] = useReducer(
    (state, { field, value }) => ({
      ...state,
      [field]: value,
    }),
    {
      name: '',
      description: '',
    },
  );

  const onSubmit = useCallback(() => onCreate(formState), [formState]);

  return (
    <Modal
      visible
      title="Create new environment"
      centered
      onOk={onSubmit}
      onCancel={onCancel}
      okText="Create"
      cancelText="Cancel"
    >
      <Form {...formItemLayout}>
        <Form.Item label="Name" {...formItemLayout}>
          <Input
            value={formState.name}
            onChange={({ target }) =>
              setFormState({ field: 'name', value: target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Description" {...formItemLayout}>
          <TextArea
            value={formState.description}
            rows={4}
            onChange={({ target }) =>
              setFormState({
                field: 'description',
                value: target.value,
              })
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
});

Create.propTypes = propTypes;

export default Create;
