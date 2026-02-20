import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3223 } from "./fragment3223";
import type { FragmentToken3224 } from "./fragment3224";

export const FRAGMENT_3225 = gql(`
  fragment Fragment3225 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult3225 = ResultOf<typeof FRAGMENT_3225>;
type FragmentSelf3225 = NonNullable<FragmentResult3225>;

export type FragmentToken3225 =
  | FragmentSelf3225["__typename"]
  | FragmentSelf3225["typenameHint"] | FragmentToken3223 | FragmentToken3224;
