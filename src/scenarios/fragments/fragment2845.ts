import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2843 } from "./fragment2843";
import type { FragmentToken2844 } from "./fragment2844";

export const FRAGMENT_2845 = gql(`
  fragment Fragment2845 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult2845 = ResultOf<typeof FRAGMENT_2845>;
type FragmentSelf2845 = NonNullable<FragmentResult2845>;

export type FragmentToken2845 =
  | FragmentSelf2845["__typename"]
  | FragmentSelf2845["typenameHint"] | FragmentToken2843 | FragmentToken2844;
