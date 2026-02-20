import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3835 } from "./fragment3835";
import type { FragmentToken3836 } from "./fragment3836";

export const FRAGMENT_3837 = gql(`
  fragment Fragment3837 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult3837 = ResultOf<typeof FRAGMENT_3837>;
type FragmentSelf3837 = NonNullable<FragmentResult3837>;

export type FragmentToken3837 =
  | FragmentSelf3837["__typename"]
  | FragmentSelf3837["typenameHint"] | FragmentToken3835 | FragmentToken3836;
