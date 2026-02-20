import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2159 } from "./fragment2159";
import type { FragmentToken2160 } from "./fragment2160";

export const FRAGMENT_2161 = gql(`
  fragment Fragment2161 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult2161 = ResultOf<typeof FRAGMENT_2161>;
type FragmentSelf2161 = NonNullable<FragmentResult2161>;

export type FragmentToken2161 =
  | FragmentSelf2161["__typename"]
  | FragmentSelf2161["typenameHint"] | FragmentToken2159 | FragmentToken2160;
