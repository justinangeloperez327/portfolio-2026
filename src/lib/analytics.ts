export const analyticsEvents = {
  projectView: "project_view",
  contactClick: "contact_click",
  externalProfileClick: "external_profile_click",
} as const;

export type AnalyticsEvent =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsProperties = Readonly<
  Record<string, string | number | boolean>
>;

export function trackEvent(
  _event: AnalyticsEvent,
  _properties?: AnalyticsProperties,
) {
  // Provider intentionally not wired yet.
  // Keep this boundary stable so a privacy-reviewed provider can be added
  // without coupling UI components to a vendor SDK.
}
