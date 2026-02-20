import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4727 } from "./fragment4727";
import type { FragmentToken4728 } from "./fragment4728";

export const FRAGMENT_4729 = gql(`
  fragment Fragment4729 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult4729 = ResultOf<typeof FRAGMENT_4729>;
type FragmentSelf4729 = NonNullable<FragmentResult4729>;

export type FragmentToken4729 =
  | FragmentSelf4729["__typename"]
  | FragmentSelf4729["typenameHint"] | FragmentToken4727 | FragmentToken4728;
