Package.describe({
  name: 'xavcz:nova-meteor-paris',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core@0.26.5-nova',
    'nova:lib@0.26.5-nova',
    'nova:base-components@0.26.5-nova',
    'xavcz:nova-slack@0.1.0',
    'xavcz:nova-post-by-feed',
  ]);

  api.addFiles([
    'lib/custom_component.js',
    'lib/custom_route.js',
  ], ['client', 'server']);
});
