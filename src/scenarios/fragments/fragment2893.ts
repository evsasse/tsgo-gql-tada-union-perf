import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2891 } from "./fragment2891";
import type { FragmentToken2892 } from "./fragment2892";

export const FRAGMENT_2893 = gql(`
  fragment Fragment2893 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult2893 = ResultOf<typeof FRAGMENT_2893>;
type FragmentSelf2893 = NonNullable<FragmentResult2893>;

export type FragmentToken2893 =
  | FragmentSelf2893["__typename"]
  | FragmentSelf2893["typenameHint"] | FragmentToken2891 | FragmentToken2892;
