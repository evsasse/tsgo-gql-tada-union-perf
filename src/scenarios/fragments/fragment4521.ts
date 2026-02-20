import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4519 } from "./fragment4519";
import type { FragmentToken4520 } from "./fragment4520";

export const FRAGMENT_4521 = gql(`
  fragment Fragment4521 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult4521 = ResultOf<typeof FRAGMENT_4521>;
type FragmentSelf4521 = NonNullable<FragmentResult4521>;

export type FragmentToken4521 =
  | FragmentSelf4521["__typename"]
  | FragmentSelf4521["typenameHint"] | FragmentToken4519 | FragmentToken4520;
