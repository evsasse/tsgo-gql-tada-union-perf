import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3519 } from "./fragment3519";
import type { FragmentToken3520 } from "./fragment3520";

export const FRAGMENT_3521 = gql(`
  fragment Fragment3521 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult3521 = ResultOf<typeof FRAGMENT_3521>;
type FragmentSelf3521 = NonNullable<FragmentResult3521>;

export type FragmentToken3521 =
  | FragmentSelf3521["__typename"]
  | FragmentSelf3521["typenameHint"] | FragmentToken3519 | FragmentToken3520;
