import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2285 } from "./fragment2285";
import type { FragmentToken2286 } from "./fragment2286";

export const FRAGMENT_2287 = gql(`
  fragment Fragment2287 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult2287 = ResultOf<typeof FRAGMENT_2287>;
type FragmentSelf2287 = NonNullable<FragmentResult2287>;

export type FragmentToken2287 =
  | FragmentSelf2287["__typename"]
  | FragmentSelf2287["typenameHint"] | FragmentToken2285 | FragmentToken2286;
