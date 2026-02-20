import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2918 } from "./fragment2918";
import type { FragmentToken2919 } from "./fragment2919";

export const FRAGMENT_2920 = gql(`
  fragment Fragment2920 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult2920 = ResultOf<typeof FRAGMENT_2920>;
type FragmentSelf2920 = NonNullable<FragmentResult2920>;

export type FragmentToken2920 =
  | FragmentSelf2920["__typename"]
  | FragmentSelf2920["typenameHint"] | FragmentToken2918 | FragmentToken2919;
