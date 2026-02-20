import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3520 } from "./fragment3520";
import type { FragmentToken3521 } from "./fragment3521";

export const FRAGMENT_3522 = gql(`
  fragment Fragment3522 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult3522 = ResultOf<typeof FRAGMENT_3522>;
type FragmentSelf3522 = NonNullable<FragmentResult3522>;

export type FragmentToken3522 =
  | FragmentSelf3522["__typename"]
  | FragmentSelf3522["typenameHint"] | FragmentToken3520 | FragmentToken3521;
