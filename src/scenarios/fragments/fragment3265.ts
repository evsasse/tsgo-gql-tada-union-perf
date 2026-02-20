import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3263 } from "./fragment3263";
import type { FragmentToken3264 } from "./fragment3264";

export const FRAGMENT_3265 = gql(`
  fragment Fragment3265 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult3265 = ResultOf<typeof FRAGMENT_3265>;
type FragmentSelf3265 = NonNullable<FragmentResult3265>;

export type FragmentToken3265 =
  | FragmentSelf3265["__typename"]
  | FragmentSelf3265["typenameHint"] | FragmentToken3263 | FragmentToken3264;
