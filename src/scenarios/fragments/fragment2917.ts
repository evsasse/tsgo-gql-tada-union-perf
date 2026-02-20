import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2915 } from "./fragment2915";
import type { FragmentToken2916 } from "./fragment2916";

export const FRAGMENT_2917 = gql(`
  fragment Fragment2917 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult2917 = ResultOf<typeof FRAGMENT_2917>;
type FragmentSelf2917 = NonNullable<FragmentResult2917>;

export type FragmentToken2917 =
  | FragmentSelf2917["__typename"]
  | FragmentSelf2917["typenameHint"] | FragmentToken2915 | FragmentToken2916;
