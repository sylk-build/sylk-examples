import React, { ChangeEvent } from 'react';
import { InlineField, Input } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { SylkIotDatasourceOptions, IotQuery } from '../types';

type Props = QueryEditorProps<DataSource, IotQuery, SylkIotDatasourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  const onQueryTopicChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, topic: event.target.value });
  };

  // const onConstantChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   onChange({ ...query, topic: parseFloat(event.target.value) });
  //   // executes the query
  //   onRunQuery();
  // };

  const { topic } = query;

  return (
    <div className="gf-form">
      {/* <InlineField label="Constant">
        <Input onChange={onConstantChange} value={constant} width={8} type="number" step="0.1" />
      </InlineField> */}
      <InlineField label="Query Topic" labelWidth={16} tooltip="Not used yet">
        <Input onChange={onQueryTopicChange} value={topic || ''} />
      </InlineField>
    </div>
  );
}
