import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2957 } from "./fragment2957";
import type { FragmentToken2958 } from "./fragment2958";

export const FRAGMENT_2959 = gql(`
  fragment Fragment2959 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult2959 = ResultOf<typeof FRAGMENT_2959>;
type FragmentSelf2959 = NonNullable<FragmentResult2959>;

export type FragmentToken2959 =
  | FragmentSelf2959["__typename"]
  | FragmentSelf2959["typenameHint"] | FragmentToken2957 | FragmentToken2958;
