/* Copyright 2018 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an 'AS IS' BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
namespace tf_data_selector {

Polymer({
  is: 'tf-collapsible-data-selector',
  properties: {

    selection: {
      type: Object,
      notify: true,
    },

    activePlugins: Array,

    opened: {
      type: Boolean,
      reflectToAttribute: true,
      value: true,
    },
  },

  _toggleSelector() {
    this.opened = !this.opened;
  },

  _getExperimentStyle(experiment) {
    if (!experiment) return '';

    const color = tf_color_scale.experimentsColorScale(experiment.name);
    return `background-color: ${color};`;
  },

});

}  // namespace tf_data_selector
