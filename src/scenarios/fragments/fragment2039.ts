import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2037 } from "./fragment2037";
import type { FragmentToken2038 } from "./fragment2038";

export const FRAGMENT_2039 = gql(`
  fragment Fragment2039 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult2039 = ResultOf<typeof FRAGMENT_2039>;
type FragmentSelf2039 = NonNullable<FragmentResult2039>;

export type FragmentToken2039 =
  | FragmentSelf2039["__typename"]
  | FragmentSelf2039["typenameHint"] | FragmentToken2037 | FragmentToken2038;
