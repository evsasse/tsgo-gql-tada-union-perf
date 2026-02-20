import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4331 } from "./fragment4331";
import type { FragmentToken4332 } from "./fragment4332";

export const FRAGMENT_4333 = gql(`
  fragment Fragment4333 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult4333 = ResultOf<typeof FRAGMENT_4333>;
type FragmentSelf4333 = NonNullable<FragmentResult4333>;

export type FragmentToken4333 =
  | FragmentSelf4333["__typename"]
  | FragmentSelf4333["typenameHint"] | FragmentToken4331 | FragmentToken4332;
