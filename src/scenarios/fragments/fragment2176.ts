import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2174 } from "./fragment2174";
import type { FragmentToken2175 } from "./fragment2175";

export const FRAGMENT_2176 = gql(`
  fragment Fragment2176 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult2176 = ResultOf<typeof FRAGMENT_2176>;
type FragmentSelf2176 = NonNullable<FragmentResult2176>;

export type FragmentToken2176 =
  | FragmentSelf2176["__typename"]
  | FragmentSelf2176["typenameHint"] | FragmentToken2174 | FragmentToken2175;
