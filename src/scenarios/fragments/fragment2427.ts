import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2425 } from "./fragment2425";
import type { FragmentToken2426 } from "./fragment2426";

export const FRAGMENT_2427 = gql(`
  fragment Fragment2427 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult2427 = ResultOf<typeof FRAGMENT_2427>;
type FragmentSelf2427 = NonNullable<FragmentResult2427>;

export type FragmentToken2427 =
  | FragmentSelf2427["__typename"]
  | FragmentSelf2427["typenameHint"] | FragmentToken2425 | FragmentToken2426;
