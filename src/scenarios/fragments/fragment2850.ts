import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2848 } from "./fragment2848";
import type { FragmentToken2849 } from "./fragment2849";

export const FRAGMENT_2850 = gql(`
  fragment Fragment2850 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult2850 = ResultOf<typeof FRAGMENT_2850>;
type FragmentSelf2850 = NonNullable<FragmentResult2850>;

export type FragmentToken2850 =
  | FragmentSelf2850["__typename"]
  | FragmentSelf2850["typenameHint"] | FragmentToken2848 | FragmentToken2849;
