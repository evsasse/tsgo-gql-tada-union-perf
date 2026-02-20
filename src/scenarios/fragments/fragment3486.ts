import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3484 } from "./fragment3484";
import type { FragmentToken3485 } from "./fragment3485";

export const FRAGMENT_3486 = gql(`
  fragment Fragment3486 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult3486 = ResultOf<typeof FRAGMENT_3486>;
type FragmentSelf3486 = NonNullable<FragmentResult3486>;

export type FragmentToken3486 =
  | FragmentSelf3486["__typename"]
  | FragmentSelf3486["typenameHint"] | FragmentToken3484 | FragmentToken3485;
