import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2985 } from "./fragment2985";
import type { FragmentToken2986 } from "./fragment2986";

export const FRAGMENT_2987 = gql(`
  fragment Fragment2987 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult2987 = ResultOf<typeof FRAGMENT_2987>;
type FragmentSelf2987 = NonNullable<FragmentResult2987>;

export type FragmentToken2987 =
  | FragmentSelf2987["__typename"]
  | FragmentSelf2987["typenameHint"] | FragmentToken2985 | FragmentToken2986;
