import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3417 } from "./fragment3417";
import type { FragmentToken3418 } from "./fragment3418";

export const FRAGMENT_3419 = gql(`
  fragment Fragment3419 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult3419 = ResultOf<typeof FRAGMENT_3419>;
type FragmentSelf3419 = NonNullable<FragmentResult3419>;

export type FragmentToken3419 =
  | FragmentSelf3419["__typename"]
  | FragmentSelf3419["typenameHint"] | FragmentToken3417 | FragmentToken3418;
