import Ember from 'ember';
import TableContainer from 'ember-table/views/table-container';
import ShowHorizontalScrollMixin from 'ember-table/mixins/show-horizontal-scroll';
import RegisterTableComponentMixin from 'ember-table/mixins/register-table-component';

export default TableContainer.extend(
ShowHorizontalScrollMixin, RegisterTableComponentMixin, {
  templateName: 'table/header-container',
  classNames: ['ember-table-table-container',
      'ember-table-fixed-table-container',
      'ember-table-header-container'],
  height: Ember.computed.alias('tableComponent._headerHeight'),
  width: Ember.computed.alias('tableComponent._tableContainerWidth')
});
