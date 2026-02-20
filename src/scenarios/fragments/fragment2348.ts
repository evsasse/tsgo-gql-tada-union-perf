import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2346 } from "./fragment2346";
import type { FragmentToken2347 } from "./fragment2347";

export const FRAGMENT_2348 = gql(`
  fragment Fragment2348 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult2348 = ResultOf<typeof FRAGMENT_2348>;
type FragmentSelf2348 = NonNullable<FragmentResult2348>;

export type FragmentToken2348 =
  | FragmentSelf2348["__typename"]
  | FragmentSelf2348["typenameHint"] | FragmentToken2346 | FragmentToken2347;
