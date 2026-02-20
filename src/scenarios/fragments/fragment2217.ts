import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2215 } from "./fragment2215";
import type { FragmentToken2216 } from "./fragment2216";

export const FRAGMENT_2217 = gql(`
  fragment Fragment2217 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult2217 = ResultOf<typeof FRAGMENT_2217>;
type FragmentSelf2217 = NonNullable<FragmentResult2217>;

export type FragmentToken2217 =
  | FragmentSelf2217["__typename"]
  | FragmentSelf2217["typenameHint"] | FragmentToken2215 | FragmentToken2216;
