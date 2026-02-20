import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3332 } from "./fragment3332";
import type { FragmentToken3333 } from "./fragment3333";

export const FRAGMENT_3334 = gql(`
  fragment Fragment3334 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult3334 = ResultOf<typeof FRAGMENT_3334>;
type FragmentSelf3334 = NonNullable<FragmentResult3334>;

export type FragmentToken3334 =
  | FragmentSelf3334["__typename"]
  | FragmentSelf3334["typenameHint"] | FragmentToken3332 | FragmentToken3333;
