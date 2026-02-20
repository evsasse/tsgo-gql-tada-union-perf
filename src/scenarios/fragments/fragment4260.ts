import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4258 } from "./fragment4258";
import type { FragmentToken4259 } from "./fragment4259";

export const FRAGMENT_4260 = gql(`
  fragment Fragment4260 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult4260 = ResultOf<typeof FRAGMENT_4260>;
type FragmentSelf4260 = NonNullable<FragmentResult4260>;

export type FragmentToken4260 =
  | FragmentSelf4260["__typename"]
  | FragmentSelf4260["typenameHint"] | FragmentToken4258 | FragmentToken4259;
