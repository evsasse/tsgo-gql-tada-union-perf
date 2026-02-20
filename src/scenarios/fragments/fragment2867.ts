import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2865 } from "./fragment2865";
import type { FragmentToken2866 } from "./fragment2866";

export const FRAGMENT_2867 = gql(`
  fragment Fragment2867 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult2867 = ResultOf<typeof FRAGMENT_2867>;
type FragmentSelf2867 = NonNullable<FragmentResult2867>;

export type FragmentToken2867 =
  | FragmentSelf2867["__typename"]
  | FragmentSelf2867["typenameHint"] | FragmentToken2865 | FragmentToken2866;
