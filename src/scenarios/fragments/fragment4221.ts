import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4219 } from "./fragment4219";
import type { FragmentToken4220 } from "./fragment4220";

export const FRAGMENT_4221 = gql(`
  fragment Fragment4221 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult4221 = ResultOf<typeof FRAGMENT_4221>;
type FragmentSelf4221 = NonNullable<FragmentResult4221>;

export type FragmentToken4221 =
  | FragmentSelf4221["__typename"]
  | FragmentSelf4221["typenameHint"] | FragmentToken4219 | FragmentToken4220;
