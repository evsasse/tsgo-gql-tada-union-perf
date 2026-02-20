import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3899 } from "./fragment3899";
import type { FragmentToken3900 } from "./fragment3900";

export const FRAGMENT_3901 = gql(`
  fragment Fragment3901 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult3901 = ResultOf<typeof FRAGMENT_3901>;
type FragmentSelf3901 = NonNullable<FragmentResult3901>;

export type FragmentToken3901 =
  | FragmentSelf3901["__typename"]
  | FragmentSelf3901["typenameHint"] | FragmentToken3899 | FragmentToken3900;
