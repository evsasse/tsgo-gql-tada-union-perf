import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2164 } from "./fragment2164";
import type { FragmentToken2165 } from "./fragment2165";

export const FRAGMENT_2166 = gql(`
  fragment Fragment2166 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult2166 = ResultOf<typeof FRAGMENT_2166>;
type FragmentSelf2166 = NonNullable<FragmentResult2166>;

export type FragmentToken2166 =
  | FragmentSelf2166["__typename"]
  | FragmentSelf2166["typenameHint"] | FragmentToken2164 | FragmentToken2165;
