---
inject: true
to: ios/<%= project_name %>/AppDelegate.m
after: options:\(NSDictionary\<UIApplicationOpenURLOptionsKey,id\> \*\)options\n.*{
skip_if: \[RNGoogleSignin application:application
---
  if ([[FBSDKApplicationDelegate sharedInstance] application:app openURL:url options:options]) {
    return YES;
  }
