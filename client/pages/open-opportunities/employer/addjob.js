import React from "react";
import { Divider, Form, Input, Button, Select } from "antd";
// === comps ===
import ArrayForm from "../../../comps/ArrayForm";
const { Option } = Select;

function addjob() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="opp-container">
      <Divider orientation="left">Add Company</Divider>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Position"
          name="position"
          rules={[
            {
              required: true,
              message: "Please input job position",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Company"
          name="compay"
          initialValue="lucy"
          rules={[
            {
              required: true,
              message: "Please select a company!",
            },
          ]}
        >
          <Select>
            <Option value="jack">Koompi</Option>
            <Option value="lucy">Vitaminair</Option>
            <Option value="Yiminghe">Grood</Option>
          </Select>
        </Form.Item>

        {/* === requirements array === */}
        <ArrayForm name="requirements" message="Requirement"></ArrayForm>
        {/* === decriptions array === */}
        <ArrayForm name="descriptions" message="Description"></ArrayForm>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Job
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default addjob;