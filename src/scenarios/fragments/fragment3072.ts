import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3070 } from "./fragment3070";
import type { FragmentToken3071 } from "./fragment3071";

export const FRAGMENT_3072 = gql(`
  fragment Fragment3072 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult3072 = ResultOf<typeof FRAGMENT_3072>;
type FragmentSelf3072 = NonNullable<FragmentResult3072>;

export type FragmentToken3072 =
  | FragmentSelf3072["__typename"]
  | FragmentSelf3072["typenameHint"] | FragmentToken3070 | FragmentToken3071;
