import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3391 } from "./fragment3391";
import type { FragmentToken3392 } from "./fragment3392";

export const FRAGMENT_3393 = gql(`
  fragment Fragment3393 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult3393 = ResultOf<typeof FRAGMENT_3393>;
type FragmentSelf3393 = NonNullable<FragmentResult3393>;

export type FragmentToken3393 =
  | FragmentSelf3393["__typename"]
  | FragmentSelf3393["typenameHint"] | FragmentToken3391 | FragmentToken3392;
