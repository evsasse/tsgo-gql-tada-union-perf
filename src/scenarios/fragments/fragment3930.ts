import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3928 } from "./fragment3928";
import type { FragmentToken3929 } from "./fragment3929";

export const FRAGMENT_3930 = gql(`
  fragment Fragment3930 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult3930 = ResultOf<typeof FRAGMENT_3930>;
type FragmentSelf3930 = NonNullable<FragmentResult3930>;

export type FragmentToken3930 =
  | FragmentSelf3930["__typename"]
  | FragmentSelf3930["typenameHint"] | FragmentToken3928 | FragmentToken3929;
