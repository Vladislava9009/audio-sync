---
inject: true
to: ios/<%= project_name %>/AppDelegate.m
before: \@end
skip_if: openURL:\(NSURL \*\)url
---

- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{

  if ([RCTLinkingManager application:app openURL:url options:options]) {
    return YES;
  }

  return NO;
}

