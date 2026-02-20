import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3398 } from "./fragment3398";
import type { FragmentToken3399 } from "./fragment3399";

export const FRAGMENT_3400 = gql(`
  fragment Fragment3400 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult3400 = ResultOf<typeof FRAGMENT_3400>;
type FragmentSelf3400 = NonNullable<FragmentResult3400>;

export type FragmentToken3400 =
  | FragmentSelf3400["__typename"]
  | FragmentSelf3400["typenameHint"] | FragmentToken3398 | FragmentToken3399;
