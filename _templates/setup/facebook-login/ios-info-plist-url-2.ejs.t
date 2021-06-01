---
inject: true
to: ios/<%= project_name %>/Info.plist
after: <key>CFBundleURLTypes<\/key>\n.*<array>
skip_if: <string>fb<%= ios_facebook_app_id %></string>
---
		<dict>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>fb<%= ios_facebook_app_id %></string>
			</array>
		</dict>