---
inject: true
to: ios/<%= project_name %>/Info.plist
after: <dict>
skip_if: <key>FacebookAppID</key>
---
	<key>FacebookAppID</key>
	<string><%= ios_facebook_app_id %></string>
	<key>FacebookDisplayName</key>
	<string><%= project_name %></string>
	<key>LSApplicationQueriesSchemes</key>
	<array>
		<string>fbapi</string>
		<string>fb-messenger-share-api</string>
		<string>fbauth2</string>
		<string>fbshareextension</string>
	</array>