import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3028 } from "./fragment3028";
import type { FragmentToken3029 } from "./fragment3029";

export const FRAGMENT_3030 = gql(`
  fragment Fragment3030 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult3030 = ResultOf<typeof FRAGMENT_3030>;
type FragmentSelf3030 = NonNullable<FragmentResult3030>;

export type FragmentToken3030 =
  | FragmentSelf3030["__typename"]
  | FragmentSelf3030["typenameHint"] | FragmentToken3028 | FragmentToken3029;
