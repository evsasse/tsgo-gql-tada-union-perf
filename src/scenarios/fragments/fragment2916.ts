import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2914 } from "./fragment2914";
import type { FragmentToken2915 } from "./fragment2915";

export const FRAGMENT_2916 = gql(`
  fragment Fragment2916 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult2916 = ResultOf<typeof FRAGMENT_2916>;
type FragmentSelf2916 = NonNullable<FragmentResult2916>;

export type FragmentToken2916 =
  | FragmentSelf2916["__typename"]
  | FragmentSelf2916["typenameHint"] | FragmentToken2914 | FragmentToken2915;
