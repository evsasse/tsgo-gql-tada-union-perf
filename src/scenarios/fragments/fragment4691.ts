import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4689 } from "./fragment4689";
import type { FragmentToken4690 } from "./fragment4690";

export const FRAGMENT_4691 = gql(`
  fragment Fragment4691 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult4691 = ResultOf<typeof FRAGMENT_4691>;
type FragmentSelf4691 = NonNullable<FragmentResult4691>;

export type FragmentToken4691 =
  | FragmentSelf4691["__typename"]
  | FragmentSelf4691["typenameHint"] | FragmentToken4689 | FragmentToken4690;
