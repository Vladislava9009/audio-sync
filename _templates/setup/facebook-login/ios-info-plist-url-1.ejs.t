---
inject: true
to: ios/<%= project_name %>/Info.plist
after: <dict>
skip_if: <key>CFBundleURLSchemes</key>
---
	<key>CFBundleURLSchemes</key>
	<array>
	</array>