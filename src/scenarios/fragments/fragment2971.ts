import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2969 } from "./fragment2969";
import type { FragmentToken2970 } from "./fragment2970";

export const FRAGMENT_2971 = gql(`
  fragment Fragment2971 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult2971 = ResultOf<typeof FRAGMENT_2971>;
type FragmentSelf2971 = NonNullable<FragmentResult2971>;

export type FragmentToken2971 =
  | FragmentSelf2971["__typename"]
  | FragmentSelf2971["typenameHint"] | FragmentToken2969 | FragmentToken2970;
