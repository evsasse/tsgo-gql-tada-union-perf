import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3418 } from "./fragment3418";
import type { FragmentToken3419 } from "./fragment3419";

export const FRAGMENT_3420 = gql(`
  fragment Fragment3420 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult3420 = ResultOf<typeof FRAGMENT_3420>;
type FragmentSelf3420 = NonNullable<FragmentResult3420>;

export type FragmentToken3420 =
  | FragmentSelf3420["__typename"]
  | FragmentSelf3420["typenameHint"] | FragmentToken3418 | FragmentToken3419;
