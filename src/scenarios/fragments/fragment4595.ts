import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4593 } from "./fragment4593";
import type { FragmentToken4594 } from "./fragment4594";

export const FRAGMENT_4595 = gql(`
  fragment Fragment4595 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult4595 = ResultOf<typeof FRAGMENT_4595>;
type FragmentSelf4595 = NonNullable<FragmentResult4595>;

export type FragmentToken4595 =
  | FragmentSelf4595["__typename"]
  | FragmentSelf4595["typenameHint"] | FragmentToken4593 | FragmentToken4594;
