import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4132 } from "./fragment4132";
import type { FragmentToken4133 } from "./fragment4133";

export const FRAGMENT_4134 = gql(`
  fragment Fragment4134 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult4134 = ResultOf<typeof FRAGMENT_4134>;
type FragmentSelf4134 = NonNullable<FragmentResult4134>;

export type FragmentToken4134 =
  | FragmentSelf4134["__typename"]
  | FragmentSelf4134["typenameHint"] | FragmentToken4132 | FragmentToken4133;
