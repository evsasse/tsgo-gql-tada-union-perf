import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3283 } from "./fragment3283";
import type { FragmentToken3284 } from "./fragment3284";

export const FRAGMENT_3285 = gql(`
  fragment Fragment3285 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult3285 = ResultOf<typeof FRAGMENT_3285>;
type FragmentSelf3285 = NonNullable<FragmentResult3285>;

export type FragmentToken3285 =
  | FragmentSelf3285["__typename"]
  | FragmentSelf3285["typenameHint"] | FragmentToken3283 | FragmentToken3284;
