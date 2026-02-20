import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3908 } from "./fragment3908";
import type { FragmentToken3909 } from "./fragment3909";

export const FRAGMENT_3910 = gql(`
  fragment Fragment3910 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult3910 = ResultOf<typeof FRAGMENT_3910>;
type FragmentSelf3910 = NonNullable<FragmentResult3910>;

export type FragmentToken3910 =
  | FragmentSelf3910["__typename"]
  | FragmentSelf3910["typenameHint"] | FragmentToken3908 | FragmentToken3909;
