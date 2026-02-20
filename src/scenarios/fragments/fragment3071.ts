import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3069 } from "./fragment3069";
import type { FragmentToken3070 } from "./fragment3070";

export const FRAGMENT_3071 = gql(`
  fragment Fragment3071 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult3071 = ResultOf<typeof FRAGMENT_3071>;
type FragmentSelf3071 = NonNullable<FragmentResult3071>;

export type FragmentToken3071 =
  | FragmentSelf3071["__typename"]
  | FragmentSelf3071["typenameHint"] | FragmentToken3069 | FragmentToken3070;
