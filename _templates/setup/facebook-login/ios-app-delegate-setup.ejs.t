---
inject: true
to: ios/<%= project_name %>/AppDelegate.m
after: application didFinishLaunchingWithOptions:\(NSDictionary \*\)launchOptions\n.*{
skip_if: FBSDKApplicationDelegate
---
	[[FBSDKApplicationDelegate sharedInstance] application:application
    didFinishLaunchingWithOptions:launchOptions];