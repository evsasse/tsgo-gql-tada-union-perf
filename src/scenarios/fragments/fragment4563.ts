import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4561 } from "./fragment4561";
import type { FragmentToken4562 } from "./fragment4562";

export const FRAGMENT_4563 = gql(`
  fragment Fragment4563 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult4563 = ResultOf<typeof FRAGMENT_4563>;
type FragmentSelf4563 = NonNullable<FragmentResult4563>;

export type FragmentToken4563 =
  | FragmentSelf4563["__typename"]
  | FragmentSelf4563["typenameHint"] | FragmentToken4561 | FragmentToken4562;
