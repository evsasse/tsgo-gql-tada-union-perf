import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2844 } from "./fragment2844";
import type { FragmentToken2845 } from "./fragment2845";

export const FRAGMENT_2846 = gql(`
  fragment Fragment2846 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult2846 = ResultOf<typeof FRAGMENT_2846>;
type FragmentSelf2846 = NonNullable<FragmentResult2846>;

export type FragmentToken2846 =
  | FragmentSelf2846["__typename"]
  | FragmentSelf2846["typenameHint"] | FragmentToken2844 | FragmentToken2845;
