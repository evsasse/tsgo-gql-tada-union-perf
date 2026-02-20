import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3303 } from "./fragment3303";
import type { FragmentToken3304 } from "./fragment3304";

export const FRAGMENT_3305 = gql(`
  fragment Fragment3305 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult3305 = ResultOf<typeof FRAGMENT_3305>;
type FragmentSelf3305 = NonNullable<FragmentResult3305>;

export type FragmentToken3305 =
  | FragmentSelf3305["__typename"]
  | FragmentSelf3305["typenameHint"] | FragmentToken3303 | FragmentToken3304;
